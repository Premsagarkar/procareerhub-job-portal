# ProCareerHub – Premium Job Portal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Swiper.js](https://img.shields.io/badge/Swiper.js-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**ProCareerHub** is a responsive, modern front-end job portal web application crafted with semantic HTML5, modern CSS3, and vanilla JavaScript. It delivers an intuitive, visually polished career discovery experience connecting job seekers with leading employers across global tech and business ecosystems.

---

## 🌟 Key Features

- **Dynamic Hero & Advanced Search Filter:**
  - Multi-parameter search interface allowing filtering by job titles, keywords, target locations (New York, London, Tokyo, San Francisco, Berlin), and industries (Technology, Finance, Healthcare, Marketing).
  - Elegant focus effects and customized styling for select dropdowns.

- **Featured Job Opportunities:**
  - Categorized job listing cards displaying job badges (`Remote`, `Full-time`, `Contract`), salary brackets, required education, and locations.
  - Interactive job type pill filters (`All Jobs`, `Remote`, `Full-time`, `Part-time`, `Contract`) with dynamic active states.
  - Interactive cards with subtle accent hover animations and shadow elevations.

- **Top Employers Carousel:**
  - Responsive multi-slide carousel powered by **Swiper.js** showcasing leading company profiles, star ratings, and open position counts with autoplay and pagination.

- **Interactive Lottie Micro-Animations:**
  - Feature highlights integrated with modern DotLottie vector animations illustrating streamlined applications, verified employers, and career growth resources.

- **Candidate Testimonials & Social Proof:**
  - Touch-friendly testimonial slider featuring verified candidate reviews, star ratings, and career transition stories.

- **Responsive & Modern Navigation:**
  - Sticky glassmorphic navbar with dynamic backdrop blur and scroll-triggered elevation.
  - Animated hamburger menu with smooth slide-out mobile drawer.

- **Performance & Scroll Animations:**
  - Scroll-triggered reveal animations utilizing pure JavaScript coordinate calculations without heavy external animation libraries.

---

## 📸 Screenshots & UI Preview

> *Tip: Add your project screenshots to an `assets/` or `screenshots/` directory to display them below.*

| Desktop View | Mobile View |
|:---:|:---:|
| ![Hero & Search Section](https://via.placeholder.com/600x340/3b82f6/ffffff?text=ProCareerHub+Desktop+Hero) | ![Mobile Responsive Navigation](https://via.placeholder.com/300x500/1e293b/ffffff?text=Mobile+View) |

| Featured Opportunities | Top Employers Slider |
|:---:|:---:|
| ![Featured Job Cards](https://via.placeholder.com/600x340/ffffff/1e293b?text=Featured+Jobs+Grid) | ![Swiper Carousel](https://via.placeholder.com/600x340/8b5cf6/ffffff?text=Companies+Slider) |

---

## 🛠️ Technology Stack

| Category | Technologies & Libraries |
|---|---|
| **Structure** | Semantic HTML5 |
| **Styling** | Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Keyframes) |
| **Scripting** | Pure Vanilla JavaScript (ES6+) |
| **Typography** | Google Fonts (*Inter*, *Plus Jakarta Sans*) |
| **Iconography** | Font Awesome 7.0 CDN |
| **Sliders & Carousels** | Swiper.js v8 |
| **Micro-Animations** | DotLottie Web Component (`@lottiefiles/dotlottie-wc`) |

---

## 📁 Project Structure

```text
Job-Portal/
├── index.html       # Primary HTML document & page structure
├── styles.css       # Complete stylesheet (CSS variables, layout, components, responsiveness)
├── app.js          # JavaScript logic (carousel initialization, mobile nav, scroll effects)
├── .gitignore       # Git ignore rules for clean repository hygiene
└── README.md        # Comprehensive project documentation
```

---

## 🚀 Getting Started

No compilation, bundler, or complex runtime environment is required. You can run this project locally in seconds.

### Prerequisites

All you need is a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave, etc.).

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/procareerhub-job-portal.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd procareerhub-job-portal
   ```

3. **Launch the application:**
   - **Option A (Direct):** Double-click `index.html` or open it with your browser.
   - **Option B (VS Code Live Server - Recommended):** Right-click `index.html` and select **"Open with Live Server"**.
   - **Option C (Local Python Server):**
     ```bash
     # Python 3
     python -m http.server 3000
     ```
     Then open `http://localhost:3000` in your browser.
   - **Option D (Node / npx serve):**
     ```bash
     npx serve .
     ```

---

## 🎨 Customization Guide

- **Color Palette & Theme Tokens:** Customize the CSS variables in [styles.css](file:///styles.css) under the `:root` pseudo-class (e.g., `--primary`, `--secondary`, `--accent`, `--dark`).
- **Job Listings:** Update or add new job cards in `index.html` inside `<div class="jobs-grid">`.
- **Company Profiles & Testimonials:** Add or update slide cards in the respective `<div class="swiper-wrapper">` elements in `index.html`.

---

## 🗺️ Roadmap & Future Enhancements

- [ ] Complete Job Search filter functionality with live query matching
- [ ] User authentication (Candidate and Recruiter portal login/signup modals)
- [ ] Resume upload and applicant tracking system (ATS) preview
- [ ] Bookmarking / Saved Jobs functionality using `localStorage`
- [ ] Dark / Light mode toggle
- [ ] Backend API integration (Node.js/Express, Firebase, or Supabase)

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

- **Prem C. Sagarkar**
- GitHub: [@Premsagarkar](https://github.com/Premsagarkar)
- LinkedIn: [ Prem Sagarkar](https://www.linkedin.com/in/prem-sagarkar-59037538a/)
