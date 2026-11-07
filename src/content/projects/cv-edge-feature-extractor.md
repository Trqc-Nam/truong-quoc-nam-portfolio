---
id: "cv-edge-feature-extractor"
featured: false
published: true
category: "computer-vision"
title:
  vi: "Hệ thống Thực nghiệm Trích xuất Đặc trưng & Lọc biên Ảnh số"
  en: "Digital Image Edge Detection & Spatial Feature Extraction Pipeline"
description:
  vi: "Thực nghiệm đánh giá định lượng các toán tử tách biên Sobel, Prewitt, Laplacian of Gaussian (LoG) và giải thuật Canny đa tầng trên tập ảnh mẫu chuẩn."
  en: "Experimental framework evaluating and benchmarking Sobel, Prewitt, Laplacian of Gaussian, and multi-stage Canny edge operators on benchmark vision datasets."
thumbnail: "images/projects/cv-thumb.svg"
gallery:
  - "images/projects/cv-thumb.svg"
technologies:
  - "Python"
  - "OpenCV"
  - "NumPy"
  - "Matplotlib"
links:
  github: "https://github.com/Trqc-Nam"
timeline:
  startDate: "2026-10"
  completionDate: "2026-11"
  status: "completed"
academic:
  individualContribution:
    vi: "Cài đặt pipeline xử lý ảnh số bao gồm chuyển đổi thang xám (Grayscale), khử nhiễu bằng lọc Gauss, tính toán đạo hàm bậc nhất - bậc hai và khử cực đại cục bộ (Non-Maximum Suppression)."
    en: "Engineered digital image processing pipeline featuring grayscale transformations, Gaussian noise reduction, gradient vector computation, and non-maximum suppression."
  methodology:
    vi: "Sử dụng ma trận tích chập 2D rời rạc và phân tích phản ứng tần số cao của các mặt nạ lọc để đo lường độ bền vững trước nhiễu Gaussian và nhiễu muối tiêu."
    en: "Applied 2D discrete spatial convolutions and frequency analysis to measure operator resilience under Gaussian and salt-and-pepper noise distributions."
  results:
    vi: "Xác thực bằng đồ thị trực quan cho thấy toán tử Canny cho tỷ lệ tách biên chính xác vượt trội nhờ cơ chế ngưỡng kép (Hysteresis Thresholding)."
    en: "Demonstrated through empirical visualizations that Canny hysteresis thresholding yields superior continuous boundary preservation."
  limitations:
    vi: "Chưa áp dụng các mô hình học sâu hiện đại (như HED hay RCF) do giới hạn tài nguyên tính toán ban đầu."
    en: "Constrained to classical spatial operators; deep edge detectors (e.g., HED, RCF) reserved for subsequent research phases."
---

### Mục tiêu học thuật / Academic Focus

Hiểu rõ các nguyên lý toán học đằng sau quá trình biến đổi ảnh không gian hai chiều trước khi bước vào các mô hình mạng nơ-ron học sâu thị giác máy tính.
