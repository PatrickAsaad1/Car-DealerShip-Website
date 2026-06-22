<div align="center">

<br />

```
 ██████╗ █████╗ ██████╗     ██████╗ ███████╗ █████╗ ██╗     ███████╗██████╗ ███████╗██╗  ██╗██╗██████╗
██╔════╝██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██╔════╝██║  ██║██║██╔══██╗
██║     ███████║██████╔╝    ██║  ██║█████╗  ███████║██║     █████╗  ██████╔╝███████╗███████║██║██████╔╝
██║     ██╔══██║██╔══██╗    ██║  ██║██╔══╝  ██╔══██║██║     ██╔══╝  ██╔══██╗╚════██║██╔══██║██║██╔═══╝
╚██████╗██║  ██║██║  ██║    ██████╔╝███████╗██║  ██║███████╗███████╗██║  ██║███████║██║  ██║██║██║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝
```

### **AUTH SYSTEM** — Premium Car Dealership Platform

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

<br />

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Pages](https://img.shields.io/badge/Pages-5-orange?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Mobile_Ready-Yes-success?style=for-the-badge)
![Client Side](https://img.shields.io/badge/Client_Side-100%25-blueviolet?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Zero_Frameworks-Pure_Vanilla-yellow?style=for-the-badge)

<br />

> **A fully-featured, client-side authentication system for a premium car dealership web platform.**
> Clean dark UI. Bulletproof validation. Seamless multi-page user flow.

<br /> 

---

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages Breakdown](#-pages-breakdown)
- [Validation Rules](#-validation-rules)
- [Getting Started](#-getting-started)
- [Responsive Design](#-responsive-design)
- [License](#-license)

---

## 🔍 Overview

The **Car Dealership Auth System** is a complete, production-style authentication UI built entirely with **HTML, CSS, and Vanilla JavaScript** — no frameworks, no dependencies, no bloat.

It covers the full user journey:

- ✅ Account creation via **Sign Up**
- ✅ Secure access via **Login**
- ✅ Password recovery via **OTP verification**
- ✅ Password reset via **Change Password**

Every page shares a single, unified `style.css` and `auth.js` — keeping the codebase clean, modular, and scalable. The UI uses a **dark glassmorphism aesthetic** with full-bleed background imagery, perfectly fitting a high-end automotive brand.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Full Auth Flow** | Login → Signup → OTP → Reset — every step covered |
| 🧠 **Smart Validation** | Real-time client-side input validation with descriptive feedback |
| 👁️ **Password Visibility Toggle** | Eye icon toggle on all password fields via Font Awesome |
| 🎨 **Glassmorphism UI** | Dark semi-transparent cards with `backdrop-filter: blur()` |
| 📱 **Fully Responsive** | Mobile-first breakpoints with `@media (max-width: 480px)` |
| ⚡ **Zero Dependencies** | Pure HTML/CSS/JS — no React, no Vue, no jQuery |
| 🔀 **Page Router** | Single `Check()` function auto-detects the current page and routes validation |
| 🚦 **Visual Feedback** | Input underline turns red on error, green on success — instantly |
| ⏱️ **Auto Redirect** | OTP success and Send OTP success auto-redirect after 2 seconds |
| 🧩 **Shared Codebase** | One `auth.js` and one `style.css` power all 5 pages |

---

## 📄 Pages Breakdown

### 🔑 `Login.html`
The main entry point. Users authenticate with their **Username** and **Password**.
Includes a "Forgot Password?" link routing to `SendOTP.html` and a "Register" link to `Signup.html`.

---

### 📝 `Signup.html`
New user registration form collecting **Email**, **Username**, and **Password**.
Validates all three fields independently with contextual error messaging.

---

### 📨 `SendOTP.html`
Password recovery step 1. Users submit their **Email** and **Username** to trigger an OTP.
On success, auto-redirects to `OTP.html` after **2 seconds**.

---

### 🔢 `OTP.html`
Password recovery step 2. Users enter the **6-digit OTP code** sent to their email.
On correct entry, auto-redirects to `ChangePass.html` after **2 seconds**.

---

### 🔒 `ChangePass.html`
Final step. Users enter and confirm their **new password**.
Both fields are validated for match, length, and completeness before submission.

---

## ✅ Validation Rules

### Username
| Rule | Value |
|---|---|
| Minimum length | 3 characters |
| Maximum length | 31 characters |
| Required | Yes |

### Password
| Rule | Value |
|---|---|
| Minimum length | 8 characters |
| Maximum length | 63 characters |
| Required | Yes |
| Match check (ChangePass) | Must equal Confirm Password |

### Email
| Rule | Value |
|---|---|
| Must contain | `@` and `.` |
| Required | Yes |

### OTP Code
| Rule | Value |
|---|---|
| Type | 6-digit numeric string |
| Match | Must equal the issued OTP |

> All validation errors update the `#action` paragraph and highlight the relevant input underline in **red**. On success, underlines turn **green**.

---

## 🚀 Getting Started

### Prerequisites

No build tools. No installs. Just a browser.

```
✔ A modern browser (Chrome, Firefox, Edge, Safari)
✔ A local server (recommended) — VS Code Live Server works perfectly
✔ Your background images placed inside /Assets/
```

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/Car-DealerShip-Website.git
```

**2. Add your assets**
```
Place the following images in the /Assets/ folder:
  - Cars.png
  - SignUp_Background.png
  - OTP.jpg
  - SendOTP.jpeg
```

**3. Launch**
```
Open Login.html with VS Code Live Server
  → Right-click Login.html → "Open with Live Server"
```

> ⚠️ Opening HTML files directly via `file://` may cause CSS `@import` to not load in some browsers. Always use a local server.

---

## 📱 Responsive Design

The layout is fully adaptive using a single CSS `@media` breakpoint:

```css
@media (max-width: 480px) {
  /* All boxes scale to 90% width */
  /* Font sizes reduce gracefully */
  /* Buttons stretch to full width */
  /* Eye icon repositions correctly */
}
```

| Screen | Behavior |
|---|---|
| **Desktop** (> 480px) | Fixed 380px card, centered on screen |
| **Mobile** (≤ 480px) | 90% width card, compact padding, full-width buttons |

---

## 🏗️ Architecture Notes

```
┌─────────────────────────────────────────────────────┐
│                 DESIGN DECISIONS                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ① One stylesheet for all pages                    │
│     → BEM-inspired class naming per page           │
│     → Shared utility classes (line, action, etc.)  │
│                                                     │
│  ② One JS file for all pages                       │
│     → getCurrentPage() detects the active page     │
│     → Check() routes to the correct validator      │
│     → setupPasswordToggles() auto-binds all eyes   │
│                                                     │
│  ③ Visual feedback over alerts                     │
│     → No browser alert() calls                     │
│     → Inline #action message + color-coded lines   │
│                                                     │
│  ④ Progressive redirect UX                         │
│     → 2-second delay on success before redirect    │
│     → User sees success state before leaving       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 📜 License

```
MIT License — Copyright (c) 2024 Patrick

Permission is granted to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of this software freely.

Full license text in the LICENSE file.
```

---

<div align="center">

<br />

**If this project helped you or impressed you — drop a ⭐ on the repo.**

<br />

![Made with HTML](https://img.shields.io/badge/Made_with-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Made with CSS](https://img.shields.io/badge/Made_with-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Made with JS](https://img.shields.io/badge/Made_with-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
