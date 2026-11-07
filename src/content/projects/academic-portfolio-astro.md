---
id: "academic-portfolio-astro"
featured: true
published: true
category: "software-engineering"
title:
  vi: "Hệ thống Portfolio Học thuật & Quản trị Nội dung Không chi phí"
  en: "Zero-Cost Academic Portfolio & Content Management Architecture"
description:
  vi: "Kiến trúc website học thuật song ngữ tĩnh hiệu năng cao, tích hợp quản lý nội dung Git-based (CMS) và tự động triển khai qua GitHub Actions."
  en: "A high-performance bilingual static academic portfolio with Git-based CMS content authoring and automated GitHub Actions CI/CD deployment."
thumbnail: "images/projects/portfolio-thumb.svg"
gallery:
  - "images/projects/portfolio-thumb.svg"
technologies:
  - "Astro"
  - "TypeScript"
  - "CSS3"
  - "GitHub Actions"
  - "Sveltia CMS"
links:
  github: "https://github.com/Trqc-Nam/truong-quoc-nam-portfolio"
  demo: "https://Trqc-Nam.github.io/truong-quoc-nam-portfolio/"
timeline:
  startDate: "2026-11"
  completionDate: "2026-11"
  status: "completed"
academic:
  individualContribution:
    vi: "Đảm nhận toàn bộ chu trình kỹ thuật: thiết kế kiến trúc thông tin, mô hình dữ liệu Zod, phong cách thiết kế học thuật tối giản, hệ thống song ngữ và quy trình triển khai an toàn không để lộ secret."
    en: "Single-handedly engineered the information architecture, Zod content schemas, minimalist academic design system, bilingual routing, and zero-leak credential deployment pipeline."
  methodology:
    vi: "Áp dụng phương pháp Static Site Generation (SSG) với Astro nhằm loại bỏ hoàn toàn tải phía client; cấu hình biến môi trường và base path thích ứng cho GitHub Pages."
    en: "Employed Astro Static Site Generation (SSG) eliminating client-side framework overhead; configured dynamic base paths for resilient GitHub Pages subpath hosting."
  results:
    vi: "Website đạt tốc độ tải trang gần như tức thì, chi phí vận hành 0 VND trọn đời và giao diện CMS trực quan hoạt động trực tiếp qua GitHub REST API."
    en: "Near-instantaneous TTFB delivery, guaranteed 0 VND ongoing cost, and an intuitive client-side Git CMS writing cleanly through authenticated GitHub REST API."
  limitations:
    vi: "Thời gian cập nhật bài viết mới phụ thuộc vào thời gian chạy của GitHub Actions (khoảng 60-90 giây sau khi bấm lưu)."
    en: "Live content propagation is subject to GitHub Actions build time (~60-90 seconds after publishing)."
---

### Tổng quan kiến trúc / Architectural Overview

Hệ thống được xây dựng nhằm đáp ứng mục tiêu lưu trữ toàn bộ hành trình học tập, nghiên cứu và các công bố khoa học của sinh viên chuyên ngành Khoa học Máy tính tại UIT – ĐHQG-HCM. Thay vì sử dụng các mẫu giao diện lập trình viên đại trà có sẵn hoặc phụ thuộc vào cơ sở dữ liệu đắt đỏ, dự án được thiết kế theo chuẩn mực kỹ thuật hệ thống hướng dữ liệu tĩnh.

Mọi nội dung đều được xem là mã nguồn và lưu trữ an toàn trong Git repository, đảm bảo tính toàn vẹn dữ liệu, khả năng khôi phục lịch sử thay đổi (version control) và độc lập hoàn toàn khỏi bất kỳ nhà cung cấp dịch vụ máy chủ trả phí nào.
