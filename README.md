# Accredian Clone Project

### Live Demo: [accredianclonefrontendvercel.vercel.app](https://accredianclonefrontendvercel.vercel.app/) (Clone made by me)

### Backend Repository: [github.com/darshankardil-create/accredian_clone_backend](https://github.com/darshankardil-create/accredian_clone_backend)

###   Made clones of the following pages: (Original)
1. [Accredian Enterprise](https://enterprise.accredian.com/)
2. [Accredian About Us](https://accredian.com/About)
3. [Accredian Blog](https://blog.accredian.com/)


---

## 🛠️ Approach Taken

* **Framework & Architecture**: Built with **Next.js** using the **App Router** paradigm. It strategically balances Client and Server Components to maximize performance and SEO while maintaining high interactivity.
* **Component-Driven Design**: Features a modular architecture. UI elements like `NavDropdown`, `MobileAccordion`, and `LeadForm` are isolated as reusable components to ensure design consistency across all pages.
* **Responsive UI**: Developed with a **mobile-first** philosophy. I utilized **Tailwind CSS** and fine-tuned inline styles to provide a fluid experience across all screen sizes.
* **Dynamic Data Handling**: Complex sections (like the "Programs" footer) are powered by organized data structures and mapped arrays, allowing for scalable and easily maintainable layouts.
* **Lead Capture Backend**: A dedicated **Node.js & Express** server manages form submissions, ensuring secure data persistence in **MongoDB** and automated notifications via **Nodemailer**.

### 📂 Directory Structure
The project follows a clean and modular directory structure to separate concerns between different pages and their specific components:

```text
└── ./
    ├── app
    │   ├── about
    │   │   ├── components
    │   │   │   ├── banner.jsx
    │   │   │   ├── footer.jsx
    │   │   │   ├── navbar.jsx
    │   │   │   ├── team.jsx
    │   │   │   └── vision.jsx (and more...)
    │   │   ├── Appcompo.jsx
    │   │   └── page.jsx
    │   ├── blog
    │   │   ├── components
    │   │   │   ├── CategoriesSection.jsx
    │   │   │   ├── featurepost.jsx
    │   │   │   ├── herosection.jsx
    │   │   │   └── lastarticle.jsx (and more...)
    │   │   ├── mainApp.jsx
    │   │   └── page.jsx
    │   ├── components
    │   │   └── landingpage
    │   │       ├── Accredianedge.jsx
    │   │       ├── hero.jsx
    │   │       ├── LeadForm.jsx
    │   │       └── testimonial.jsx (and more...)
    │   ├── appcomponent.jsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.jsx
    └── next.config.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/darshankardil-create/Accredian_Clone_FrontEnd.git
cd Accredian_Clone_FrontEnd
```

### 2. Backend Setup (Node.js & Express)
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

**Configure Environment Variables:**
Create a `.env` file in the `server` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```
> **Note:** For Gmail, you must use an **App Password** generated via your Google Account security settings.

**Start the server:**
```bash
npm start
```

### 3. Frontend Setup (Next.js)
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```

**Run the development server:**
```bash
npm run dev
```

---

## 🤖 AI Usage and Manual Fixes

### AI Usage

* Took help from Claude to structure the initial layout of the website

### Manual Adjustments

* Fixed z-index issues to ensure proper layering
* Corrected the layout positioning using fixed, hidden, and absolute values
* Made elements responsive using Tailwind CSS (max-[px]:, sm, md, lg)
* Added responsiveness using aspect ratio techniques
* Adjusted image sources by downloading and storing them locally
* Refined font sizes, font weights, and colors for better visual flow
* Implemented smooth scroll logic on the landing page with the navigation bar
* Added shadows using Tailwind CSS (shadow, shadow-md, shadow-lg)
* Improved transitions using `scroll-behavior: smooth`
* Handled toggle button logic for side menu and navigation bar using `useState`
* Built complete landing page scroll logic


---
# Lead Capture Form

This lead capture form opens when a user clicks key call-to-action buttons—such as "Enquire Now," "Contact Us," or "Schedule a 1-on-1 Call." The backend is built with Node.js, Express,Nodemailer and MongoDB, and it is deployed on Render. after a lead is submitted, the data is stored in MongoDB. For demonstration purposes, the email address is flexible; however, in a real-world scenario, the email ID will be hard-coded. In that case, whenever a user generates a lead, the form data will be stored in the MongoDB database, and the lead-generated email will be sent to the team.

## Key Features

- After a lead form is submitted, the data is stored in MongoDB.
- A lead-generated email is sent to the team’s email ID Optionally.
- backend tech stack:Node.js,Express,Mongodb,Mongoose,Nodemailer
- The app is deployed on Render for seamless hosting and easy scalability.
---

## 🔮 Improvements I Can Make If I Got More Time

If I got more time for this project, I could significantly improve it by integrating an LLM (AI). To achieve this, I can use Hugging Face, Ollama, LangChain, and Puppeteer. This would help users navigate based on their queries, retrieve all information from the webpage, and provide exactly the insights they need based on their query.
