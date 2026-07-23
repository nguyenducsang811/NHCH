
import { CurriculumGrade, GradeCode, SubjectCode, LevelCode } from './types';

export const GRADE_MAP: Record<GradeCode, string> = {
  '6': 'Lớp 6',
  '7': 'Lớp 7',
  '8': 'Lớp 8',
  '9': 'Lớp 9',
  '0': 'Lớp 10',
  '1': 'Lớp 11',
  '2': 'Lớp 12'
};

export const GRADE_TO_CODE: Record<string, string> = {
  "6": "6", "7": "7", "8": "8", "9": "9", "10": "0", "11": "1", "12": "2"
};

export const SUBJECT_MAP: Record<SubjectCode, string> = {
  'D': 'Đại số / Giải tích',
  'H': 'Hình học',
  'X': 'Xác suất & Thống kê'
} as any;

export const LEVEL_MAP: Record<LevelCode, string> = {
  'N': 'Nhận biết',
  'H': 'Thông hiểu',
  'V': 'Vận dụng',
  'C': 'Vận dụng cao'
};

export const CURRICULUM_DATA: Record<string, CurriculumGrade> = {
  // ====================== LỚP 6 ======================
 "6": {
  "code": "6",
  "D": [
   {
    "code": "1", "title": "CHƯƠNG I. TẬP HỢP CÁC SỐ TỰ NHIÊN",
    "lessons": [
     { "code": "1", "title": "Bài 1. Tập hợp", "types": [
      { "code": "1", "title": "Nhận biết một phần tử thuộc hay không thuộc tập hợp" },
      { "code": "2", "title": "Viết tập hợp bằng cách liệt kê các phần tử" },
      { "code": "3", "title": "Viết tập hợp bằng cách chỉ ra tính chất đặc trưng" },
      { "code": "4", "title": "Xác định số phần tử của tập hợp" },
      { "code": "5", "title": "Viết các tập hợp con của một tập hợp cho trước" },
      { "code": "6", "title": "Sử dụng biểu đồ Ven để minh họa tập hợp" },
      { "code": "7", "title": "Bài toán thực tế liên quan đến giao của hai tập hợp" },
      { "code": "8", "title": "Mô tả một tập hợp cho trước" },
      { "code": "9", "title": "Quan hệ giữa phần tử và tập hợp" },
      { "code": "10", "title": "Tìm số phần tử của tập hợp" },
      { "code": "11", "title": "Minh họa tập hợp cho trước bằng biểu đồ Ven" }
     ]},
     { "code": "2", "title": "Bài 2. Cách ghi số tự nhiên", "types": [
      { "code": "1", "title": "Đọc và viết số tự nhiên trong hệ thập phân" },
      { "code": "2", "title": "Xác định giá trị của các chữ số theo hàng và lớp" },
      { "code": "3", "title": "Đọc và viết các số La Mã từ 1 đến 30" },
      { "code": "4", "title": "Viết số tự nhiên từ cấu tạo thập phân của nó" },
      { "code": "5", "title": "Đếm số lượng số tự nhiên thỏa mãn điều kiện cho trước" },
      { "code": "6", "title": "Ghi các số tự nhiên, phân biệt số và chữ số, giá trị của chữ số" },
      { "code": "7", "title": "Viết số tự nhiên theo yêu cầu cho trước" },
      { "code": "8", "title": "Xác định sự tăng giảm giá trị của một số khi thêm một chữ số vào số đó" },
      { "code": "9", "title": "Đọc và viết các chữ số bằng La Mã" }
     ]},
     { "code": "3", "title": "Bài 3. Thứ tự trong tập hợp các số tự nhiên", "types": [
      { "code": "1", "title": "So sánh hai số tự nhiên đơn giản" },
      { "code": "2", "title": "Tìm số liền trước, số liền sau của một số tự nhiên" },
      { "code": "3", "title": "Biểu diễn các số tự nhiên trên tia số" },
      { "code": "4", "title": "Sắp xếp các số tự nhiên theo thứ tự tăng dần hoặc giảm dần" },
      { "code": "5", "title": "Tìm các số tự nhiên x thỏa mãn điều kiện kẹp (a < x < b)" },
      { "code": "6", "title": "Tìm quy luật của dãy số tự nhiên" },
      { "code": "7", "title": "Biểu diễn tập hợp các số tự nhiên thỏa mãn điều kiện cho trước" },
      { "code": "8", "title": "Biểu diễn số tự nhiên trên trục số" },
      { "code": "9", "title": "Đếm số hoặc chữ số" }
     ]},
     { "code": "4", "title": "Bài 4. Phép cộng và phép trừ số tự nhiên", "types": [
      { "code": "1", "title": "Thực hiện phép cộng và trừ số tự nhiên (đặt tính rồi tính)" },
      { "code": "2", "title": "Áp dụng tính chất giao hoán, kết hợp để tính nhanh" },
      { "code": "3", "title": "Tìm thành phần chưa biết (tìm x) trong phép cộng, trừ" },
      { "code": "4", "title": "So sánh hai tổng hoặc hai hiệu mà không tính giá trị cụ thể" },
      { "code": "5", "title": "Giải toán đố thực tế bằng phép cộng và trừ" },
      { "code": "6", "title": "Tính tổng các dãy số có quy luật" },
      { "code": "7", "title": "Thực hiện phép tính cộng trừ các số tự nhiên" },
      { "code": "8", "title": "Tìm số hoặc chữ số chưa biết trong phép tính" },
      { "code": "9", "title": "Các bài toán thực tế sử dụng phép cộng và phép trừ" },
      { "code": "10", "title": "Tính tổng của dãy số tự nhiên cách đều" }
     ]},
     { "code": "5", "title": "Bài 5. Phép nhân và phép chia số tự nhiên", "types": [
      { "code": "1", "title": "Thực hiện phép nhân và phép chia (chia hết, chia có dư)" },
      { "code": "2", "title": "Áp dụng tính chất phân phối để tính nhanh, tính hợp lý" },
      { "code": "3", "title": "Tìm x trong phép nhân và phép chia" },
      { "code": "4", "title": "Tính nhẩm phép nhân, chia với 10, 100, 1000..." },
      { "code": "5", "title": "Bài toán tìm số bị chia, số chia, thương và số dư" },
      { "code": "6", "title": "Giải toán có lời văn liên quan đến bốn phép tính" }
     ]},
     { "code": "6", "title": "Bài 6. Luỹ thừa với số mũ tự nhiên", "types": [
      { "code": "1", "title": "Viết gọn một tích các thừa số bằng nhau dưới dạng lũy thừa" },
      { "code": "2", "title": "Tính giá trị của một lũy thừa" },
      { "code": "3", "title": "Nhân hai lũy thừa cùng cơ số" },
      { "code": "4", "title": "Chia hai lũy thừa cùng cơ số" },
      { "code": "5", "title": "Viết một số tự nhiên dưới dạng tổng các lũy thừa của 10" },
      { "code": "6", "title": "So sánh hai lũy thừa (cùng cơ số, cùng số mũ hoặc qua trung gian)" },
      { "code": "7", "title": "Tìm chữ số tận cùng của một lũy thừa" },
      { "code": "8", "title": "Tìm cơ số, số mũ của một lũy thừa cho trước" },
      { "code": "9", "title": "Viết kết quả dưới dạng một lũy thừa" },
      { "code": "10", "title": "Bài tập liên qua đến a bình phương, a lập phương" },
      { "code": "11", "title": "Thực hiện phép nhân, phép chia các lũy thừa cùng cơ số" },
      { "code": "12", "title": "Các bài toán thực tế sử dụng lũy thừa" }
     ]},
     { "code": "7", "title": "Bài 7. Thứ tự thực hiện các phép tính", "types": [
      { "code": "1", "title": "Thực hiện phép tính biểu thức không có dấu ngoặc" },
      { "code": "2", "title": "Thực hiện phép tính biểu thức có dấu ngoặc (tròn, vuông, nhọn)" },
      { "code": "3", "title": "Tìm x trong biểu thức chứa nhiều phép tính" },
      { "code": "4", "title": "Tính giá trị biểu thức bằng cách thuận tiện nhất" },
      { "code": "5", "title": "Sử dụng máy tính cầm tay để tính toán" },
      { "code": "6", "title": "Điền dấu phép tính để được biểu thức đúng" },
      { "code": "7", "title": "Thực hiện phép tính theo thứ tự" },
      { "code": "8", "title": "Lập biểu thức có chứa chữ và tính giá trị biểu thức có chứa chữ" },
      { "code": "9", "title": "Tìm số chưa biết trong phép tính" },
      { "code": "10", "title": "So sánh giá trị của hai biểu thức số" }
     ]}
    ]
   },
   {
    "code": "2", "title": "CHƯƠNG II. TÍNH CHIA HẾT TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN",
    "lessons": [
     { "code": "8", "title": "Bài 8. Quan hệ chia hết và tính chất", "types": [
      { "code": "1", "title": "Nhận biết số này chia hết cho số kia" },
      { "code": "2", "title": "Viết tập hợp các ước và các bội của một số" },
      { "code": "3", "title": "Tìm x là ước hoặc bội của một số thỏa mãn điều kiện" },
      { "code": "4", "title": "Xét tính chia hết của một tổng hoặc một hiệu" },
      { "code": "5", "title": "Xét tính chia hết của một tích" },
      { "code": "6", "title": "Chứng minh biểu thức chia hết cho một số" },
      { "code": "7", "title": "Tìm ước hay bội của một số thỏa mãn điều kiện cho trước" },
      { "code": "8", "title": "Tìm điều kiện của một số hạng để tổng (hiệu) chia hết cho một số" },
      { "code": "9", "title": "Xét tính chia hết của một tổng (hiệu) các tích và các số hạng" },
      { "code": "10", "title": "Xét tính chia hết của một tổng các lũy thừa cùng cơ số" }
     ]},
     { "code": "9", "title": "Bài 9. Dấu hiệu chia hết", "types": [
      { "code": "1", "title": "Nhận biết các số chia hết cho 2, cho 5" },
      { "code": "2", "title": "Nhận biết các số chia hết cho 3, cho 9" },
      { "code": "3", "title": "Tìm các chữ số chưa biết để số thỏa mãn dấu hiệu chia hết" },
      { "code": "4", "title": "Viết các số thỏa mãn nhiều dấu hiệu chia hết cùng lúc" },
      { "code": "5", "title": "Bài toán về số dư trong phép chia cho 2, 3, 5, 9" },
      { "code": "6", "title": "Chứng minh tính chia hết dựa vào cấu tạo số" },
      { "code": "7", "title": "Xét tính chia hết cho 2, cho 5, cho 9, cho 3 của một tổng (hiệu)" },
      { "code": "8", "title": "Lập số chia hết cho 2, cho 5, cho 9, cho 3 từ các chữ số cho trước" },
      { "code": "9", "title": "Tìm các chữ số của một số thỏa mãn điều kiện chia hết cho 2, cho 5, cho 9, cho 3" },
      { "code": "10", "title": "Các bài toán về dấu hiệu chia hết trong thực tế" }
     ]},
     { "code": "10", "title": "Bài 10. Số nguyên tố", "types": [
      { "code": "1", "title": "Nhận biết số nguyên tố và hợp số" },
      { "code": "2", "title": "Phân tích một số ra thừa số nguyên tố (sơ đồ cây/cột dọc)" },
      { "code": "3", "title": "Tìm ước của một số thông qua phân tích thừa số nguyên tố" },
      { "code": "4", "title": "Xác định số lượng ước của một số" },
      { "code": "5", "title": "Các bài toán tìm số nguyên tố thỏa mãn điều kiện đặc biệt" }
     ]},
     { "code": "11", "title": "Bài 11. Ước chung. Ước chung lớn nhất", "types": [
      { "code": "1", "title": "Tìm ước chung của hai hay nhiều số" },
      { "code": "2", "title": "Tìm ƯCLN bằng cách phân tích thừa số nguyên tố" },
      { "code": "3", "title": "Tìm ước chung thông qua tìm ƯCLN" },
      { "code": "4", "title": "Rút gọn phân số về tối giản dựa vào ƯCLN" },
      { "code": "5", "title": "Bài toán chia đều đồ vật vào các phần (ứng dụng ƯCLN)" },
      { "code": "6", "title": "Tìm hai số tự nhiên biết tổng/tích và ƯCLN của chúng" },
      { "code": "7", "title": "Tìm phân số tối giản" },
      { "code": "8", "title": "Ứng dụng ước chung và ước chung lớn nhất để giải các bài toán thực tế" }
     ]},
     { "code": "12", "title": "Bài 12. Bội chung. Bội chung nhỏ nhất", "types": [
      { "code": "1", "title": "Tìm bội chung của hai hay nhiều số" },
      { "code": "2", "title": "Tìm BCNN bằng cách phân tích thừa số nguyên tố" },
      { "code": "3", "title": "Tìm bội chung thông qua tìm BCNN" },
      { "code": "4", "title": "Quy đồng mẫu số các phân số dựa vào BCNN" },
      { "code": "5", "title": "Bài toán tìm khoảng thời gian lặp lại hoặc số lượng vật (ứng dụng BCNN)" },
      { "code": "6", "title": "Tìm hai số tự nhiên biết tích và BCNN của chúng" },
      { "code": "7", "title": "Ứng dụng bội chung và bội chung nhỏ nhất để giải các bài toán thực tế" }
     ]}
    ]
   },
   {
    "code": "3", "title": "CHƯƠNG III. SỐ NGUYÊN",
    "lessons": [
     { "code": "13", "title": "Bài 13. Tập hợp các số nguyên", "types": [
      { "code": "1", "title": "Nhận biết và phân biệt số nguyên âm, nguyên dương, số 0" },
      { "code": "2", "title": "Biểu diễn số nguyên trên trục số" },
      { "code": "3", "title": "Tìm số đối của số nguyên" },
      { "code": "4", "title": "So sánh hai số nguyên" },
      { "code": "5", "title": "Tìm các số nguyên x thỏa mãn khoảng giá trị" },
      { "code": "6", "title": "Các bài toán thực tế về số nguyên âm" },
      { "code": "7", "title": "Tìm số nguyên với điều kiện cho trước" },
      { "code": "8", "title": "Xác định phần dấu và phần số tự nhiên của một số nguyên" }
     ]},
     { "code": "14", "title": "Bài 14. Phép cộng và phép trừ số nguyên", "types": [
      { "code": "1", "title": "Cộng hai số nguyên cùng dấu" },
      { "code": "2", "title": "Cộng hai số nguyên khác dấu" },
      { "code": "3", "title": "Trừ hai số nguyên (chuyển về phép cộng với số đối)" },
      { "code": "4", "title": "Tính tổng đại số của dãy số nguyên" },
      { "code": "5", "title": "Tìm x trong đẳng thức chứa phép cộng trừ số nguyên" },
      { "code": "6", "title": "Bài toán thực tế về sự thay đổi (nhiệt độ, độ cao, tài khoản)" },
      { "code": "7", "title": "Tính nhanh, tính hợp lí" },
      { "code": "8", "title": "Các bài toán về phép cộng, phép trừ số nguyên trong thực tế" }
     ]},
     { "code": "15", "title": "Bài 15. Quy tắc dấu ngoặc", "types": [
      { "code": "1", "title": "Bỏ dấu ngoặc trong biểu thức đơn giản" },
      { "code": "2", "title": "Bỏ dấu ngoặc rồi tính hợp lý (nhóm các số hạng)" },
      { "code": "3", "title": "Quy tắc chuyển vế đổi dấu để tìm x" },
      { "code": "4", "title": "Đặt dấu ngoặc để nhóm các số hạng một cách hợp lý" },
      { "code": "5", "title": "Tính giá trị biểu thức" },
      { "code": "6", "title": "Rút gọn biểu thức" }
     ]},
     { "code": "16", "title": "Bài 16. Phép nhân số nguyên", "types": [
      { "code": "1", "title": "Nhân hai số nguyên cùng dấu và khác dấu" },
      { "code": "2", "title": "Tính lũy thừa của một số nguyên" },
      { "code": "3", "title": "Áp dụng tính chất phân phối của phép nhân với phép cộng" },
      { "code": "4", "title": "Tìm x và xét dấu của tích các số nguyên" },
      { "code": "5", "title": "Giải toán xét dấu biểu thức chứa nhiều thừa số" },
      { "code": "6", "title": "Bài toán có lời văn" },
      { "code": "7", "title": "Tìm cặp số nguyên (x, y) thỏa mãn điều kiện cho x.y = a với a nguyên" }
     ]},
     { "code": "17", "title": "Bài 17. Phép chia hết. Ước và bội của một số nguyên", "types": [
      { "code": "1", "title": "Thực hiện phép chia hết trong tập số nguyên" },
      { "code": "2", "title": "Tìm ước và bội của một số nguyên" },
      { "code": "3", "title": "Tìm số nguyên x để phân số hoặc biểu thức đạt giá trị nguyên" },
      { "code": "4", "title": "Chứng minh quan hệ chia hết trong tập số nguyên" },
      { "code": "5", "title": "Tìm các bội của một số nguyên cho trước" },
      { "code": "6", "title": "Tìm các ước của một số nguyên cho trước" },
      { "code": "7", "title": "Tìm số nguyên thỏa mãn điều kiện về tính chất chia hết" }
     ]}
    ]
   },
   {
    "code": "6", "title": "CHƯƠNG VI. PHÂN SỐ",
    "lessons": [
     { "code": "23", "title": "Bài 23. Mở rộng phân số. Phân số bằng nhau", "types": [
      { "code": "1", "title": "Nhận biết phân số với tử và mẫu là số nguyên" },
      { "code": "2", "title": "Nhận biết cặp phân số bằng nhau" },
      { "code": "3", "title": "Tìm số nguyên x trong đẳng thức hai phân số (nhân chéo)" },
      { "code": "4", "title": "Lập các cặp phân số bằng nhau từ một đẳng thức tích" }
     ]},
     { "code": "24", "title": "Bài 24. So sánh phân số. Hỗn số dương", "types": [
      { "code": "1", "title": "Quy đồng mẫu số nhiều phân số" },
      { "code": "2", "title": "So sánh phân số cùng mẫu hoặc khác mẫu" },
      { "code": "3", "title": "So sánh phân số bằng cách dùng số trung gian hoặc phần bù" },
      { "code": "4", "title": "Chuyển đổi qua lại giữa hỗn số và phân số" },
      { "code": "5", "title": "Sắp xếp các phân số theo thứ tự" }
     ]},
     { "code": "25", "title": "Bài 25. Phép cộng và phép trừ phân số", "types": [
      { "code": "1", "title": "Cộng trừ hai hay nhiều phân số" },
      { "code": "2", "title": "Tính giá trị biểu thức phân số một cách hợp lý" },
      { "code": "3", "title": "Tìm x trong phép cộng trừ phân số" },
      { "code": "4", "title": "Giải toán đố liên quan đến cộng trừ phân số" }
     ]},
     { "code": "26", "title": "Bài 26. Phép nhân và phép chia phân số", "types": [
      { "code": "1", "title": "Nhân chia phân số và hỗn số" },
      { "code": "2", "title": "Tính giá trị biểu thức hỗn hợp các phép tính phân số" },
      { "code": "3", "title": "Tìm x trong phép nhân chia phân số" },
      { "code": "4", "title": "Tính tích của dãy phân số có quy luật" }
     ]},
     { "code": "27", "title": "Bài 27. Hai bài toán về phân số", "types": [
      { "code": "1", "title": "Tìm giá trị phân số của một số cho trước" },
      { "code": "2", "title": "Tìm một số biết giá trị phân số của nó" },
      { "code": "3", "title": "Bài toán tổng hợp liên quan đến cả hai dạng (phần còn lại)" },
      { "code": "4", "title": "Ứng dụng phân số vào bài toán phần trăm thực tế" }
     ]}
    ]
   },
   {
    "code": "7", "title": "CHƯƠNG VII. SỐ THẬP PHÂN",
    "lessons": [
     { "code": "28", "title": "Bài 28. Số thập phân", "types": [
      { "code": "1", "title": "Viết phân số thập phân dưới dạng số thập phân và ngược lại" },
      { "code": "2", "title": "So sánh các số thập phân (kể cả số âm)" },
      { "code": "3", "title": "Sắp xếp các số thập phân theo thứ tự" },
      { "code": "4", "title": "Phân số thập phân, số thập phân dương, âm, số đối của số thập phân" }
     ]},
     { "code": "29", "title": "Bài 29. Tính toán với số thập phân", "types": [
      { "code": "1", "title": "Cộng, trừ, nhân, chia số thập phân" },
      { "code": "2", "title": "Tính giá trị biểu thức số thập phân hợp lý" },
      { "code": "3", "title": "Tìm x trong đẳng thức chứa số thập phân" },
      { "code": "4", "title": "Giải toán thực tế liên quan đến số thập phân" }
     ]},
     { "code": "30", "title": "Bài 30. Làm tròn và ước lượng", "types": [
      { "code": "1", "title": "Làm tròn số tự nhiên đến hàng cho trước" },
      { "code": "2", "title": "Làm tròn số thập phân đến hàng cho trước" },
      { "code": "3", "title": "Ước lượng kết quả phép tính bằng cách làm tròn" }
     ]},
     { "code": "31", "title": "Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm", "types": [
      { "code": "1", "title": "Tính tỉ số của hai đại lượng (cùng đơn vị đo)" },
      { "code": "2", "title": "Tính tỉ số phần trăm của hai số" },
      { "code": "3", "title": "Tìm giá trị phần trăm của một số" },
      { "code": "4", "title": "Tìm một số khi biết giá trị phần trăm của nó" },
      { "code": "5", "title": "Bài toán lãi suất, giảm giá, tăng trưởng" }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "4", "title": "CHƯƠNG IV. MỘT SỐ HÌNH PHẲNG TRONG THỰC TIỄN",
    "lessons": [
     { "code": "18", "title": "Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều", "types": [
      { "code": "1", "title": "Nhận dạng các hình và các yếu tố (đỉnh, cạnh, góc)" },
      { "code": "2", "title": "Vẽ hình tam giác đều, hình vuông bằng thước và eke/compa" },
      { "code": "3", "title": "Vẽ hình lục giác đều" },
      { "code": "4", "title": "Gấp và cắt giấy tạo hình" }
     ]},
     { "code": "19", "title": "Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân", "types": [
      { "code": "1", "title": "Nhận dạng hình qua hình ảnh trực quan" },
      { "code": "2", "title": "Mô tả tính chất về cạnh, góc, đường chéo của từng hình" },
      { "code": "3", "title": "Vẽ các hình trên giấy kẻ ô vuông hoặc dùng thước" },
      { "code": "4", "title": "Thực hành lắp ghép các hình phẳng" }
     ]},
     { "code": "20", "title": "Bài 20. Chu vi và diện tích của một số tứ giác đã học", "types": [
      { "code": "1", "title": "Tính chu vi và diện tích dựa trên công thức cơ bản" },
      { "code": "2", "title": "Tính diện tích hình phức tạp bằng cách chia nhỏ" },
      { "code": "3", "title": "Tính độ dài cạnh khi biết diện tích hoặc chu vi" },
      { "code": "4", "title": "Giải quyết bài toán thực tế (lát gạch, rào vườn, trồng cây)" },
      { "code": "5", "title": "Tính chu vi và diện tích của hình thoi" },
      { "code": "6", "title": "Tính chu vi và diện tích của hình bình hành, hình thang cân" }
     ]}
    ]
   },
   {
    "code": "5", "title": "CHƯƠNG V. TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG TRONG TỰ NHIÊN",
    "lessons": [
     { "code": "21", "title": "Bài 21. Hình có trục đối xứng", "types": [
      { "code": "1", "title": "Nhận biết hình có trục đối xứng trong thực tế" },
      { "code": "2", "title": "Tìm và vẽ trục đối xứng của hình học phẳng" },
      { "code": "3", "title": "Hoàn thiện hình vẽ dựa vào trục đối xứng" }
     ]},
     { "code": "22", "title": "Bài 22. Hình có tâm đối xứng", "types": [
      { "code": "1", "title": "Nhận biết hình có tâm đối xứng trong thực tế" },
      { "code": "2", "title": "Tìm xác định tâm đối xứng của hình" },
      { "code": "3", "title": "Hoàn thiện hình vẽ dựa vào tâm đối xứng" }
     ]}
    ]
   },
   {
    "code": "8", "title": "CHƯƠNG VIII. NHỮNG HÌNH HÌNH HỌC CƠ BẢN",
    "lessons": [
     { "code": "32", "title": "Bài 32. Điểm và đường thẳng", "types": [
      { "code": "1", "title": "Nhận biết điểm thuộc và không thuộc đường thẳng" },
      { "code": "2", "title": "Vẽ đường thẳng đi qua điểm" },
      { "code": "3", "title": "Nhận biết ba điểm thẳng hàng và điểm nằm giữa" },
      { "code": "4", "title": "Đếm số đường thẳng đi qua các cặp điểm cho trước" },
      { "code": "5", "title": "Hai đường thẳng cắt nhau, song song, trùng nhau" }
     ]},
     { "code": "33", "title": "Bài 33. Điểm nằm giữa hai điểm. Tia", "types": [
      { "code": "1", "title": "Nhận biết tia, gốc tia" },
      { "code": "2", "title": "Nhận biết hai tia đối nhau, hai tia trùng nhau" },
      { "code": "3", "title": "Bài toán về điểm nằm giữa hai điểm trên tia" }
     ]},
     { "code": "34", "title": "Bài 34. Đoạn thẳng. Độ dài đoạn thẳng", "types": [
      { "code": "1", "title": "Nhận biết và vẽ đoạn thẳng" },
      { "code": "2", "title": "Đo độ dài đoạn thẳng và so sánh" },
      { "code": "3", "title": "Tính độ dài đoạn thẳng dựa vào tính chất cộng đoạn thẳng" },
      { "code": "4", "title": "Xác định điểm nằm giữa dựa vào đẳng thức độ dài" }
     ]},
     { "code": "35", "title": "Bài 35. Trung điểm của đoạn thẳng", "types": [
      { "code": "1", "title": "Nhận biết trung điểm của đoạn thẳng" },
      { "code": "2", "title": "Tính độ dài đoạn thẳng liên quan đến trung điểm" },
      { "code": "3", "title": "Chứng minh một điểm là trung điểm của đoạn thẳng" }
     ]},
     { "code": "36", "title": "Bài 36. Góc", "types": [
      { "code": "1", "title": "Nhận biết hình ảnh góc, đỉnh, cạnh" },
      { "code": "2", "title": "Đọc tên góc và kí hiệu góc" },
      { "code": "3", "title": "Nhận biết điểm nằm trong góc" },
      { "code": "4", "title": "Góc bẹt" }
     ]},
     { "code": "37", "title": "Bài 37. Số đo góc", "types": [
      { "code": "1", "title": "Đo góc bằng thước đo góc" },
      { "code": "2", "title": "So sánh số đo hai góc" },
      { "code": "3", "title": "Phân loại góc (vuông, nhọn, tù, bẹt)" },
      { "code": "4", "title": "Tính số đo góc dựa trên tính chất cộng góc đơn giản" },
      { "code": "5", "title": "Nhận biết khái niệm số đo góc và nắm được cách đo góc" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "9", "title": "CHƯƠNG IX. DỮ LIỆU VÀ XÁC SUẤT THỰC NGHIỆM",
    "lessons": [
     { "code": "38", "title": "Bài 38. Dữ liệu và thu thập dữ liệu", "types": [
      { "code": "1", "title": "Phân biệt dữ liệu số và dữ liệu không phải là số" },
      { "code": "2", "title": "Nhận biết các phương pháp thu thập dữ liệu (quan sát, phỏng vấn...)" },
      { "code": "3", "title": "Chuyển đổi dữ liệu từ dạng liệt kê sang bảng" },
      { "code": "4", "title": "Gọi tên bảng dữ liệu ban đầu, xác định đối tượng thống kê" },
      { "code": "5", "title": "Xét tính hợp lí của dữ liệu" }
     ]},
     { "code": "39", "title": "Bài 39. Bảng thống kê và biểu đồ tranh", "types": [
      { "code": "1", "title": "Đọc thông tin từ bảng thống kê" },
      { "code": "2", "title": "Đọc và giải thích biểu đồ tranh" },
      { "code": "3", "title": "Vẽ biểu đồ tranh từ bảng thống kê" },
      { "code": "4", "title": "Một số bảng thống kê trong cuộc sống" },
      { "code": "5", "title": "Các bài toán ứng dụng biểu đồ tranh trong cuộc sống" }
     ]},
     { "code": "40", "title": "Bài 40. Biểu đồ cột", "types": [
      { "code": "1", "title": "Đọc và phân tích số liệu trên biểu đồ cột" },
      { "code": "2", "title": "Lập bảng thống kê từ biểu đồ cột" },
      { "code": "3", "title": "Vẽ biểu đồ cột biểu diễn bảng số liệu" },
      { "code": "4", "title": "Đọc, mô tả và phân tích dữ liệu từ biểu đồ cột" },
      { "code": "5", "title": "Lập bảng thống kê, vẽ và hoàn thiện biểu đồ cột" }
     ]},
     { "code": "41", "title": "Bài 41. Biểu đồ cột kép", "types": [
      { "code": "1", "title": "Đọc và so sánh hai nhóm dữ liệu trên biểu đồ cột kép" },
      { "code": "2", "title": "Vẽ biểu đồ cột kép" },
      { "code": "3", "title": "Nhận xét xu thế tăng giảm của dữ liệu" },
      { "code": "4", "title": "Đọc, mô tả và phân tích dữ liệu từ biểu đồ cột kép" },
      { "code": "5", "title": "Lập bảng thống kê, vẽ và hoàn thiện biểu đồ cột kép" }
     ]},
     { "code": "42", "title": "Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm", "types": [
      { "code": "1", "title": "Liệt kê các kết quả có thể của trò chơi đơn giản" },
      { "code": "2", "title": "Nhận biết sự kiện chắc chắn, không thể, có thể xảy ra" },
      { "code": "3", "title": "Nhận biết một sự kiện trong trò chơi, thí nghiệm có thể xảy ra" }
     ]},
     { "code": "43", "title": "Bài 43. Xác suất thực nghiệm", "types": [
      { "code": "1", "title": "Tính xác suất thực nghiệm của một sự kiện qua n lần thử" },
      { "code": "2", "title": "So sánh xác suất thực nghiệm của các sự kiện" },
      { "code": "3", "title": "Dự đoán kết quả tương lai dựa vào xác suất thực nghiệm" },
      { "code": "4", "title": "Biểu diễn khả năng xảy ra của một sự kiện theo xác suất thực nghiệm" }
     ]}
    ]
   }
  ]
 },
 // ====================== LỚP 7 ======================
 "7": {
  "code": "7",
  "D": [
   {
    "code": "1", "title": "Chương I. SỐ HỮU TỈ",
    "lessons": [
     { "code": "1", "title": "Bài 1. Tập hợp các số hữu tỉ", "types": [
      { "code": "1", "title": "Nhận biết số hữu tỉ và biểu diễn dưới dạng phân số" },
      { "code": "2", "title": "Biểu diễn số hữu tỉ trên trục số" },
      { "code": "3", "title": "Tìm số đối của số hữu tỉ" },
      { "code": "4", "title": "So sánh hai số hữu tỉ (đưa về cùng mẫu, so sánh với 0)" },
      { "code": "5", "title": "Cách sử dụng kí hiệu ∈, ∉, ⊂, ℕ, ℤ, ℚ" },
      { "code": "6", "title": "Sắp xếp số hữu tỉ" },
      { "code": "7", "title": "Ứng dụng của dạng số hữu tỉ và so sánh số hữu tỉ vào bài toán thực tế" }
     ]},
     { "code": "2", "title": "Bài 2. Cộng, trừ, nhân, chia số hữu tỉ", "types": [
      { "code": "1", "title": "Thực hiện phép cộng trừ số hữu tỉ" },
      { "code": "2", "title": "Thực hiện phép nhân chia số hữu tỉ" },
      { "code": "3", "title": "Tính giá trị biểu thức số hữu tỉ bằng cách hợp lý" },
      { "code": "4", "title": "Tìm x trong các đẳng thức số hữu tỉ" },
      { "code": "5", "title": "Giải toán đố thực tế bằng phép tính số hữu tỉ" },
      { "code": "6", "title": "Ứng dụng của phép cộng, trừ, nhân, chia số hữu tỉ vào bài toán thực tế" }
     ]},
     { "code": "3", "title": "Bài 3. Luỹ thừa với số mũ tự nhiên của một số hữu tỉ", "types": [
      { "code": "1", "title": "Tính lũy thừa của một số hữu tỉ" },
      { "code": "2", "title": "Tích và thương của hai lũy thừa cùng cơ số" },
      { "code": "3", "title": "Lũy thừa của lũy thừa" },
      { "code": "4", "title": "Tìm cơ số hoặc số mũ chưa biết trong đẳng thức lũy thừa" },
      { "code": "5", "title": "So sánh hai lũy thừa" },
      { "code": "6", "title": "Ứng dụng lũy thừa trong bài toán số học" },
      { "code": "7", "title": "Ứng dụng các phép tính lũy thừa của số hữu tỉ vào bài toán thực tế" }
     ]},
     { "code": "4", "title": "Bài 4. Thứ tự thực hiện các phép tính. Quy tắc chuyển vế", "types": [
      { "code": "1", "title": "Thực hiện phép tính theo đúng thứ tự (ngoặc, lũy thừa, nhân chia, cộng trừ)" },
      { "code": "2", "title": "Vận dụng quy tắc chuyển vế để tìm x" },
      { "code": "3", "title": "Tính tổng dãy số hữu tỉ có quy luật" },
      { "code": "4", "title": "Tìm số chưa biết trong một đẳng thức số hữu tỉ" }
     ]}
    ]
   },
   {
    "code": "2", "title": "Chương II. SỐ THỰC",
    "lessons": [
     { "code": "5", "title": "Bài 5. Làm quen với số thập phân vô hạn tuần hoàn", "types": [
      { "code": "1", "title": "Nhận biết số thập phân hữu hạn và vô hạn tuần hoàn" },
      { "code": "2", "title": "Viết phân số dưới dạng số thập phân và ngược lại" },
      { "code": "3", "title": "Làm tròn số thập phân với độ chính xác cho trước" },
      { "code": "4", "title": "Nhận biết số thập phân vô hạn không tuần hoàn" }
     ]},
     { "code": "6", "title": "Bài 6. Số vô tỉ. Căn bậc hai số học", "types": [
      { "code": "1", "title": "Nhận biết số vô tỉ" },
      { "code": "2", "title": "Tính căn bậc hai số học của một số không âm" },
      { "code": "3", "title": "Tìm x biết x bình phương bằng một số (x^2 = a)" },
      { "code": "4", "title": "So sánh các căn bậc hai số học" },
      { "code": "5", "title": "Tìm một số khi biết căn bậc hai số học của nó" },
      { "code": "6", "title": "Tính giá trị của biểu thức chứa căn bậc hai số học" }
     ]},
     { "code": "7", "title": "Bài 7. Tập hợp các số thực", "types": [
      { "code": "1", "title": "Phân biệt các tập hợp số N, Z, Q, I, R" },
      { "code": "2", "title": "Tìm giá trị tuyệt đối của số thực" },
      { "code": "3", "title": "Tính giá trị biểu thức chứa giá trị tuyệt đối" },
      { "code": "4", "title": "Tìm x trong phương trình chứa dấu giá trị tuyệt đối cơ bản" },
      { "code": "5", "title": "So sánh các số thực (căn thức, phân số, số thập phân)" },
      { "code": "6", "title": "Cách sử dụng kí hiệu ∈, ∉, ⊂ với các tập hợp số ℕ, ℤ, ℚ, ℝ" },
      { "code": "7", "title": "Số đối của một số thực" },
      { "code": "8", "title": "Cộng, trừ, nhân, chia các số thực và phép tính lũy thừa của các số thực" },
      { "code": "9", "title": "Một số bài toán thực tế về số thực" },
      { "code": "10", "title": "Làm tròn số và ước lượng theo yêu cầu" }
     ]}
    ]
   },
   {
    "code": "6", "title": "Chương VI. TỈ LỆ THỨC VÀ ĐẠI LƯỢNG TỈ LỆ",
    "lessons": [
     { "code": "20", "title": "Bài 20. Tỉ lệ thức", "types": [
      { "code": "1", "title": "Kiểm tra xem các số có lập thành tỉ lệ thức không" },
      { "code": "2", "title": "Tìm x trong tỉ lệ thức (tìm trung tỉ, ngoại tỉ)" },
      { "code": "3", "title": "Lập các tỉ lệ thức từ một đẳng thức tích" },
      { "code": "4", "title": "Một số bài toán thực tế về tỉ lệ thức" }
     ]},
     { "code": "21", "title": "Bài 21. Tính chất của dãy tỉ số bằng nhau", "types": [
      { "code": "1", "title": "Vận dụng tính chất dãy tỉ số bằng nhau để tìm các số" },
      { "code": "2", "title": "Giải bài toán chia tỉ lệ (số tiền, số mét vải, số học sinh...)" },
      { "code": "3", "title": "Chứng minh đẳng thức tỉ lệ" },
      { "code": "4", "title": "Tìm đẳng thức đúng từ một đẳng thức cho trước" },
      { "code": "5", "title": "Một số bài toán thực tế về dãy tỉ số bằng nhau" }
     ]},
     { "code": "22", "title": "Bài 22. Đại lượng tỉ lệ thuận", "types": [
      { "code": "1", "title": "Nhận biết hai đại lượng tỉ lệ thuận và xác định hệ số tỉ lệ" },
      { "code": "2", "title": "Biểu diễn mối quan hệ y = kx và tìm giá trị tương ứng" },
      { "code": "3", "title": "Giải bài toán thực tế về đại lượng tỉ lệ thuận" }
     ]},
     { "code": "23", "title": "Bài 23. Đại lượng tỉ lệ nghịch", "types": [
      { "code": "1", "title": "Nhận biết hai đại lượng tỉ lệ nghịch và xác định hệ số tỉ lệ" },
      { "code": "2", "title": "Biểu diễn mối quan hệ y = a/x và tìm giá trị tương ứng" },
      { "code": "3", "title": "Giải bài toán thực tế về đại lượng tỉ lệ nghịch (năng suất, thời gian)" }
     ]}
    ]
   },
   {
    "code": "7", "title": "Chương VII. BIỂU THỨC ĐẠI SỐ VÀ ĐA THỨC MỘT BIẾN",
    "lessons": [
     { "code": "24", "title": "Bài 24. Biểu thức đại số", "types": [
      { "code": "1", "title": "Viết biểu thức đại số biểu thị một đại lượng" },
      { "code": "2", "title": "Tính giá trị của biểu thức tại các giá trị của biến" },
      { "code": "3", "title": "Bài toán thực tế liên quan đến lập biểu thức" },
      { "code": "4", "title": "Biểu thức số. Biểu thức đại số" }
     ]},
     { "code": "25", "title": "Bài 25. Đa thức một biến", "types": [
      { "code": "1", "title": "Nhận biết đa thức một biến, thu gọn và sắp xếp" },
      { "code": "2", "title": "Xác định bậc, hệ số cao nhất, hệ số tự do" },
      { "code": "3", "title": "Kiểm tra một số có phải là nghiệm của đa thức không" },
      { "code": "4", "title": "Tìm nghiệm của đa thức một biến" },
      { "code": "5", "title": "Nhận biết đơn thức một biến, hệ số và bậc của đơn thức một biến" },
      { "code": "6", "title": "Cộng, trừ đơn thức cùng bậc, nhân hai đơn thức" },
      { "code": "7", "title": "Các bài toán thực tế giải bằng cách lập đa thức" }
     ]},
     { "code": "26", "title": "Bài 26. Phép cộng và phép trừ đa thức một biến", "types": [
      { "code": "1", "title": "Cộng trừ hai đa thức theo hàng ngang" },
      { "code": "2", "title": "Cộng trừ hai đa thức theo cột dọc" },
      { "code": "3", "title": "Tìm đa thức chưa biết trong đẳng thức cộng trừ" }
     ]},
     { "code": "27", "title": "Bài 27. Phép nhân đa thức một biến", "types": [
      { "code": "1", "title": "Nhân đơn thức với đa thức" },
      { "code": "2", "title": "Nhân đa thức với đa thức" },
      { "code": "3", "title": "Rút gọn biểu thức đại số chứa phép nhân" }
     ]},
     { "code": "28", "title": "Bài 28. Phép chia đa thức một biến", "types": [
      { "code": "1", "title": "Chia đa thức cho đơn thức" },
      { "code": "2", "title": "Thực hiện phép chia đa thức một biến đã sắp xếp (chia hết)" },
      { "code": "3", "title": "Thực hiện phép chia đa thức có dư" },
      { "code": "4", "title": "Tìm điều kiện của hệ số để phép chia hết" },
      { "code": "5", "title": "Chia đơn thức cho đơn thức" }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "3", "title": "Chương III. GÓC VÀ ĐƯỜNG THẲNG SONG SONG",
    "lessons": [
     { "code": "8", "title": "Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc", "types": [
      { "code": "1", "title": "Nhận biết và tính góc kề bù, góc đối đỉnh" },
      { "code": "2", "title": "Vẽ tia phân giác của một góc" },
      { "code": "3", "title": "Tính số đo góc dựa vào tính chất tia phân giác" },
      { "code": "4", "title": "Chứng minh một tia là tia phân giác" }
     ]},
     { "code": "9", "title": "Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết", "types": [
      { "code": "1", "title": "Nhận biết cặp góc so le trong, đồng vị" },
      { "code": "2", "title": "Chứng minh hai đường thẳng song song qua dấu hiệu nhận biết" },
      { "code": "3", "title": "Vẽ đường thẳng đi qua một điểm và song song đường thẳng cho trước" },
      { "code": "4", "title": "Xác định các cặp góc so le trong, đồng vị, trong cùng phía" }
     ]},
     { "code": "10", "title": "Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song", "types": [
      { "code": "1", "title": "Tính số đo góc tạo bởi đường thẳng cắt hai đường song song" },
      { "code": "2", "title": "Vận dụng tiên đề Euclid để chứng minh duy nhất" },
      { "code": "3", "title": "Chứng minh hai đường thẳng song song (quan hệ vuông góc - song song)" },
      { "code": "4", "title": "Vận dụng tiên đề Euclid chứng minh ba điểm thẳng hàng" }
     ]},
     { "code": "11", "title": "Bài 11. Định lí và chứng minh định lí", "types": [
      { "code": "1", "title": "Phân biệt giả thiết và kết luận của định lí" },
      { "code": "2", "title": "Vẽ hình minh họa định lí" },
      { "code": "3", "title": "Viết chứng minh định lí theo các bước suy luận logic" },
      { "code": "4", "title": "Nhận biết định lí và xác định giả thiết, kết luận" }
     ]}
    ]
   },
   {
    "code": "4", "title": "Chương IV. TAM GIÁC BẰNG NHAU",
    "lessons": [
     { "code": "12", "title": "Bài 12. Tổng các góc trong một tam giác", "types": [
      { "code": "1", "title": "Tính số đo góc trong tam giác khi biết hai góc kia" },
      { "code": "2", "title": "Tính góc ngoài của tam giác" },
      { "code": "3", "title": "Tính góc trong tam giác đặc biệt (vuông, cân, đều)" },
      { "code": "4", "title": "Xác định loại tam giác dựa vào số đo góc" }
     ]},
     { "code": "13", "title": "Bài 13. Hai tam giác bằng nhau. Trường hợp thứ nhất (c.c.c)", "types": [
      { "code": "1", "title": "Chứng minh hai tam giác bằng nhau (cạnh-cạnh-cạnh)" },
      { "code": "2", "title": "Chứng minh các góc tương ứng bằng nhau" },
      { "code": "3", "title": "Chứng minh tia phân giác dựa vào hai tam giác bằng nhau" },
      { "code": "4", "title": "Xác định các cạnh, các góc bằng nhau dựa vào hai tam giác bằng nhau" }
     ]},
     { "code": "14", "title": "Bài 14. Trường hợp bằng nhau thứ hai và thứ ba (c.g.c, g.c.g)", "types": [
      { "code": "1", "title": "Chứng minh hai tam giác bằng nhau (cạnh-góc-cạnh)" },
      { "code": "2", "title": "Chứng minh hai tam giác bằng nhau (góc-cạnh-góc)" },
      { "code": "3", "title": "Chứng minh hai đoạn thẳng hoặc hai góc bằng nhau" },
      { "code": "4", "title": "Chứng minh song song, thẳng hàng nhờ tam giác bằng nhau" }
     ]},
     { "code": "15", "title": "Bài 15. Các trường hợp bằng nhau của tam giác vuông", "types": [
      { "code": "1", "title": "Trường hợp hai cạnh góc vuông" },
      { "code": "2", "title": "Trường hợp cạnh góc vuông - góc nhọn kề" },
      { "code": "3", "title": "Trường hợp cạnh huyền - góc nhọn" },
      { "code": "4", "title": "Trường hợp cạnh huyền - cạnh góc vuông" },
      { "code": "5", "title": "Sử dụng trường hợp bằng nhau của hai tam giác vuông để chứng minh tính chất khác" }
     ]},
     { "code": "16", "title": "Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng", "types": [
      { "code": "1", "title": "Tính chất về góc của tam giác cân" },
      { "code": "2", "title": "Các phương pháp chứng minh tam giác cân, tam giác đều" },
      { "code": "3", "title": "Chứng minh điểm nằm trên đường trung trực" },
      { "code": "4", "title": "Bài toán cực trị hình học cơ bản liên quan trung trực" },
      { "code": "5", "title": "Nhận biết và chứng minh một đường thẳng là đường trung trực của đoạn thẳng" }
     ]}
    ]
   },
   {
    "code": "9", "title": "Chương IX. QUAN HỆ GIỮA CÁC YẾU TỐ TRONG MỘT TAM GIÁC",
    "lessons": [
     { "code": "31", "title": "Bài 31. Quan hệ giữa góc và cạnh đối diện", "types": [
      { "code": "1", "title": "So sánh hai góc trong một tam giác dựa vào cạnh đối diện" },
      { "code": "2", "title": "So sánh hai cạnh trong một tam giác dựa vào góc đối diện" },
      { "code": "3", "title": "Sắp xếp độ dài cạnh/độ lớn góc trong tam giác" }
     ]},
     { "code": "32", "title": "Bài 32. Quan hệ giữa đường vuông góc và đường xiên", "types": [
      { "code": "1", "title": "So sánh độ dài đường vuông góc và đường xiên" },
      { "code": "2", "title": "So sánh các đường xiên và hình chiếu tương ứng" },
      { "code": "3", "title": "Nhận biết đường vuông góc, đường xiên. Tìm khoảng cách từ điểm đến đường thẳng" }
     ]},
     { "code": "33", "title": "Bài 33. Quan hệ giữa ba cạnh của một tam giác", "types": [
      { "code": "1", "title": "Kiểm tra bộ ba độ dài có tạo thành tam giác không" },
      { "code": "2", "title": "Tìm khoảng giá trị độ dài cạnh thứ ba" },
      { "code": "3", "title": "Chứng minh bất đẳng thức tam giác mở rộng" }
     ]},
     { "code": "34", "title": "Bài 34. Sự đồng quy của ba trung tuyến, ba đường phân giác", "types": [
      { "code": "1", "title": "Xác định trọng tâm và tính chất tỉ lệ của trung tuyến" },
      { "code": "2", "title": "Chứng minh ba đường trung tuyến đồng quy" },
      { "code": "3", "title": "Tính chất đường phân giác (điểm cách đều ba cạnh)" },
      { "code": "4", "title": "Chứng minh ba đường phân giác đồng quy" },
      { "code": "5", "title": "Vấn đề đường trung tuyến trong tam giác vuông, cân, đều" }
     ]},
     { "code": "35", "title": "Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao", "types": [
      { "code": "1", "title": "Xác định tâm đường tròn ngoại tiếp (giao 3 trung trực)" },
      { "code": "2", "title": "Xác định trực tâm tam giác (giao 3 đường cao)" },
      { "code": "3", "title": "Chứng minh các đường đặc biệt đồng quy" },
      { "code": "4", "title": "Chứng minh tính chất của tam giác cân đặc biệt (trùng nhau)" },
      { "code": "5", "title": "Sử dụng tính chất trực tâm để chứng minh hai đường thẳng vuông góc" }
     ]}
    ]
   },
   {
    "code": "10", "title": "Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN",
    "lessons": [
     { "code": "36", "title": "Bài 36. Hình hộp chữ nhật và hình lập phương", "types": [
      { "code": "1", "title": "Nhận diện số mặt, đỉnh, cạnh" },
      { "code": "2", "title": "Tính diện tích xung quanh, diện tích toàn phần" },
      { "code": "3", "title": "Tính thể tích hình hộp chữ nhật, hình lập phương" },
      { "code": "4", "title": "Giải toán thực tế (sơn tường, bể nước, đóng thùng)" },
      { "code": "5", "title": "Xác định tấm bìa có thể gấp được thành hình hộp chữ nhật, hình lập phương" }
     ]},
     { "code": "37", "title": "Bài 37. Hình lăng trụ đứng tam giác và tứ giác", "types": [
      { "code": "1", "title": "Mô tả cấu tạo lăng trụ đứng (đáy, mặt bên, chiều cao)" },
      { "code": "2", "title": "Tính diện tích xung quanh lăng trụ đứng" },
      { "code": "3", "title": "Tính thể tích lăng trụ đứng" },
      { "code": "4", "title": "Bài toán thực tế về lăng trụ (lều trại, hộp quà)" },
      { "code": "5", "title": "Mô tả và tạo lập hình lăng trụ đứng tam giác, lăng trụ đứng tứ giác" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "5", "title": "Chương V. THU THẬP VÀ BIỂU DIỄN DỮ LIỆU",
    "lessons": [
     { "code": "17", "title": "Bài 17. Thu thập và phân loại dữ liệu", "types": [
      { "code": "1", "title": "Phân loại dữ liệu định tính và định lượng" },
      { "code": "2", "title": "Xác định phương pháp thu thập phù hợp cho vấn đề" },
      { "code": "3", "title": "Đánh giá tính đại diện và hợp lý của dữ liệu" }
     ]},
     { "code": "18", "title": "Bài 18. Biểu đồ hình quạt tròn", "types": [
      { "code": "1", "title": "Đọc và hiểu ý nghĩa các thành phần trên biểu đồ quạt" },
      { "code": "2", "title": "Tính tỉ lệ phần trăm từ số liệu và ngược lại" },
      { "code": "3", "title": "Vẽ biểu đồ hình quạt tròn (xử lý số đo góc)" },
      { "code": "4", "title": "Biểu diễn dữ liệu vào biểu đồ hình quạt tròn" }
     ]},
     { "code": "19", "title": "Bài 19. Biểu đồ đoạn thẳng", "types": [
      { "code": "1", "title": "Đọc và phân tích xu hướng tăng giảm trên biểu đồ" },
      { "code": "2", "title": "Vẽ biểu đồ đoạn thẳng từ bảng số liệu" },
      { "code": "3", "title": "So sánh sự biến thiên của hai bộ dữ liệu" },
      { "code": "4", "title": "Biểu diễn dữ liệu vào biểu đồ đoạn thẳng" }
     ]}
    ]
   },
   {
    "code": "8", "title": "Chương VIII. LÀM QUEN VỚI BIẾN CỐ VÀ XÁC SUẤT CỦA BIẾN CỐ",
    "lessons": [
     { "code": "29", "title": "Bài 29. Làm quen với biến cố", "types": [
      { "code": "1", "title": "Nhận biết biến cố ngẫu nhiên, chắc chắn, không thể trong trò chơi" },
      { "code": "2", "title": "Mô tả không gian các kết quả có thể xảy ra" },
      { "code": "3", "title": "Điều kiện để biến cố trở thành chắc chắn, không thể, ngẫu nhiên" }
     ]},
     { "code": "30", "title": "Bài 30. Làm quen với xác suất của biến cố", "types": [
      { "code": "1", "title": "Tính xác suất của biến cố đồng khả năng (xúc xắc, đồng xu)" },
      { "code": "2", "title": "So sánh xác suất xảy ra của các biến cố khác nhau" },
      { "code": "3", "title": "Ứng dụng xác suất để dự báo trong tình huống đơn giản" },
      { "code": "4", "title": "Áp dụng công thức tính xác suất" }
     ]}
    ]
   }
  ]
 },
 // ====================== LỚP 8 ======================
 "8": {
  "code": "8",
  "D": [
   {
    "code": "1", "title": "Chương I. ĐA THỨC",
    "lessons": [
     { "code": "1", "title": "Bài 1. Đơn thức", "types": [
      { "code": "1", "title": "Nhận biết đơn thức, tìm phần hệ số, phần biến" },
      { "code": "2", "title": "Thu gọn đơn thức" },
      { "code": "3", "title": "Tìm bậc của đơn thức" },
      { "code": "4", "title": "Tính giá trị của đơn thức" },
      { "code": "5", "title": "Đơn thức đồng dạng và cộng trừ đơn thức đồng dạng" }
     ]},
     { "code": "2", "title": "Bài 2. Đa thức", "types": [
      { "code": "1", "title": "Nhận biết đa thức nhiều biến" },
      { "code": "2", "title": "Thu gọn đa thức" },
      { "code": "3", "title": "Tìm bậc của đa thức" },
      { "code": "4", "title": "Tính giá trị của đa thức tại bộ số cho trước" }
     ]},
     { "code": "3", "title": "Bài 3. Phép cộng và phép trừ đa thức", "types": [
      { "code": "1", "title": "Cộng hai đa thức nhiều biến" },
      { "code": "2", "title": "Trừ hai đa thức nhiều biến" },
      { "code": "3", "title": "Rút gọn biểu thức chứa tổng hiệu đa thức" },
      { "code": "4", "title": "Tìm đa thức M biết M + A = B hoặc A - M = B" }
     ]},
     { "code": "4", "title": "Bài 4. Phép nhân đa thức", "types": [
      { "code": "1", "title": "Nhân đơn thức với đa thức" },
      { "code": "2", "title": "Nhân đa thức với đa thức" },
      { "code": "3", "title": "Rút gọn và tính giá trị biểu thức" },
      { "code": "4", "title": "Chứng minh giá trị biểu thức không phụ thuộc vào biến" },
      { "code": "5", "title": "Nhân đơn thức với đơn thức" },
      { "code": "6", "title": "Biến đổi, rút gọn biểu thức có chứa phép nhân đa thức" }
     ]},
     { "code": "5", "title": "Bài 5. Phép chia đa thức cho đơn thức", "types": [
      { "code": "1", "title": "Điều kiện để đơn thức A chia hết cho đơn thức B" },
      { "code": "2", "title": "Chia đơn thức cho đơn thức" },
      { "code": "3", "title": "Chia đa thức cho đơn thức" },
      { "code": "4", "title": "Bài toán rút gọn kết hợp nhân chia đa thức" }
     ]}
    ]
   },
   {
    "code": "2", "title": "Chương II. HẰNG ĐẲNG THỨC ĐÁNG NHỚ VÀ ỨNG DỤNG",
    "lessons": [
     { "code": "6", "title": "Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu", "types": [
      { "code": "1", "title": "Khai triển hằng đẳng thức (a+b)^2, (a-b)^2, a^2-b^2" },
      { "code": "2", "title": "Viết biểu thức dưới dạng bình phương của một tổng/hiệu" },
      { "code": "3", "title": "Tính nhanh giá trị biểu thức số học" },
      { "code": "4", "title": "Tìm giá trị lớn nhất, nhỏ nhất của biểu thức bậc 2" },
      { "code": "5", "title": "Mô tả và vận dụng hằng đẳng thức hiệu hai bình phương" }
     ]},
     { "code": "7", "title": "Bài 7. Lập phương của một tổng hay một hiệu", "types": [
      { "code": "1", "title": "Khai triển hằng đẳng thức (a+b)^3, (a-b)^3" },
      { "code": "2", "title": "Viết biểu thức dưới dạng lập phương" },
      { "code": "3", "title": "Rút gọn biểu thức chứa lập phương" },
      { "code": "4", "title": "Mô tả và vận dụng hằng đẳng thức lập phương" }
     ]},
     { "code": "8", "title": "Bài 8. Tổng và hiệu hai lập hương", "types": [
      { "code": "1", "title": "Viết đa thức dưới dạng tích dùng hằng đẳng thức lập phương" },
      { "code": "2", "title": "Rút gọn biểu thức" },
      { "code": "3", "title": "Chứng minh đẳng thức" },
      { "code": "4", "title": "Mô tả và vận dụng tổng, hiệu hai lập phương" }
     ]},
     { "code": "9", "title": "Bài 9. Phân tích đa thức thành nhân tử", "types": [
      { "code": "1", "title": "Phương pháp đặt nhân tử chung" },
      { "code": "2", "title": "Phương pháp dùng hằng đẳng thức" },
      { "code": "3", "title": "Phương pháp nhóm hạng tử" },
      { "code": "4", "title": "Phương pháp tách hạng tử hoặc thêm bớt (Vận dụng cao)" },
      { "code": "5", "title": "Giải phương trình tích cơ bản" }
     ]}
    ]
   },
   {
    "code": "6", "title": "Chương VI. PHÂN THỨC ĐẠI SỐ",
    "lessons": [
     { "code": "21", "title": "Bài 21. Phần thức đại số", "types": [
      { "code": "1", "title": "Tìm điều kiện xác định của phân thức" },
      { "code": "2", "title": "Kiểm tra hai phân thức bằng nhau" },
      { "code": "3", "title": "Tính giá trị phân thức (kết hợp điều kiện)" },
      { "code": "4", "title": "Nhận biết phân thức đại số, tử thức và mẫu thức" }
     ]},
     { "code": "22", "title": "Bài 22. Tính chất cơ bản của phân thức đại số", "types": [
      { "code": "1", "title": "Rút gọn phân thức đại số" },
      { "code": "2", "title": "Quy đồng mẫu thức nhiều phân thức" },
      { "code": "3", "title": "Chứng minh đẳng thức phân thức" }
     ]},
     { "code": "23", "title": "Bài 23. Phép cộng và phép trừ phân thức đại số", "types": [
      { "code": "1", "title": "Cộng trừ phân thức cùng mẫu" },
      { "code": "2", "title": "Cộng trừ phân thức khác mẫu" },
      { "code": "3", "title": "Rút gọn biểu thức tổng hợp" },
      { "code": "4", "title": "Bài toán liên quan (tìm x nguyên để biểu thức nguyên)" },
      { "code": "5", "title": "Vận dụng quy tắc dấu ngoặc để rút gọn biểu thức" }
     ]},
     { "code": "24", "title": "Bài 24. Phép nhân và phép chia phân thức đại số", "types": [
      { "code": "1", "title": "Nhân hai phân thức, nhân phân thức với đa thức" },
      { "code": "2", "title": "Chia phân thức" },
      { "code": "3", "title": "Rút gọn biểu thức chứa 4 phép tính" },
      { "code": "4", "title": "Biến đổi các biểu thức hữu tỉ phức tạp" },
      { "code": "5", "title": "Bài toán thực tế về phân thức đại số" }
     ]}
    ]
   },
   {
    "code": "7", "title": "Chương VII. PHƯƠNG TRÌNH BẬC NHẤT VÀ HÀM SỐ BẬC NHẤT",
    "lessons": [
     { "code": "25", "title": "Bài 25. Phương trình bậc nhất một ẩn", "types": [
      { "code": "1", "title": "Nhận dạng phương trình bậc nhất một ẩn" },
      { "code": "2", "title": "Giải phương trình bậc nhất ax+b=0" },
      { "code": "3", "title": "Giải phương trình đưa về dạng bậc nhất" },
      { "code": "4", "title": "Tìm điều kiện của tham số để phương trình có nghiệm đặc biệt" }
     ]},
     { "code": "26", "title": "Bài 26. Giải bài toán bằng cách lập phương trình", "types": [
      { "code": "1", "title": "Dạng toán chuyển động (cùng chiều, ngược chiều, dòng nước)" },
      { "code": "2", "title": "Dạng toán năng suất (công việc chung, riêng)" },
      { "code": "3", "title": "Dạng toán quan hệ số, phần trăm" },
      { "code": "4", "title": "Dạng toán có nội dung hình học" },
      { "code": "5", "title": "Giải quyết một số vấn đề thực tế gắn với phương trình bậc nhất" }
     ]},
     { "code": "27", "title": "Bài 27. Khái niệm hàm số và đô thị của hàm số", "types": [
      { "code": "1", "title": "Tính giá trị của hàm số f(x)" },
      { "code": "2", "title": "Biểu diễn điểm trên mặt phẳng tọa độ" },
      { "code": "3", "title": "Kiểm tra điểm thuộc hay không thuộc đồ thị" },
      { "code": "4", "title": "Nhận biết hàm số và các cách cho hàm số" }
     ]},
     { "code": "28", "title": "Bài 28. Hàm số bậc nhất và đô thị của hàm số bậc nhất", "types": [
      { "code": "1", "title": "Nhận biết hàm số bậc nhất, tính đồng biến/nghịch biến" },
      { "code": "2", "title": "Vẽ đồ thị hàm số y=ax+b" },
      { "code": "3", "title": "Tìm tọa độ giao điểm của hai đồ thị" },
      { "code": "4", "title": "Tính khoảng cách, diện tích tạo bởi đồ thị và trục tọa độ" },
      { "code": "5", "title": "Xác định hàm số bậc nhất khi biết một số yếu tố cho trước" }
     ]},
     { "code": "29", "title": "Bài 29. Hệ số góc của đường thẳng", "types": [
      { "code": "1", "title": "Xác định hệ số góc của đường thẳng" },
      { "code": "2", "title": "Viết phương trình đường thẳng đi qua điểm và có hệ số góc" },
      { "code": "3", "title": "Vị trí tương đối của hai đường thẳng (cắt, song song, trùng)" },
      { "code": "4", "title": "Viết phương trình đường thẳng thỏa mãn điều kiện song song/vuông góc" },
      { "code": "5", "title": "Tìm giá trị của tham số m để hai đường thẳng song song, cắt nhau..." }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "3", "title": "Chương III. TỨ GIÁC",
    "lessons": [
     { "code": "10", "title": "Bài 10. Tứ giác", "types": [
      { "code": "1", "title": "Tính tổng các góc trong tứ giác" },
      { "code": "2", "title": "Tính số đo góc dựa vào tỉ lệ hoặc phương trình" },
      { "code": "3", "title": "Nhận biết tứ giác lồi" }
     ]},
     { "code": "11", "title": "Bài 11. Hình thang cân", "types": [
      { "code": "1", "title": "Nhận biết hình thang, hình thang vuông, hình thang cân" },
      { "code": "2", "title": "Tính chất góc và đường chéo của hình thang cân" },
      { "code": "3", "title": "Chứng minh tứ giác là hình thang cân" }
     ]},
     { "code": "12", "title": "Bài 12. Hình bình hành", "types": [
      { "code": "1", "title": "Sử dụng tính chất hình bình hành để tính góc, cạnh" },
      { "code": "2", "title": "Chứng minh tứ giác là hình bình hành (5 dấu hiệu)" },
      { "code": "3", "title": "Chứng minh ba điểm thẳng hàng, các đường đồng quy trong hbh" }
     ]},
     { "code": "13", "title": "Bài 13. Hình chữ nhật", "types": [
      { "code": "1", "title": "Tính chất đường chéo và tính đối xứng của hình chữ nhật" },
      { "code": "2", "title": "Chứng minh tứ giác là hình chữ nhật (4 dấu hiệu)" },
      { "code": "3", "title": "Áp dụng định lí đường trung tuyến trong tam giác vuông" }
     ]},
     { "code": "14", "title": "Bài 14. Hình thoi và hình vuông", "types": [
      { "code": "1", "title": "Tính chất đặc trưng của hình thoi và hình vuông" },
      { "code": "2", "title": "Chứng minh tứ giác là hình thoi" },
      { "code": "3", "title": "Chứng minh tứ giác là hình vuông" },
      { "code": "4", "title": "Bài toán quỹ tích liên quan đến các hình đặc biệt" }
     ]}
    ]
   },
   {
    "code": "4", "title": "CHƯƠNG IV. ĐỊNH LÍ THALES",
    "lessons": [
     { "code": "15", "title": "Bài 15. Định lí Thalès trong tam giác", "types": [
      { "code": "1", "title": "Tính độ dài đoạn thẳng bằng tỉ số Thalès" },
      { "code": "2", "title": "Chứng minh các đường thẳng song song (Thalès đảo)" },
      { "code": "3", "title": "Chứng minh các đẳng thức hình học bằng tỉ lệ" },
      { "code": "4", "title": "Bài toán thực tế về vận dụng định lí Thalès" }
     ]},
     { "code": "16", "title": "Bài 16. Đường trung bình của tam giác", "types": [
      { "code": "1", "title": "Tính độ dài dựa vào đường trung bình" },
      { "code": "2", "title": "Chứng minh song song và quan hệ trung điểm" },
      { "code": "3", "title": "Ứng dụng đường trung bình trong các bài toán tứ giác" }
     ]},
     { "code": "17", "title": "Bài 17. Tính chất đường phân giác của tam giác", "types": [
      { "code": "1", "title": "Tính độ dài đoạn thẳng dùng tính chất phân giác trong/ngoài" },
      { "code": "2", "title": "Tính tỉ số diện tích hai tam giác phân chia bởi phân giác" },
      { "code": "3", "title": "Chứng minh các hệ thức hình học liên quan phân giác" },
      { "code": "4", "title": "Bài toán thực tế có vận dụng tính chất đường phân giác" }
     ]}
    ]
   },
   {
    "code": "9", "title": "Chương IX. TAM GIÁC ĐỒNG DẠNG",
    "lessons": [
     { "code": "33", "title": "Bài 33. Hai tam giác đồng dạng", "types": [
      { "code": "1", "title": "Nhận biết hai tam giác đồng dạng và viết đúng đỉnh tương ứng" },
      { "code": "2", "title": "Tính tỉ số đồng dạng, tính cạnh và góc" },
      { "code": "3", "title": "Quan hệ giữa tỉ số chu vi và tỉ số đồng dạng" }
     ]},
     { "code": "34", "title": "Bài 34. Ba trường hợp đồng dạng của hai tam giác", "types": [
      { "code": "1", "title": "Chứng minh đồng dạng trường hợp c.c.c" },
      { "code": "2", "title": "Chứng minh đồng dạng trường hợp c.g.c" },
      { "code": "3", "title": "Chứng minh đồng dạng trường hợp g.g (phổ biến nhất)" },
      { "code": "4", "title": "Chứng minh hệ thức hình học a.b = c.d" },
      { "code": "5", "title": "Áp dụng các trường hợp đồng dạng vào vấn đề thực tiễn" }
     ]},
     { "code": "35", "title": "Bài 35. Định lí Pythagore và ứng dụng", "types": [
      { "code": "1", "title": "Tính cạnh trong tam giác vuông" },
      { "code": "2", "title": "Nhận biết tam giác vuông, nhọn, tù dựa vào 3 cạnh" },
      { "code": "3", "title": "Ứng dụng Pythagore trong các hình khối hoặc thực tế" },
      { "code": "4", "title": "Sử dụng định lí Pythagore chứng minh tam giác vuông" }
     ]},
     { "code": "36", "title": "Bài 36. Các trường hợp đồng dạng của hai tam giác vuông", "types": [
      { "code": "1", "title": "Trường hợp góc nhọn" },
      { "code": "2", "title": "Trường hợp hai cạnh góc vuông" },
      { "code": "3", "title": "Trường hợp cạnh huyền - cạnh góc vuông" },
      { "code": "4", "title": "Tính chiều cao, hình chiếu trong tam giác vuông" },
      { "code": "5", "title": "Các Bài toán thực tế về vận dụng các tam giác vuông đồng dạng" }
     ]},
     { "code": "37", "title": "Bài 37. Hình đồng dạng", "types": [
      { "code": "1", "title": "Nhận biết hình đồng dạng trong thực tiễn (bản đồ, mô hình)" },
      { "code": "2", "title": "Tính tỉ số diện tích của hai hình đồng dạng" },
      { "code": "3", "title": "Giải bài toán thực tế về tỉ lệ xích" },
      { "code": "4", "title": "Nhận biết hai hình đồng dạng phối cảnh" }
     ]}
    ]
   },
   {
    "code": "10", "title": "Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN",
    "lessons": [
     { "code": "38", "title": "Bài 38. Hình chóp tam giác đều", "types": [
      { "code": "1", "title": "Mô tả đỉnh, cạnh bên, mặt bên, đường cao, trung đoạn" },
      { "code": "2", "title": "Tính diện tích xung quanh, diện tích toàn phần" },
      { "code": "3", "title": "Tính thể tích hình chóp tam giác đều" },
      { "code": "4", "title": "Bài toán thực tế về tính thể tích, diện tích xung quanh hình chóp tam giác đều" }
     ]},
     { "code": "39", "title": "Bài 39. Hình chóp tứ giác đều", "types": [
      { "code": "1", "title": "Vẽ hình và xác định chiều cao của hình chóp tứ giác đều" },
      { "code": "2", "title": "Tính diện tích xung quanh, toàn phần" },
      { "code": "3", "title": "Tính thể tích hình chóp tứ giác đều" },
      { "code": "4", "title": "Bài toán thực tế (kim tự tháp, mái nhà)" },
      { "code": "5", "title": "Nhận biết các yếu tố đỉnh, cạnh bên, mặt đáy của chóp tứ giác đều" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "5", "title": "Chương V. DỮ LIỆU VÀ BIỂU ĐỒ",
    "lessons": [
     { "code": "18", "title": "Bài 18. Thu thập và phân loại dữ liệu", "types": [
      { "code": "1", "title": "Xác định phương pháp thu thập (nguồn có sẵn, trực tiếp)" },
      { "code": "2", "title": "Phân loại dữ liệu (số liệu liên tục/rời rạc, dữ liệu định tính)" },
      { "code": "3", "title": "Phát hiện sai sót trong dữ liệu thống kê" }
     ]},
     { "code": "19", "title": "Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ", "types": [
      { "code": "1", "title": "Lập bảng tần số từ dữ liệu thô" },
      { "code": "2", "title": "Chuyển đổi giữa bảng số liệu và biểu đồ (cột, quạt, đoạn thẳng)" },
      { "code": "3", "title": "Lựa chọn dạng biểu đồ thích hợp nhất cho dữ liệu" }
     ]},
     { "code": "20", "title": "Bài 20. Phân tích số liệu thống kê dựa vào biểu đó", "types": [
      { "code": "1", "title": "Đọc, phân tích và xử lý số liệu từ biểu đồ" },
      { "code": "2", "title": "So sánh, đánh giá xu hướng của dữ liệu" },
      { "code": "3", "title": "Đưa ra quyết định hoặc dự đoán dựa trên phân tích" }
     ]}
    ]
   },
   {
    "code": "8", "title": "Chương VIII. MỞ ĐẦU VỀ TÍNH XÁC SUẤT CỦA BIẾN CỐ",
    "lessons": [
     { "code": "30", "title": "Bài 30. Kết quả có thể và kết quả thuận lợi", "types": [
      { "code": "1", "title": "Mô tả không gian mẫu của phép thử" },
      { "code": "2", "title": "Liệt kê các kết quả thuận lợi cho một biến cố" },
      { "code": "3", "title": "Xác định các kết quả có thể của hành động, thực nghiệm" }
     ]},
     { "code": "31", "title": "Bài 31. Cách tính xác suất của biến cố bằng tỉ số", "types": [
      { "code": "1", "title": "Tính xác suất lí thuyết theo công thức cổ điển (P = n(A)/n(Ω))" },
      { "code": "2", "title": "Bài toán chọn ngẫu nhiên bi, thẻ, số" }
     ]},
     { "code": "32", "title": "Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng", "types": [
      { "code": "1", "title": "Tính xác suất thực nghiệm qua chuỗi phép thử" },
      { "code": "2", "title": "So sánh sự hội tụ của xác suất thực nghiệm về xác suất lí thuyết" },
      { "code": "3", "title": "Dùng xác suất để ước lượng số lượng cá thể trong quần thể" },
      { "code": "4", "title": "Tính xác suất thực nghiệm trong một số tình huống thực tế" }
     ]}
    ]
   }
  ]
 },
 // ====================== LỚP 9 ======================
 "9": {
  "code": "9",
  "D": [
   {
    "code": "1", "title": "Chương I. PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN",
    "lessons": [
     { "code": "1", "title": "Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn", "types": [
      { "code": "1", "title": "Nhận dạng phương trình bậc nhất hai ẩn ax+by=c" },
      { "code": "2", "title": "Biểu diễn tập nghiệm của phương trình bậc nhất hai ẩn trên mặt phẳng" },
      { "code": "3", "title": "Kiểm tra cặp số (x;y) là nghiệm của hệ phương trình" },
      { "code": "4", "title": "Viết nghiệm và biểu diễn hình học các nghiệm của PT bậc nhất hai ẩn" },
      { "code": "5", "title": "Xác định các điểm mà đường thẳng đi qua" }
     ]},
     { "code": "2", "title": "Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn", "types": [
      { "code": "1", "title": "Giải hệ phương trình bằng phương pháp thế" },
      { "code": "2", "title": "Giải hệ phương trình bằng phương pháp cộng đại số" },
      { "code": "3", "title": "Giải hệ phương trình quy về bậc nhất (đặt ẩn phụ)" },
      { "code": "4", "title": "Tìm tham số m để hệ có nghiệm duy nhất, vô nghiệm, vô số nghiệm" },
      { "code": "5", "title": "Xác định giá trị tham số để đường thẳng đi qua hai điểm cho trước" },
      { "code": "6", "title": "Xác định hệ số trong phản ứng hóa học đã được cân bằng" }
     ]},
     { "code": "3", "title": "Bài 3. Giải bài toán bằng cách lập hệ phương trình", "types": [
      { "code": "1", "title": "Toán chuyển động (ngược chiều, cano, vận tốc)" },
      { "code": "2", "title": "Toán làm chung - làm riêng (năng suất)" },
      { "code": "3", "title": "Toán cấu tạo số và quan hệ các chữ số" },
      { "code": "4", "title": "Toán có nội dung hình học, vật lý, hóa học" },
      { "code": "5", "title": "Dạng toán sự dụng kiến thức tỉ lệ phần trăm" }
     ]}
    ]
   },
   {
    "code": "2", "title": "Chương II. PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN",
    "lessons": [
     { "code": "4", "title": "Bài 4. Phương trình quy về phương trình bậc nhất một ẩn", "types": [
      { "code": "1", "title": "Giải phương trình tích A.B = 0" },
      { "code": "2", "title": "Giải phương trình chứa ẩn ở mẫu (tìm ĐKXĐ)" },
      { "code": "3", "title": "Giải phương trình đưa về dạng tích hoặc chứa ẩn ở mẫu" },
      { "code": "4", "title": "Một số bài toán thực tế liên quan đến phương trình quy về bậc nhất" }
     ]},
     { "code": "5", "title": "Bài 5. Bất đẳng thức và tính chất", "types": [
      { "code": "1", "title": "So sánh hai số dùng định nghĩa bất đẳng thức" },
      { "code": "2", "title": "Sử dụng tính chất liên hệ giữa thứ tự và phép cộng" },
      { "code": "3", "title": "Sử dụng tính chất liên hệ giữa thứ tự và phép nhân" },
      { "code": "4", "title": "Chứng minh bất đẳng thức cơ bản (Cauchy cho 2 số)" },
      { "code": "5", "title": "Viết bất đẳng thức diễn tả một khẳng định" },
      { "code": "6", "title": "Một số bài toán thực tế liên quan đến bất đẳng thức" }
     ]},
     { "code": "6", "title": "Bài 6. Bất phương trình bậc nhất một ẩn", "types": [
      { "code": "1", "title": "Giải bất phương trình bậc nhất và biểu diễn nghiệm trên trục số" },
      { "code": "2", "title": "Tìm x thỏa mãn cả hai bất phương trình (hệ bpt đơn giản)" },
      { "code": "3", "title": "Tìm nghiệm nguyên của bất phương trình" },
      { "code": "4", "title": "Bất phương trình chứa tham số" },
      { "code": "5", "title": "Bất phương trình bậc nhất biến đổi đặc biệt" },
      { "code": "6", "title": "Một số bài toán thực tế liên quan đến bất phương trình bậc nhất một ẩn" }
     ]}
    ]
   },
   {
    "code": "3", "title": "Chương III. CĂN BẬC HAI VÀ CĂN BẬC BA",
    "lessons": [
     { "code": "7", "title": "Bài 7. Căn bậc hai và căn thức bậc hai", "types": [
      { "code": "1", "title": "Tìm căn bậc hai số học của một số" },
      { "code": "2", "title": "Tìm điều kiện xác định (có nghĩa) của căn thức" },
      { "code": "3", "title": "Giải phương trình x^2 = a và căn(x) = a" },
      { "code": "4", "title": "Tính giá trị biểu thức có chứa căn bậc hai tại giá trị cho trước" },
      { "code": "5", "title": "Căn thức bậc hai của một bình phương" },
      { "code": "6", "title": "Một số bài toán thực tế liên quan đến căn bậc hai" }
     ]},
     { "code": "8", "title": "Bài 8. Khai căn bậc hai với phép nhân và phép chia", "types": [
      { "code": "1", "title": "Áp dụng quy tắc khai phương một tích" },
      { "code": "2", "title": "Áp dụng quy tắc khai phương một thương" },
      { "code": "3", "title": "Nhân chia các căn bậc hai" },
      { "code": "4", "title": "Tính giá trị biểu thức căn số học" },
      { "code": "5", "title": "So sánh các căn bậc hai" }
     ]},
     { "code": "9", "title": "Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai", "types": [
      { "code": "1", "title": "Đưa thừa số ra ngoài/vào trong dấu căn" },
      { "code": "2", "title": "Khử mẫu của biểu thức lấy căn" },
      { "code": "3", "title": "Trục căn thức ở mẫu" },
      { "code": "4", "title": "Rút gọn biểu thức chứa căn thức tổng hợp (Dạng thi vào 10)" },
      { "code": "5", "title": "Tìm x, tìm GTLN, GTNN của biểu thức chứa căn" },
      { "code": "6", "title": "Tìm giá trị x để biểu thức đạt giá trị là số nguyên" }
     ]},
     { "code": "10", "title": "Bài 10. Căn bậc ba và căn thức bậc ba", "types": [
      { "code": "1", "title": "Tính căn bậc ba của các số thực" },
      { "code": "2", "title": "Rút gọn biểu thức chứa căn bậc ba" },
      { "code": "3", "title": "Giải phương trình chứa căn bậc ba" },
      { "code": "4", "title": "So sánh hai căn bậc ba" },
      { "code": "5", "title": "Tính giá trị biểu thức có chứa căn bậc ba tại giá trị cho trước" }
     ]}
    ]
   },
   {
    "code": "6", "title": "Chương VI. HÀM SỐ y = ax2. PHƯƠNG TRÌNH BẬC HAI MỘT ẨN",
    "lessons": [
     { "code": "18", "title": "Bài 18. Hàm số y = ax2 (a ≠ 0)", "types": [
      { "code": "1", "title": "Tính giá trị của hàm số" },
      { "code": "2", "title": "Xét tính đồng biến, nghịch biến của hàm số" },
      { "code": "3", "title": "Vẽ đồ thị hàm số Parabol (P)" },
      { "code": "4", "title": "Tìm giao điểm của (P) và đường thẳng (d)" },
      { "code": "5", "title": "Bài toán tương giao liên quan đến diện tích, khoảng cách" },
      { "code": "6", "title": "Lập bảng giá trị của hàm số y = ax2" },
      { "code": "7", "title": "Tìm điểm thuộc đồ thị của hàm số" },
      { "code": "8", "title": "Xác định hệ số a khi biết đồ thị đi qua điểm" }
     ]},
     { "code": "19", "title": "Bài 19. Phương trình bậc hai một ẩn", "types": [
      { "code": "1", "title": "Giải phương trình bậc hai khuyết b hoặc c" },
      { "code": "2", "title": "Giải phương trình bậc hai đầy đủ bằng công thức nghiệm (Delta)" },
      { "code": "3", "title": "Giải phương trình bằng công thức nghiệm thu gọn (Delta phẩy)" },
      { "code": "4", "title": "Biện luận số nghiệm của phương trình theo tham số m" },
      { "code": "5", "title": "Ứng dụng công thức nghiệm tìm tham số thỏa mãn sự tương giao" }
     ]},
     { "code": "20", "title": "Bài 20. Định lí Viète và ứng dụng", "types": [
      { "code": "1", "title": "Tính tổng và tích hai nghiệm không cần giải phương trình" },
      { "code": "2", "title": "Nhẩm nghiệm trong trường hợp a+b+c=0 hoặc a-b+c=0" },
      { "code": "3", "title": "Tính giá trị biểu thức đối xứng của nghiệm (x1^2+x2^2, x1^3+x2^3)" },
      { "code": "4", "title": "Tìm m để phương trình có hai nghiệm thỏa mãn hệ thức cho trước" },
      { "code": "5", "title": "Tìm hai số biết tổng và tích của chúng" },
      { "code": "6", "title": "Ứng dụng định lí Viète trong phân tích đa thức ax2+bx+c thành nhân tử" },
      { "code": "7", "title": "Xác định tham số thỏa mãn điều kiện về dấu của các nghiệm" }
     ]},
     { "code": "21", "title": "Bài 21. Giải bài toán bằng cách lập phương trình", "types": [
      { "code": "1", "title": "Giải toán bằng cách lập phương trình bậc hai (số học, chuyển động)" },
      { "code": "2", "title": "Bài toán hình học (diện tích, Pitago) dẫn đến phương trình bậc hai" },
      { "code": "3", "title": "Các bài toán thực tế vật lý, lãi suất" }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "4", "title": "Chương IV. HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG",
    "lessons": [
     { "code": "11", "title": "Bài 11. Tỉ số lượng giác của góc nhọn", "types": [
      { "code": "1", "title": "Viết tỉ số lượng giác sin, cos, tan, cot của góc nhọn" },
      { "code": "2", "title": "Tính cạnh và góc dùng tỉ số lượng giác" },
      { "code": "3", "title": "Chứng minh các hệ thức lượng giác cơ bản" },
      { "code": "4", "title": "So sánh các tỉ số lượng giác không dùng máy tính" },
      { "code": "5", "title": "Tính các tỉ số lượng giác còn lại khi biết một tỉ số lượng giác" }
     ]},
     { "code": "12", "title": "Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng", "types": [
      { "code": "1", "title": "Hệ thức về cạnh góc vuông và hình chiếu (b^2=a.b')" },
      { "code": "2", "title": "Hệ thức về đường cao (h^2=b'.c', a.h=b.c, 1/h^2=1/b^2+1/c^2)" },
      { "code": "3", "title": "Giải tam giác vuông (tìm tất cả cạnh và góc)" },
      { "code": "4", "title": "Ứng dụng thực tế: đo chiều cao cây, tháp, khoảng cách" },
      { "code": "5", "title": "Tính cạnh, góc và diện tích tam giác" }
     ]}
    ]
   },
   {
    "code": "5", "title": "Chương V. ĐƯỜNG TRÒN",
    "lessons": [
     { "code": "13", "title": "Bài 13. Mở đầu về đường tròn", "types": [
      { "code": "1", "title": "Xác định tâm và bán kính, sự xác định đường tròn" },
      { "code": "2", "title": "Tính chất đối xứng của đường tròn (tâm, trục)" },
      { "code": "3", "title": "Vị trí tương đối của điểm đối với đường tròn" },
      { "code": "4", "title": "Chứng minh các điểm cùng nằm trên một đường tròn" }
     ]},
     { "code": "14", "title": "Bài 14. Cung và dây của một đường tròn", "types": [
      { "code": "1", "title": "So sánh hai cung, hai dây" },
      { "code": "2", "title": "Quan hệ vuông góc giữa đường kính và dây cung" },
      { "code": "3", "title": "Liên hệ giữa dây và khoảng cách từ tâm đến dây" },
      { "code": "4", "title": "Góc ở tâm và số đo cung bị chắn" }
     ]},
     { "code": "15", "title": "Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên", "types": [
      { "code": "1", "title": "Tính chu vi đường tròn, độ dài cung n độ" },
      { "code": "2", "title": "Tính diện tích hình tròn, hình quạt tròn" },
      { "code": "3", "title": "Tính diện tích hình viên phân, hình vành khuyên" },
      { "code": "4", "title": "Bài toán thực tế về độ dài cung tròn, diện tích quạt tròn" }
     ]},
     { "code": "16", "title": "Bài 16. Vị trí tương đối của đường thẳng và đường tròn", "types": [
      { "code": "1", "title": "Xác định vị trí (cắt, tiếp xúc, ngoài) dựa vào khoảng cách d và R" },
      { "code": "2", "title": "Tính chất của tiếp tuyến" },
      { "code": "3", "title": "Dấu hiệu nhận biết tiếp tuyến" },
      { "code": "4", "title": "Tính chất hai tiếp tuyến cắt nhau (tâm đường tròn nội tiếp)" },
      { "code": "5", "title": "Tính độ dài đoạn thẳng, góc liên quan đến tiếp tuyến" }
     ]},
     { "code": "17", "title": "Bài 17. Vị trí tương đối của hai đường tròn", "types": [
      { "code": "1", "title": "Xác định vị trí hai đường tròn (cắt, tiếp xúc, đựng nhau, ngoài nhau)" },
      { "code": "2", "title": "Tính chất đường nối tâm" },
      { "code": "3", "title": "Tiếp tuyến chung của hai đường tròn" },
      { "code": "4", "title": "Các bài toán về hai đường tròn tiếp xúc nhau, cắt nhau" }
     ]}
    ]
   },
   {
    "code": "9", "title": "Chương IX. ĐƯỜNG TRÒN NGOẠI TIẾP VÀ ĐƯỜNG TRÒN NỘI TIẾP",
    "lessons": [
     { "code": "27", "title": "Bài 27. Góc nội tiếp", "types": [
      { "code": "1", "title": "Nhận biết góc nội tiếp và cung bị chắn" },
      { "code": "2", "title": "Liên hệ giữa góc nội tiếp và góc ở tâm" },
      { "code": "3", "title": "Các hệ quả của góc nội tiếp (góc chắn nửa đường tròn, các góc bằng nhau)" },
      { "code": "4", "title": "Góc tạo bởi tia tiếp tuyến và dây cung" },
      { "code": "5", "title": "Chứng minh hai đường thẳng vuông góc, song song, ba điểm thẳng hàng" }
     ]},
     { "code": "28", "title": "Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác", "types": [
      { "code": "1", "title": "Xác định tâm và bán kính đường tròn ngoại tiếp" },
      { "code": "2", "title": "Xác định tâm và bán kính đường tròn nội tiếp" },
      { "code": "3", "title": "Tính diện tích tam giác theo bán kính R, r" },
      { "code": "4", "title": "Tính bán kính ngoại tiếp, nội tiếp tam giác đều, tam giác vuông" }
     ]},
     { "code": "29", "title": "Bài 29. Tứ giác nội tiếp", "types": [
      { "code": "1", "title": "Chứng minh tứ giác nội tiếp (tổng hai góc đối bằng 180 độ)" },
      { "code": "2", "title": "Chứng minh tứ giác nội tiếp (hai đỉnh kề cùng nhìn cạnh dưới góc bằng nhau)" },
      { "code": "3", "title": "Ứng dụng tứ giác nội tiếp chứng minh góc bằng nhau, thẳng hàng" },
      { "code": "4", "title": "Xác định tâm và bán kính đường tròn ngoại tiếp chữ nhật, vuông" }
     ]},
     { "code": "30", "title": "Bài 30. Đa giác đều", "types": [
      { "code": "1", "title": "Tính góc của đa giác đều n cạnh" },
      { "code": "2", "title": "Tính bán kính đường tròn ngoại tiếp, nội tiếp đa giác đều" },
      { "code": "3", "title": "Vẽ đa giác đều" },
      { "code": "4", "title": "Xác định phép quay, giữ nguyên một đa giác đều" }
     ]}
    ]
   },
   {
    "code": "10", "title": "Chương X. MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN",
    "lessons": [
     { "code": "31", "title": "Bài 31. Hình trụ và hình nón", "types": [
      { "code": "1", "title": "Tính diện tích xung quanh, toàn phần hình trụ" },
      { "code": "2", "title": "Tính thể tích hình trụ" },
      { "code": "3", "title": "Tính diện tích xung quanh, toàn phần hình nón" },
      { "code": "4", "title": "Tính thể tích hình nón" },
      { "code": "5", "title": "Tạo lập hình trụ, tạo lập hình nón" },
      { "code": "6", "title": "Tính S, V hình hỗn hợp có liên quan đến trụ, nón" }
     ]},
     { "code": "32", "title": "Bài 32. Hình cầu", "types": [
      { "code": "1", "title": "Tính diện tích mặt cầu" },
      { "code": "2", "title": "Tính thể tích hình cầu" },
      { "code": "3", "title": "Bài toán cắt mặt cầu bởi mặt phẳng" },
      { "code": "4", "title": "Tính S, V hình hỗn hợp có liên quan đến hình cầu" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "7", "title": "Chương VII. TẦN SỐ VÀ TẦN SỐ TƯƠNG ĐỐI",
    "lessons": [
     { "code": "22", "title": "Bài 22. Bảng tần số và biểu đồ tần số", "types": [
      { "code": "1", "title": "Lập bảng tần số từ dữ liệu thô" },
      { "code": "2", "title": "Vẽ biểu đồ tần số dạng cột hoặc đường gấp khúc" },
      { "code": "3", "title": "Nhận xét sự phân bố dữ liệu qua tần số" },
      { "code": "4", "title": "Đọc, giải thích, vẽ biểu đồ tần số dạng đoạn thẳng, cột" }
     ]},
     { "code": "23", "title": "Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối", "types": [
      { "code": "1", "title": "Tính tần số tương đối (tỉ lệ %)" },
      { "code": "2", "title": "Vẽ biểu đồ tần số tương đối (hình quạt hoặc cột)" },
      { "code": "3", "title": "Lập bảng tần số tương đối" }
     ]},
     { "code": "24", "title": "Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ", "types": [
      { "code": "1", "title": "Phân nhóm dữ liệu và lập bảng tần số ghép nhóm" },
      { "code": "2", "title": "Tính tần số tương đối ghép nhóm" },
      { "code": "3", "title": "Vẽ biểu đồ histogram (biểu đồ cột liền kề)" },
      { "code": "4", "title": "Đọc, giải thích, vẽ biểu đồ tần số tương đối ghép nhóm" }
     ]}
    ]
   },
   {
    "code": "8", "title": "Chương VIII. XÁC SUẤT CỦA BIẾN CỐ TRONG MỘT SỐ MÔ HÌNH XÁC SUẤT ĐƠN GIẢN",
    "lessons": [
     { "code": "25", "title": "Bài 25. Phép thử ngẫu nhiên và không gian mẫu", "types": [
      { "code": "1", "title": "Xác định không gian mẫu của các phép thử phức tạp hơn" },
      { "code": "2", "title": "Mô tả biến cố dưới dạng tập hợp con của không gian mẫu" },
      { "code": "3", "title": "Xác định hành động là phép thử ngẫu nhiên" }
     ]},
     { "code": "26", "title": "Bài 26. Xác suất của biến cố liên quan tới phép thử", "types": [
      { "code": "1", "title": "Tính xác suất cổ điển trong bài toán chọn mẫu, sắp xếp" },
      { "code": "2", "title": "Tính xác suất sử dụng quy tắc đếm cơ bản" },
      { "code": "3", "title": "Xác suất hình học (độ dài, diện tích)" },
      { "code": "4", "title": "Tính xác suất biến cố liên quan đến phép thử đồng khả năng" }
     ]}
    ]
   }
  ]
 },
 // ====================== LỚP 10 ======================
 "10": {
  "code": "0",
  "D": [
   {
    "code": "1", "title": "CHƯƠNG I. MỆNH ĐỀ VÀ TẬP HỢP",
    "lessons": [
     { "code": "1", "title": "Bài 1. Mệnh đề", "types": [
      { "code": "1", "title": "Nhận biết mệnh đề, mệnh đề chứa biến" },
      { "code": "2", "title": "Xét tính đúng sai của mệnh đề" },
      { "code": "3", "title": "Lập mệnh đề phủ định (cả mệnh đề chứa mọi, tồn tại)" },
      { "code": "4", "title": "Phát biểu mệnh đề kéo theo, mệnh đề đảo, mệnh đề tương đương" },
      { "code": "5", "title": "Phát biểu định lý, định lý đảo dưới dạng điều kiện cần, đủ" }
     ]},
     { "code": "2", "title": "Bài 2. Tập hợp và các phép toán trên tập hợp", "types": [
      { "code": "1", "title": "Viết tập hợp và xác định phần tử" },
      { "code": "2", "title": "Tìm tập hợp con, hai tập hợp bằng nhau" },
      { "code": "3", "title": "Thực hiện phép giao, hợp, hiệu của hai tập hợp" },
      { "code": "4", "title": "Các phép toán trên tập hợp số (khoảng, đoạn)" },
      { "code": "5", "title": "Giải toán bằng biểu đồ Ven (bài toán lớp học)" }
     ]}
    ]
   },
   {
    "code": "2", "title": "CHƯƠNG II. BẤT PHƯƠNG TRÌNH VÀ HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN",
    "lessons": [
     { "code": "3", "title": "Bài 3. Bất phương trình bậc nhất hai ẩn", "types": [
      { "code": "1", "title": "Nhận biết bất phương trình bậc nhất hai ẩn và nghiệm" },
      { "code": "2", "title": "Biểu diễn miền nghiệm của BPT trên mặt phẳng tọa độ" },
      { "code": "3", "title": "Bài toán kinh tế đưa về BPT bậc nhất hai ẩn" }
     ]},
     { "code": "4", "title": "Bài 4. Hệ bất phương trình bậc nhất hai ẩn", "types": [
      { "code": "1", "title": "Biểu diễn miền nghiệm của hệ BPT" },
      { "code": "2", "title": "Xác định các đỉnh của miền nghiệm (miền đa giác)" },
      { "code": "3", "title": "Tìm giá trị lớn nhất, nhỏ nhất của biểu thức F(x,y) trên miền nghiệm" },
      { "code": "4", "title": "Bài toán quy hoạch tuyến tính (tối ưu hóa lợi nhuận/chi phí)" }
     ]}
    ]
   },
   {
    "code": "6", "title": "CHƯƠNG VI. HÀM SỐ, ĐỒ THỊ VÀ ỨNG DỤNG",
    "lessons": [
     { "code": "15", "title": "Bài 15. Hàm số", "types": [
      { "code": "1", "title": "Tìm tập xác định của hàm số" },
      { "code": "2", "title": "Tìm tập giá trị của hàm số" },
      { "code": "3", "title": "Xét tính đồng biến, nghịch biến trên khoảng" },
      { "code": "4", "title": "Xét tính chẵn lẻ của hàm số" },
      { "code": "5", "title": "Đọc đồ thị hàm số (tìm giao điểm, khoảng biến thiên)" },
      { "code": "6", "title": "Cách xác định một hàm số, cách cho một hàm số" }
     ]},
     { "code": "16", "title": "Bài 16. Hàm số bậc hai", "types": [
      { "code": "1", "title": "Xác định đỉnh, trục đối xứng của Parabol" },
      { "code": "2", "title": "Vẽ đồ thị hàm số bậc hai" },
      { "code": "3", "title": "Lập phương trình Parabol thỏa mãn điều kiện" },
      { "code": "4", "title": "Tìm GTLN, GTNN của hàm số bậc hai trên đoạn/khoảng" },
      { "code": "5", "title": "Ứng dụng hàm bậc hai vào bài toán tầm bay cao, xa (vật lý)" },
      { "code": "6", "title": "Tìm điều kiện của m để hàm số là hàm số bậc hai" }
     ]},
     { "code": "17", "title": "Bài 17. Dấu của tam thức bậc hai", "types": [
      { "code": "1", "title": "Xét dấu của tam thức bậc hai" },
      { "code": "2", "title": "Giải bất phương trình bậc hai một ẩn" },
      { "code": "3", "title": "Giải hệ bất phương trình bậc hai" },
      { "code": "4", "title": "Tìm tham số m để tam thức luôn dương/âm (Delta và hệ số a)" },
      { "code": "5", "title": "Ứng dụng tam thức bậc hai chứng minh BĐT, tìm GTLN, GTNN" }
     ]},
     { "code": "18", "title": "Bài 18. Phương trình quy về phương trình bậc hai", "types": [
      { "code": "1", "title": "Giải phương trình dạng căn(f(x)) = căn(g(x))" },
      { "code": "2", "title": "Giải phương trình dạng căn(f(x)) = g(x)" },
      { "code": "3", "title": "Phương trình chứa dấu giá trị tuyệt đối" },
      { "code": "4", "title": "Phương trình trùng phương, phương trình chứa ẩn mẫu" },
      { "code": "5", "title": "Ứng dụng để giải các bài toán thực tế" }
     ]}
    ]
   },
   {
    "code": "8", "title": "CHƯƠNG VIII. ĐẠI SỐ TỔ HỢP",
    "lessons": [
     { "code": "23", "title": "Bài 23. Quy tắc đếm", "types": [
      { "code": "1", "title": "Áp dụng quy tắc cộng" },
      { "code": "2", "title": "Áp dụng quy tắc nhân" },
      { "code": "3", "title": "Kết hợp hai quy tắc đếm trong bài toán lập số, chọn vật" },
      { "code": "4", "title": "Quy tắc đếm liên quan đến số tự nhiên, thực tế, hình học" }
     ]},
     { "code": "24", "title": "Bài 24. Hoán vị, chỉnh hợp và tổ hợp", "types": [
      { "code": "1", "title": "Bài toán đếm dùng Hoán vị (xếp hàng, xếp số)" },
      { "code": "2", "title": "Bài toán đếm dùng Chỉnh hợp (chọn và xếp thứ tự)" },
      { "code": "3", "title": "Bài toán đếm dùng Tổ hợp (chọn không thứ tự)" },
      { "code": "4", "title": "Phân biệt khi nào dùng chỉnh hợp, khi nào dùng tổ hợp" },
      { "code": "5", "title": "Bài toán đếm hình học (số đường chéo, tam giác)" }
     ]},
     { "code": "25", "title": "Bài 25. Nhị thức Newton", "types": [
      { "code": "1", "title": "Khai triển nhị thức Newton (n nhỏ, thường n=4, 5)" },
      { "code": "2", "title": "Tìm hệ số của x^k trong khai triển" },
      { "code": "3", "title": "Tìm số hạng không chứa x" },
      { "code": "4", "title": "Tính tổng các hệ số trong khai triển" },
      { "code": "5", "title": "Sử dụng nhị thức Newton để tính giá trị gần đúng" }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "3", "title": "CHƯƠNG III. HỆ THỨC LƯỢNG TRONG TAM GIÁC",
    "lessons": [
     { "code": "5", "title": "Bài 5. Giá trị lượng giác của một góc từ 0° đến 180°", "types": [
      { "code": "1", "title": "Tính giá trị lượng giác của góc đặc biệt" },
      { "code": "2", "title": "Tính giá trị biểu thức lượng giác (sử dụng tính chất bù/phụ)" },
      { "code": "3", "title": "Chứng minh đẳng thức lượng giác cơ bản" },
      { "code": "4", "title": "Xác định dấu của các giá trị lượng giác" }
     ]},
     { "code": "6", "title": "Bài 6. Hệ thức lượng trong tam giác", "types": [
      { "code": "1", "title": "Áp dụng định lí Côsin để tính cạnh và góc" },
      { "code": "2", "title": "Áp dụng định lí Sin để tính cạnh và bán kính R" },
      { "code": "3", "title": "Tính diện tích tam giác (Heron, 1/2ab.sinC, pr, abc/4R)" },
      { "code": "4", "title": "Giải tam giác (tìm các yếu tố còn lại)" },
      { "code": "5", "title": "Bài toán thực tế đo đạc khoảng cách không tới được" },
      { "code": "6", "title": "Cách tính bán kính đường tròn nội tiếp, ngoại tiếp tam giác" }
     ]}
    ]
   },
   {
    "code": "4", "title": "CHƯƠNG IV. VECTƠ",
    "lessons": [
     { "code": "7", "title": "Bài 7. Các khái niệm mở đầu", "types": [
      { "code": "1", "title": "Nhận biết vectơ, phương, hướng, độ dài" },
      { "code": "2", "title": "Chứng minh hai vectơ bằng nhau" },
      { "code": "3", "title": "Tìm điểm thỏa mãn đẳng thức vectơ đơn giản" }
     ]},
     { "code": "8", "title": "Bài 8. Tổng và hiệu của hai vectơ", "types": [
      { "code": "1", "title": "Tính tổng vectơ (quy tắc 3 điểm, hình bình hành)" },
      { "code": "2", "title": "Tính hiệu hai vectơ" },
      { "code": "3", "title": "Tính độ dài của tổng/hiệu hai vectơ" },
      { "code": "4", "title": "Chứng minh đẳng thức vectơ" }
     ]},
     { "code": "9", "title": "Bài 9. Tích của một vectơ với một số", "types": [
      { "code": "1", "title": "Thực hiện phép nhân số với vectơ" },
      { "code": "2", "title": "Phân tích (biểu diễn) một vectơ theo hai vectơ không cùng phương" },
      { "code": "3", "title": "Chứng minh ba điểm thẳng hàng" },
      { "code": "4", "title": "Tìm tập hợp điểm thỏa mãn đẳng thức vectơ" }
     ]},
     { "code": "10", "title": "Bài 10. Vectơ trong mặt phẳng toạ độ", "types": [
      { "code": "1", "title": "Tìm tọa độ vectơ, tọa độ điểm" },
      { "code": "2", "title": "Tính tổng, hiệu, tích một số với vectơ theo tọa độ" },
      { "code": "3", "title": "Xác định tọa độ trung điểm, trọng tâm" },
      { "code": "4", "title": "Tìm điểm thỏa mãn điều kiện hình học (đối xứng, hình bình hành)" }
     ]},
     { "code": "11", "title": "Bài 11. Tích vô hướng của hai vectơ", "types": [
      { "code": "1", "title": "Tính tích vô hướng theo định nghĩa (độ dài và góc)" },
      { "code": "2", "title": "Tính tích vô hướng theo tọa độ" },
      { "code": "3", "title": "Tính góc giữa hai vectơ" },
      { "code": "4", "title": "Chứng minh hai đường thẳng vuông góc (tích vô hướng = 0)" },
      { "code": "5", "title": "Ứng dụng tích vô hướng chứng minh hệ thức lượng" },
      { "code": "6", "title": "Tính công sinh bởi một lực thỏa mãn các điều kiện" }
     ]}
    ]
   },
   {
    "code": "7", "title": "CHƯƠNG VII. PHƯƠNG PHÁP TOẠ ĐỘ TRONG MẶT PHẲNG",
    "lessons": [
     { "code": "19", "title": "Bài 19. Phương trình đường thẳng", "types": [
      { "code": "1", "title": "Viết phương trình tham số, tổng quát của đường thẳng" },
      { "code": "2", "title": "Chuyển đổi giữa các dạng phương trình" },
      { "code": "3", "title": "Xét vị trí tương đối của hai đường thẳng" },
      { "code": "4", "title": "Tính khoảng cách từ điểm đến đường thẳng" },
      { "code": "5", "title": "Tìm hình chiếu của điểm lên đường thẳng" },
      { "code": "6", "title": "Viết phương trình cạnh, đường cao, trung tuyến, phân giác" },
      { "code": "7", "title": "Phương trình đoạn chắn của đường thẳng" }
     ]},
     { "code": "20", "title": "Bài 20. Đường thẳng trong mặt phẳng toạ độ", "types": [
      { "code": "1", "title": "Tính góc giữa hai đường thẳng" },
      { "code": "2", "title": "Lập phương trình đường phân giác của góc tạo bởi 2 đường thẳng" },
      { "code": "3", "title": "Bài toán tìm điểm trên đường thẳng thỏa mãn điều kiện" }
     ]},
     { "code": "21", "title": "Bài 21. Đường tròn trong mặt phẳng toạ độ", "types": [
      { "code": "1", "title": "Viết phương trình đường tròn (biết tâm, bán kính)" },
      { "code": "2", "title": "Xác định tâm và bán kính từ phương trình" },
      { "code": "3", "title": "Viết phương trình tiếp tuyến của đường tròn (tại điểm, đi qua điểm)" },
      { "code": "4", "title": "Vị trí tương đối của đường thẳng và đường tròn" }
     ]},
     { "code": "22", "title": "Bài 22. Ba đường conic", "types": [
      { "code": "1", "title": "Viết phương trình chính tắc của Elip, xác định tiêu cự, trục lớn/bé" },
      { "code": "2", "title": "Viết phương trình chính tắc của Hypebol" },
      { "code": "3", "title": "Viết phương trình chính tắc của Parabol" },
      { "code": "4", "title": "Nhận biết các yếu tố hình học của 3 đường conic" },
      { "code": "5", "title": "Ứng dụng ba đường conic vào các bài toán thực tế" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "5", "title": "CHƯƠNG V. CÁC SỐ ĐẶC TRƯNG CỦA MẪU SỐ LIỆU KHÔNG GHÉP NHÓM",
    "lessons": [
     { "code": "12", "title": "Bài 12. Số gần đúng và sai số", "types": [
      { "code": "1", "title": "Xác định số gần đúng, số đúng" },
      { "code": "2", "title": "Tính sai số tuyệt đối, sai số tương đối" },
      { "code": "3", "title": "Quy tròn số và ước lượng sai số" },
      { "code": "4", "title": "Tính chu vi, diện tích hình với kích thước số đúng" }
     ]},
     { "code": "13", "title": "Bài 13. Các số đặc trưng đo xu thế trung tâm", "types": [
      { "code": "1", "title": "Tính số trung bình cộng" },
      { "code": "2", "title": "Tìm số trung vị (Median)" },
      { "code": "3", "title": "Tìm mốt (Mode)" },
      { "code": "4", "title": "Tìm tứ phân vị (Q1, Q2, Q3)" },
      { "code": "5", "title": "Ý nghĩa và cách chọn số đặc trưng phù hợp" }
     ]},
     { "code": "14", "title": "Bài 14. Các số đặc trưng đo độ phân tán", "types": [
      { "code": "1", "title": "Tính khoảng biến thiên (Range)" },
      { "code": "2", "title": "Tính khoảng tứ phân vị" },
      { "code": "3", "title": "Tính phương sai và độ lệch chuẩn" },
      { "code": "4", "title": "So sánh độ phân tán của hai mẫu số liệu" },
      { "code": "5", "title": "Tìm các giá trị ngoại lệ" }
     ]}
    ]
   },
   {
    "code": "9", "title": "CHƯƠNG IX. TÍNH XÁC SUẤT THEO ĐỊNH NGHĨA CỔ ĐIỂN",
    "lessons": [
     { "code": "26", "title": "Bài 26. Biến cố và định nghĩa cổ điển của xác suất", "types": [
      { "code": "1", "title": "Xác định không gian mẫu và biến cố" },
      { "code": "2", "title": "Tính xác suất theo định nghĩa cổ điển (n(A)/n(Omega))" },
      { "code": "3", "title": "Tính xác suất biến cố đối" }
     ]},
     { "code": "27", "title": "Bài 27. Thực hành tính xác suất theo định nghĩa cổ điển", "types": [
      { "code": "1", "title": "Bài toán chọn vật (quả cầu, thẻ)" },
      { "code": "2", "title": "Bài toán sắp xếp (người, đồ vật)" },
      { "code": "3", "title": "Bài toán gieo xúc xắc, đồng xu" },
      { "code": "4", "title": "Sử dụng sơ đồ hình cây để tính xác suất" },
      { "code": "5", "title": "Sử dụng phương pháp tổ hợp để tính xác suất" }
     ]}
    ]
   }
  ]
 },
 // ====================== LỚP 11 ======================
 "11": {
  "code": "1",
  "D": [
   {
    "code": "1", "title": "CHƯƠNG I. HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC",
    "lessons": [
     { "code": "1", "title": "Bài 1. Giá trị lượng giác của góc lượng giác", "types": [
      { "code": "1", "title": "Đổi đơn vị đo góc (độ - radian)" },
      { "code": "2", "title": "Xác định điểm biểu diễn góc lượng giác trên đường tròn" },
      { "code": "3", "title": "Tính giá trị lượng giác, áp dụng hệ thức cơ bản (sin^2+cos^2=1...)" },
      { "code": "4", "title": "Sử dụng cung liên kết (cos đối, sin bù, phụ chéo...)" },
      { "code": "5", "title": "Số đo của góc lượng giác và hệ thức Chasles" },
      { "code": "6", "title": "Xác định độ dài cung tròn" },
      { "code": "7", "title": "Bài toán thực tế về giá trị lượng giác của góc lượng giác" }
     ]},
     { "code": "2", "title": "Bài 2. Công thức lượng giác", "types": [
      { "code": "1", "title": "Áp dụng công thức cộng" },
      { "code": "2", "title": "Áp dụng công thức nhân đôi, hạ bậc" },
      { "code": "3", "title": "Biến đổi tổng thành tích và tích thành tổng" },
      { "code": "4", "title": "Chứng minh đẳng thức, rút gọn biểu thức lượng giác" }
     ]},
     { "code": "3", "title": "Bài 3. Hàm số lượng giác", "types": [
      { "code": "1", "title": "Tìm tập xác định của hàm số lượng giác" },
      { "code": "2", "title": "Tìm tập giá trị, GTLN, GTNN của hàm số" },
      { "code": "3", "title": "Xét tính chẵn lẻ, tính tuần hoàn" },
      { "code": "4", "title": "Khảo sát sự biến thiên và đồ thị" }
     ]},
     { "code": "4", "title": "Bài 4. Phương trình lượng giác cơ bản", "types": [
      { "code": "1", "title": "Giải phương trình sin, cos, tan, cot cơ bản" },
      { "code": "2", "title": "Giải phương trình bậc nhất, bậc hai đối với một hàm lượng giác" },
      { "code": "3", "title": "Giải phương trình bậc nhất đối với sin và cos (asin + bcos = c)" },
      { "code": "4", "title": "Tìm nghiệm phương trình trong khoảng cho trước" },
      { "code": "5", "title": "Biện luận tham số m để phương trình có nghiệm" }
     ]}
    ]
   },
   {
    "code": "2", "title": "CHƯƠNG II. DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
    "lessons": [
     { "code": "5", "title": "Bài 5. Dãy số", "types": [
      { "code": "1", "title": "Viết các số hạng đầu của dãy số" },
      { "code": "2", "title": "Tìm số hạng tổng quát của dãy số" },
      { "code": "3", "title": "Xét tính tăng giảm của dãy số" },
      { "code": "4", "title": "Xét tính bị chặn của dãy số" },
      { "code": "5", "title": "Tìm các số hạng cho bởi công thức truy hồi, dự đoán tổng quát" }
     ]},
     { "code": "6", "title": "Bài 6. Cấp số cộng", "types": [
      { "code": "1", "title": "Nhận biết cấp số cộng, tìm công sai d" },
      { "code": "2", "title": "Tìm số hạng tổng quát, số hạng thứ n" },
      { "code": "3", "title": "Tính tổng n số hạng đầu của cấp số cộng" },
      { "code": "4", "title": "Giải bài toán thực tế liên quan cấp số cộng" }
     ]},
     { "code": "7", "title": "Bài 7. Cấp số nhân", "types": [
      { "code": "1", "title": "Nhận biết cấp số nhân, tìm công bội q" },
      { "code": "2", "title": "Tìm số hạng tổng quát" },
      { "code": "3", "title": "Tính tổng n số hạng đầu của cấp số nhân" },
      { "code": "4", "title": "Giải bài toán thực tế (lãi suất kép, tăng trưởng)" }
     ]}
    ]
   },
   {
    "code": "5", "title": "CHƯƠNG V. GIỚI HẠN. HÀM SỐ LIÊN TỤC",
    "lessons": [
     { "code": "15", "title": "Bài 15. Giới hạn của dãy số", "types": [
      { "code": "1", "title": "Tính giới hạn dãy số dạng phân thức (vô cùng/vô cùng)" },
      { "code": "2", "title": "Tính giới hạn dãy chứa căn thức (nhân liên hợp)" },
      { "code": "3", "title": "Tính giới hạn của cấp số nhân lùi vô hạn" },
      { "code": "4", "title": "Tính tổng của chuỗi số vô hạn" },
      { "code": "5", "title": "Tìm giới hạn của dãy số hạng chứa lũy thừa" }
     ]},
     { "code": "16", "title": "Bài 16. Giới hạn của hàm số", "types": [
      { "code": "1", "title": "Tính giới hạn tại một điểm (dạng xác định)" },
      { "code": "2", "title": "Khử dạng vô định 0/0 (phân tích nhân tử, liên hợp)" },
      { "code": "3", "title": "Tính giới hạn tại vô cực, giới hạn một bên" },
      { "code": "4", "title": "Giới hạn dạng vô định vô cùng - vô cùng" }
     ]},
     { "code": "17", "title": "Bài 17. Hàm số liên tục", "types": [
      { "code": "1", "title": "Xét tính liên tục của hàm số tại một điểm" },
      { "code": "2", "title": "Xét tính liên tục trên khoảng, đoạn" },
      { "code": "3", "title": "Tìm tham số để hàm số liên tục" },
      { "code": "4", "title": "Chứng minh phương trình có nghiệm trong khoảng (định lí giá trị trung gian)" }
     ]}
    ]
   },
   {
    "code": "6", "title": "CHƯƠNG VI. HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT",
    "lessons": [
     { "code": "18", "title": "Bài 18. Luỹ thừa với số mũ thực", "types": [
      { "code": "1", "title": "Tính giá trị biểu thức lũy thừa (số mũ nguyên, hữu tỉ, thực)" },
      { "code": "2", "title": "Rút gọn biểu thức chứa căn và lũy thừa" },
      { "code": "3", "title": "So sánh hai lũy thừa" }
     ]},
     { "code": "19", "title": "Bài 19. Lôgarit", "types": [
      { "code": "1", "title": "Tính giá trị biểu thức lôgarit theo định nghĩa" },
      { "code": "2", "title": "Áp dụng các quy tắc logarit (tích, thương, mũ, đổi cơ số)" },
      { "code": "3", "title": "Biểu diễn logarit qua các logarit khác cho trước" }
     ]},
     { "code": "20", "title": "Bài 20. Hàm số mũ và hàm số lôgarit", "types": [
      { "code": "1", "title": "Tìm tập xác định của hàm số mũ, logarit" },
      { "code": "2", "title": "Tính đạo hàm hàm số mũ, logarit" },
      { "code": "3", "title": "Khảo sát sự biến thiên và đồ thị" },
      { "code": "4", "title": "Bài toán lãi suất liên quan hàm mũ" }
     ]},
     { "code": "21", "title": "Bài 21. Phương trình, bất phương trình mũ và lôgarit", "types": [
      { "code": "1", "title": "Phương trình mũ/logarit cơ bản" },
      { "code": "2", "title": "Phương pháp đưa về cùng cơ số" },
      { "code": "3", "title": "Phương pháp đặt ẩn phụ" },
      { "code": "4", "title": "Phương pháp logarit hóa, mũ hóa" },
      { "code": "5", "title": "Phương pháp hàm số (nghiệm duy nhất)" }
     ]}
    ]
   },
   {
    "code": "9", "title": "CHƯƠNG IX. ĐẠO HÀM",
    "lessons": [
     { "code": "31", "title": "Bài 31. Định nghĩa và ý nghĩa của đạo hàm", "types": [
      { "code": "1", "title": "Tính đạo hàm bằng định nghĩa (giới hạn tỉ số)" },
      { "code": "2", "title": "Viết phương trình tiếp tuyến tại tiếp điểm" },
      { "code": "3", "title": "Viết phương trình tiếp tuyến đi qua điểm hoặc biết hệ số góc" },
      { "code": "4", "title": "Ý nghĩa vật lý (vận tốc tức thời)" }
     ]},
     { "code": "32", "title": "Bài 32. Các quy tắc tính đạo hàm", "types": [
      { "code": "1", "title": "Đạo hàm của hàm đa thức, phân thức" },
      { "code": "2", "title": "Đạo hàm của hàm lượng giác, mũ, logarit" },
      { "code": "3", "title": "Đạo hàm của hàm hợp" },
      { "code": "4", "title": "Giải phương trình, bất phương trình chứa đạo hàm" }
     ]},
     { "code": "33", "title": "Bài 33. Đạo hàm cấp hai", "types": [
      { "code": "1", "title": "Tính đạo hàm cấp hai" },
      { "code": "2", "title": "Ứng dụng đạo hàm cấp hai trong cơ học (gia tốc)" },
      { "code": "3", "title": "Chứng minh đẳng thức chứa đạo hàm cấp cao" }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "4", "title": "CHƯƠNG IV. QUAN HỆ SONG SONG TRONG KHÔNG GIAN",
    "lessons": [
     { "code": "10", "title": "Bài 10. Đường thẳng và mặt phẳng trong không gian", "types": [
      { "code": "1", "title": "Tìm giao tuyến của hai mặt phẳng" },
      { "code": "2", "title": "Tìm giao điểm của đường thẳng và mặt phẳng" },
      { "code": "3", "title": "Chứng minh ba điểm thẳng hàng, ba đường đồng quy trong không gian" },
      { "code": "4", "title": "Xác định thiết diện của hình chóp cắt bởi mặt phẳng" }
     ]},
     { "code": "11", "title": "Bài 11. Hai đường thẳng song song", "types": [
      { "code": "1", "title": "Chứng minh hai đường thẳng song song" },
      { "code": "2", "title": "Tìm vị trí tương đối của hai đường thẳng (chéo nhau, cắt, song song)" },
      { "code": "3", "title": "Tính góc giữa hai đường thẳng chéo nhau" }
     ]},
     { "code": "12", "title": "Bài 12. Đường thẳng và mặt phẳng song song", "types": [
      { "code": "1", "title": "Chứng minh đường thẳng song song với mặt phẳng" },
      { "code": "2", "title": "Dựng thiết diện song song với đường thẳng" },
      { "code": "3", "title": "Tìm giao tuyến của hai mặt phẳng chứa hai đường song song" }
     ]},
     { "code": "13", "title": "Bài 13. Hai mặt phẳng song song", "types": [
      { "code": "1", "title": "Chứng minh hai mặt phẳng song song" },
      { "code": "2", "title": "Định lí Thales trong không gian và ứng dụng" },
      { "code": "3", "title": "Tính tỉ số đoạn thẳng, diện tích thông qua tính chất song song" }
     ]},
     { "code": "14", "title": "Bài 14. Phép chiếu song song", "types": [
      { "code": "1", "title": "Vẽ hình biểu diễn của các hình không gian cơ bản (lăng trụ, chóp)" },
      { "code": "2", "title": "Bảo toàn tính chất song song và tỉ số trong phép chiếu" },
      { "code": "3", "title": "Xác định ảnh của một điểm, một đoạn thẳng... qua phép chiếu" }
     ]}
    ]
   },
   {
    "code": "7", "title": "CHƯƠNG VII. QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN",
    "lessons": [
     { "code": "22", "title": "Bài 22. Hai đường thẳng vuông góc", "types": [
      { "code": "1", "title": "Tính góc giữa hai vectơ trong không gian" },
      { "code": "2", "title": "Tính góc giữa hai đường thẳng trong không gian" },
      { "code": "3", "title": "Chứng minh hai đường thẳng vuông góc" }
     ]},
     { "code": "23", "title": "Bài 23. Đường thẳng vuông góc với mặt phẳng", "types": [
      { "code": "1", "title": "Chứng minh đường thẳng vuông góc với mặt phẳng" },
      { "code": "2", "title": "Chứng minh hai đường thẳng vuông góc dựa vào đường-mặt" },
      { "code": "3", "title": "Xác định hình chiếu vuông góc của điểm lên mặt phẳng" },
      { "code": "4", "title": "Liên hệ giữa song song và vuông góc của đường thẳng và mặt phẳng" }
     ]},
     { "code": "24", "title": "Bài 24. Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng", "types": [
      { "code": "1", "title": "Xác định hình chiếu của đường thẳng lên mặt phẳng" },
      { "code": "2", "title": "Xác định góc giữa đường thẳng và mặt phẳng" },
      { "code": "3", "title": "Tính góc giữa đường thẳng và mặt phẳng (sử dụng lượng giác)" },
      { "code": "4", "title": "Vận dụng định lí ba đường vuông góc" }
     ]},
     { "code": "25", "title": "Bài 25. Hai mặt phẳng vuông góc", "types": [
      { "code": "1", "title": "Chứng minh hai mặt phẳng vuông góc" },
      { "code": "2", "title": "Xác định góc giữa hai mặt phẳng (góc nhị diện)" },
      { "code": "3", "title": "Tính diện tích hình chiếu của đa giác" }
     ]},
     { "code": "26", "title": "Bài 26. Khoảng cách", "types": [
      { "code": "1", "title": "Tính khoảng cách từ điểm đến mặt phẳng" },
      { "code": "2", "title": "Tính khoảng cách từ đường thẳng đến mặt phẳng song song" },
      { "code": "3", "title": "Tính khoảng cách giữa hai mặt phẳng song song" },
      { "code": "4", "title": "Tính khoảng cách giữa hai đường thẳng chéo nhau (đoạn vuông góc chung)" }
     ]},
     { "code": "27", "title": "Bài 27. Thể tích", "types": [
      { "code": "1", "title": "Thể tích khối chóp, khối chóp cụt" },
      { "code": "2", "title": "Thể tích khối lăng trụ, hộp chữ nhật, lập phương" },
      { "code": "3", "title": "Tỉ số thể tích (công thức Simpson cho chóp tam giác)" },
      { "code": "4", "title": "Bài toán thực tế về thể tích" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "3", "title": "CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM",
    "lessons": [
     { "code": "9", "title": "Bài 9. Khoảng biến thiên và khoảng tứ phân vị", "types": [
      { "code": "1", "title": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm" },
      { "code": "2", "title": "Tính khoảng tứ phân vị của mẫu số liệu ghép nhóm" },
      { "code": "3", "title": "Nhận xét và so sánh độ phân tán dựa vào R và Delta Q" },
      { "code": "4", "title": "Ý nghĩa của khoảng biến thiên và tứ phân vị trong việc đo mức độ phân tán" }
     ]},
     { "code": "10", "title": "Bài 10. Phương sai và độ lệch chuẩn", "types": [
      { "code": "1", "title": "Tính phương sai mẫu ghép nhóm" },
      { "code": "2", "title": "Tính độ lệch chuẩn mẫu ghép nhóm" },
      { "code": "3", "title": "So sánh mức độ phân tán/ổn định của hai tập dữ liệu" },
      { "code": "4", "title": "Vận dụng đo mức độ rủi ro" }
     ]}
    ]
   },
   {
    "code": "6", "title": "CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN",
    "lessons": [
     { "code": "18", "title": "Bài 18. Xác suất có điều kiện", "types": [
      { "code": "1", "title": "Tính xác suất có điều kiện P(A|B)" },
      { "code": "2", "title": "Sử dụng công thức nhân xác suất tổng quát P(AB) = P(A)P(B|A)" },
      { "code": "3", "title": "Mô hình hóa bài toán thực tế bằng xác suất có điều kiện" },
      { "code": "4", "title": "Tính xác suất có điều kiện bằng cách sử dụng sơ đồ hình cây" }
     ]},
     { "code": "19", "title": "Bài 19. Công thức xác suất toàn phần và công thức Bayes", "types": [
      { "code": "1", "title": "Xác định hệ biến cố đầy đủ" },
      { "code": "2", "title": "Áp dụng công thức xác suất toàn phần" },
      { "code": "3", "title": "Áp dụng công thức Bayes để tính xác suất hậu nghiệm" },
      { "code": "4", "title": "Giải bài toán y tế (độ nhạy, độ đặc hiệu xét nghiệm)" }
     ]}
    ]
   }
  ]
 },
 // ====================== LỚP 12 ======================
 "12": {
  "code": "2",
  "D": [
   {
    "code": "1", "title": "CHƯƠNG I. ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ",
    "lessons": [
     { "code": "1", "title": "Bài 1. Tính đơn điệu và cực trị của hàm số", "types": [
      { "code": "1", "title": "Xét khoảng đồng biến, nghịch biến của hàm số" },
      { "code": "2", "title": "Tìm cực trị của hàm số dựa vào bảng biến thiên, đạo hàm" },
      { "code": "3", "title": "Tìm tham số m để hàm số đơn điệu trên R hoặc trên khoảng" },
      { "code": "4", "title": "Tìm tham số m để hàm số có cực trị thỏa mãn điều kiện" },
      { "code": "5", "title": "Đọc tính chất đơn điệu, cực trị từ đồ thị f(x) hoặc f'(x)" },
      { "code": "6", "title": "Một số bài toán hàm hợp liên quan đến tính đơn điệu và cực trị" }
     ]},
     { "code": "2", "title": "Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", "types": [
      { "code": "1", "title": "Tìm GTLN, GTNN trên một đoạn (quy tắc đạo hàm)" },
      { "code": "2", "title": "Tìm GTLN, GTNN trên khoảng (lập BBT)" },
      { "code": "3", "title": "Ứng dụng GTLN, GTNN vào bài toán thực tế (tối ưu chi phí, diện tích)" },
      { "code": "4", "title": "Tìm m để GTLN, GTNN thỏa mãn điều kiện cho trước" },
      { "code": "5", "title": "Một số bài toán hàm hợp liên quan đến giá trị lớn nhất, nhỏ nhất" }
     ]},
     { "code": "3", "title": "Bài 3. Đường tiệm cận của đồ thị hàm số", "types": [
      { "code": "1", "title": "Tìm tiệm cận đứng của đồ thị hàm số" },
      { "code": "2", "title": "Tìm tiệm cận ngang của đồ thị hàm số" },
      { "code": "3", "title": "Tìm tiệm cận xiên của đồ thị hàm số" },
      { "code": "4", "title": "Bài toán tiệm cận chứa tham số" },
      { "code": "5", "title": "Sử dụng đồ thị hàm số hoặc bảng biến thiên xác định tiệm cận" }
     ]},
     { "code": "4", "title": "Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số", "types": [
      { "code": "1", "title": "Khảo sát hàm đa thức bậc 3" },
      { "code": "2", "title": "Khảo sát hàm phân thức hữu tỉ (bậc 1/1, bậc 2/1)" },
      { "code": "3", "title": "Biện luận số nghiệm phương trình bằng đồ thị (tương giao)" },
      { "code": "4", "title": "Nhận dạng đồ thị hàm số" }
     ]},
     { "code": "5", "title": "Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn", "types": [
      { "code": "1", "title": "Bài toán chuyển động (vận tốc, quãng đường, gia tốc)" },
      { "code": "2", "title": "Bài toán kinh tế (lợi nhuận biên, chi phí biên)" },
      { "code": "3", "title": "Bài toán tối ưu hình học" }
     ]}
    ]
   },
   {
    "code": "4", "title": "CHƯƠNG IV. NGUYÊN HÀM VÀ TÍCH PHÂN",
    "lessons": [
     { "code": "11", "title": "Bài 11. Nguyên hàm", "types": [
      { "code": "1", "title": "Tìm nguyên hàm bằng bảng công thức cơ bản" },
      { "code": "2", "title": "Tìm nguyên hàm của hàm số hợp (ax+b)" },
      { "code": "3", "title": "Phương pháp đổi biến số" },
      { "code": "4", "title": "Phương pháp nguyên hàm từng phần" },
      { "code": "5", "title": "Tìm nguyên hàm thỏa mãn điều kiện F(x0) = k" },
      { "code": "6", "title": "Nguyên hàm của hàm số lượng giác, hàm số mũ" }
     ]},
     { "code": "12", "title": "Bài 12. Tích phân", "types": [
      { "code": "1", "title": "Tính tích phân xác định bằng định nghĩa và tính chất" },
      { "code": "2", "title": "Tích phân đổi biến số" },
      { "code": "3", "title": "Tích phân từng phần" },
      { "code": "4", "title": "Tích phân hàm chứa dấu giá trị tuyệt đối hoặc hàm ẩn" },
      { "code": "5", "title": "Tích phân của các hàm số cho bởi nhiều công thức" }
     ]},
     { "code": "13", "title": "Bài 13. Ứng dụng hình học của tích phân", "types": [
      { "code": "1", "title": "Tính diện tích hình phẳng giới hạn bởi đường cong và trục hoành" },
      { "code": "2", "title": "Tính diện tích hình phẳng giới hạn bởi hai đường cong" },
      { "code": "3", "title": "Tính thể tích vật thể tròn xoay" },
      { "code": "4", "title": "Ứng dụng tích phân trong bài toán vật lý (quãng đường, công)" }
     ]}
    ]
   }
  ],
  "H": [
   {
    "code": "2", "title": "CHƯƠNG II. VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN",
    "lessons": [
     { "code": "6", "title": "Bài 6. Vectơ trong không gian", "types": [
      { "code": "1", "title": "Các phép toán cộng, trừ, nhân số với vectơ trong không gian" },
      { "code": "2", "title": "Phân tích vectơ theo ba vectơ không đồng phẳng" },
      { "code": "3", "title": "Chứng minh đồng phẳng, thẳng hàng bằng vectơ" },
      { "code": "4", "title": "Các bài toán ứng dụng vectơ trong thực tế" }
     ]},
     { "code": "7", "title": "Bài 7. Hệ trục toạ độ trong không gian", "types": [
      { "code": "1", "title": "Tìm tọa độ điểm, tọa độ vectơ, độ dài vectơ" },
      { "code": "2", "title": "Tìm tọa độ trung điểm, trọng tâm" },
      { "code": "3", "title": "Tích vô hướng và ứng dụng (góc, độ dài)" },
      { "code": "4", "title": "Phương trình mặt cầu dạng cơ bản (x-a)^2..." }
     ]},
     { "code": "8", "title": "Bài 8. Biểu thức toạ độ của các phép toán vectơ", "types": [
      { "code": "1", "title": "Tính toán biểu thức tọa độ" },
      { "code": "2", "title": "Ứng dụng chứng minh vuông góc, song song bằng tọa độ" },
      { "code": "3", "title": "Tìm điểm thỏa mãn đẳng thức vectơ" },
      { "code": "4", "title": "Vận dụng tọa độ của vectơ để giải các bài toán thực tế" }
     ]}
    ]
   },
   {
    "code": "5", "title": "CHƯƠNG V. PHƯƠNG PHÁP TOẠ ĐỘ TRONG KHÔNG GIAN",
    "lessons": [
     { "code": "14", "title": "Bài 14. Phương trình mặt phẳng", "types": [
      { "code": "1", "title": "Xác định vectơ pháp tuyến, điểm đi qua" },
      { "code": "2", "title": "Viết phương trình mặt phẳng trung trực, đi qua 3 điểm" },
      { "code": "3", "title": "Viết phương trình mặt phẳng theo đoạn chắn" },
      { "code": "4", "title": "Khoảng cách từ điểm đến mặt phẳng" },
      { "code": "5", "title": "Vị trí tương đối của hai mặt phẳng" },
      { "code": "6", "title": "Vận dụng kiến thức phương trình mặt phẳng vào giải quyết bài toán thực tế" }
     ]},
     { "code": "15", "title": "Bài 15. Phương trình đường thẳng trong không gian", "types": [
      { "code": "1", "title": "Xác định vectơ chỉ phương, viết phương trình tham số, chính tắc" },
      { "code": "2", "title": "Viết phương trình đường thẳng là giao tuyến 2 mặt phẳng" },
      { "code": "3", "title": "Vị trí tương đối của hai đường thẳng, đường thẳng và mặt phẳng" },
      { "code": "4", "title": "Hình chiếu của điểm lên đường thẳng, mặt phẳng" }
     ]},
     { "code": "16", "title": "Bài 16. Công thức tính góc trong không gian", "types": [
      { "code": "1", "title": "Tính góc giữa hai đường thẳng" },
      { "code": "2", "title": "Tính góc giữa đường thẳng và mặt phẳng" },
      { "code": "3", "title": "Tính góc giữa hai mặt phẳng" }
     ]},
     { "code": "17", "title": "Bài 17. Phương trình mặt cầu", "types": [
      { "code": "1", "title": "Viết phương trình mặt cầu (tâm, bán kính)" },
      { "code": "2", "title": "Xác định tâm và bán kính từ phương trình tổng quát" },
      { "code": "3", "title": "Vị trí tương đối của mặt phẳng và mặt cầu (cắt, tiếp xúc)" },
      { "code": "4", "title": "Bài toán tiếp diện của mặt cầu" },
      { "code": "5", "title": "Tìm điểm thuộc mặt cầu thỏa mãn điều kiện cực trị" },
      { "code": "6", "title": "Viết phương trình mặt cầu đi qua 4 điểm không đồng phẳng" }
     ]}
    ]
   }
  ],
  "X": [
   {
    "code": "3", "title": "CHƯƠNG III. CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN CỦA MẪU SỐ LIỆU GHÉP NHÓM",
    "lessons": [
     { "code": "9", "title": "Bài 9. Khoảng biến thiên và khoảng tứ phân vị", "types": [
      { "code": "1", "title": "Tính khoảng biến thiên của mẫu số liệu ghép nhóm" },
      { "code": "2", "title": "Tính khoảng tứ phân vị của mẫu số liệu ghép nhóm" },
      { "code": "3", "title": "Nhận xét và so sánh độ phân tán dựa vào R và Delta Q" },
      { "code": "4", "title": "Ý nghĩa của khoảng biến thiên và tứ phân vị trong việc đo mức độ phân tán" }
     ]},
     { "code": "10", "title": "Bài 10. Phương sai và độ lệch chuẩn", "types": [
      { "code": "1", "title": "Tính phương sai mẫu ghép nhóm" },
      { "code": "2", "title": "Tính độ lệch chuẩn mẫu ghép nhóm" },
      { "code": "3", "title": "So sánh mức độ phân tán/ổn định của hai tập dữ liệu" },
      { "code": "4", "title": "Vận dụng đo mức độ rủi ro" }
     ]}
    ]
   },
   {
    "code": "6", "title": "CHƯƠNG VI. XÁC SUẤT CÓ ĐIỀU KIỆN",
    "lessons": [
     { "code": "18", "title": "Bài 18. Xác suất có điều kiện", "types": [
      { "code": "1", "title": "Tính xác suất có điều kiện P(A|B)" },
      { "code": "2", "title": "Sử dụng công thức nhân xác suất tổng quát P(AB) = P(A)P(B|A)" },
      { "code": "3", "title": "Mô hình hóa bài toán thực tế bằng xác suất có điều kiện" },
      { "code": "4", "title": "Tính xác suất có điều kiện bằng cách sử dụng sơ đồ hình cây" }
     ]},
     { "code": "19", "title": "Bài 19. Công thức xác suất toàn phần và công thức Bayes", "types": [
      { "code": "1", "title": "Xác định hệ biến cố đầy đủ" },
      { "code": "2", "title": "Áp dụng công thức xác suất toàn phần" },
      { "code": "3", "title": "Áp dụng công thức Bayes để tính xác suất hậu nghiệm" },
      { "code": "4", "title": "Giải bài toán y tế (độ nhạy, độ đặc hiệu xét nghiệm)" }
     ]}
    ]
   }
  ]
 }
};
