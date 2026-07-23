
/**
 * Thuật toán phát hiện câu hỏi trùng lặp dựa trên độ tương đồng văn bản.
 * @param {number} threshold - Ngưỡng tương đồng (0.97 - 1.0)
 * @return {Array<string>} Mảng các UID bị trùng lặp
 */
function detectDuplicates(threshold) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Questions");
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  // Giả định cấu trúc cột: A: UID, B: IDString, C: Content
  const UID_COL = 0;
  const CONTENT_COL = 2;

  // 1. Tiền xử lý dữ liệu (Làm sạch)
  const cleanContent = (text) => {
    if (!text) return "";
    return text.toString()
      .toLowerCase()
      // Loại bỏ các lệnh LaTeX phổ biến
      .replace(/\\begin\{.*\}|\\end\{.*\}|\\choice|\\choiceTF|\\loigiai|\\textit\{|\\textbf\{/g, "")
      // Loại bỏ mã ID %[...]
      .replace(/%\[.*\]/g, "")
      // Loại bỏ các thẻ HTML nếu có
      .replace(/<[^>]*>?/gm, '')
      // Loại bỏ khoảng trắng thừa, xuống dòng, ký tự đặc biệt rườm rà
      .replace(/[\s\t\n\r\W_]+/g, "");
  };

  const processedData = data.slice(1).map(row => ({
    uid: String(row[UID_COL]),
    text: cleanContent(row[CONTENT_COL])
  }));

  const duplicates = [];
  const seenUids = new Set();

  // 2. Thuật toán Dice Coefficient (So sánh Bigrams)
  const getBigrams = (str) => {
    const bigrams = new Set();
    for (let i = 0; i < str.length - 1; i++) {
      bigrams.add(str.substring(i, i + 2));
    }
    return bigrams;
  };

  const calculateSimilarity = (s1, s2) => {
    if (s1 === s2) return 1.0;
    if (s1.length < 2 || s2.length < 2) return 0;

    const b1 = getBigrams(s1);
    const b2 = getBigrams(s2);
    
    let intersection = 0;
    b1.forEach(bit => {
      if (b2.has(bit)) intersection++;
    });

    return (2 * intersection) / (b1.size + b2.size);
  };

  // 3. Quét trùng lặp (Tối ưu hóa tránh so sánh ngược)
  for (let i = 0; i < processedData.length; i++) {
    const itemA = processedData[i];
    if (seenUids.has(itemA.uid)) continue;

    for (let j = i + 1; j < processedData.length; j++) {
      const itemB = processedData[j];
      if (seenUids.has(itemB.uid)) continue;

      let score = 0;
      if (threshold === 1.0) {
        score = itemA.text === itemB.text ? 1.0 : 0;
      } else {
        score = calculateSimilarity(itemA.text, itemB.text);
      }

      if (score >= threshold) {
        duplicates.push(itemB.uid);
        seenUids.add(itemB.uid); // Đánh dấu là đã xử lý để không so sánh lại
      }
    }
  }

  return duplicates;
}
