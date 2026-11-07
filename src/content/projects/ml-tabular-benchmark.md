---
id: "ml-tabular-benchmark"
featured: false
published: true
category: "ai-ml"
title:
  vi: "Nghiên cứu Đánh giá Mô hình Học máy có Giám sát trên Dữ liệu Bảng"
  en: "Supervised Machine Learning Benchmark on Tabular Datasets"
description:
  vi: "Khung thực nghiệm đối sánh hiệu năng phân loại giữa Logistic Regression, Random Forest và Gradient Boosting trên các tập dữ liệu mở UCI."
  en: "A structured benchmark comparing classification performance across Logistic Regression, Random Forests, and Gradient Boosting on UCI open datasets."
thumbnail: "images/projects/ml-thumb.svg"
gallery:
  - "images/projects/ml-thumb.svg"
technologies:
  - "Python"
  - "Scikit-Learn"
  - "Pandas"
  - "NumPy"
  - "Seaborn"
links:
  github: "https://github.com/Trqc-Nam"
timeline:
  startDate: "2026-10"
  completionDate: "2026-11"
  status: "completed"
academic:
  individualContribution:
    vi: "Xây dựng quy trình làm sạch dữ liệu, xử lý giá trị khuyết thiếu (Imputation), chuẩn hóa phân phối đặc trưng và viết kịch bản đánh giá K-Fold tự động."
    en: "Constructed complete data cleaning workflows, missing value imputation, feature scaling, and automated stratified K-fold evaluation scripts."
  methodology:
    vi: "Sử dụng Stratified 5-Fold Cross-Validation để tránh rò rỉ dữ liệu (Data Leakage); đánh giá đa tiêu chí với ROC-AUC, F1-macro và Confusion Matrix."
    en: "Applied 5-Fold Stratified Cross-Validation strictly isolating test partitions to prevent data leakage, benchmarked via ROC-AUC, F1-macro, and confusion matrices."
  results:
    vi: "Mô hình ensemble học theo cụm cây (Random Forest) đạt độ ổn định phương sai thấp nhất trên dữ liệu có phân phối bất đối xứng."
    en: "Tree ensemble methods demonstrated significantly lower variance and superior robustness across skewed feature distributions."
  limitations:
    vi: "Thực nghiệm chỉ giới hạn ở dữ liệu có cấu trúc dạng bảng, chưa mở rộng sang dữ liệu chuỗi thời gian hoặc dữ liệu phi cấu trúc."
    en: "Limited strictly to tabular modalities; sequential and unstructured data benchmarks planned for advanced coursework."
---

### Đóng góp học thuật / Research Scope

Khung thực nghiệm hình thành tác phong nghiên cứu khoa học chuẩn mực: không kết luận dựa trên chỉ một chỉ số đơn lẻ (như độ chính xác tổng quát Accuracy), mà phải phân tích sự cân bằng giữa độ nhạy (Recall) và độ đặc hiệu (Precision).
