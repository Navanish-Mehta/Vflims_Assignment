# 🏠 EZ Labs Front-End Assignment

## 📖 Project Overview

This is a single-page responsive web application built using React.js.

The objective of this assignment is to recreate the Home Page design (as per the given Figma link) and integrate a functional contact form that connects to the provided API endpoint.

---

## 🎯 Objective

To evaluate understanding of:

- Responsive UI design
- API integration using POST method
- Form validation
- Attention to detail in layout and styling

---

## 🧰 Tech Stack

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel / Netlify
- **API Integration:** Fetch / Axios

---

## ✨ Features

- Pixel-perfect recreation of provided Figma design
- Fully responsive layout across desktop, tablet, and mobile
- Integrated contact form with live API
- Form validation for empty fields and invalid email formats
- "Form Submitted" message on successful response

---

## 🔗 API Integration

**Endpoint:** `https://vernanbackend.ezlab.in/api/contact-us/`

**Method:** POST

### Example Request:

```json
{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

### Success Response:

```json
{
  "id": 49,
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

---

## ⚙️ Validation Rules

- All input fields are required.
- Email must be valid.
- Form submission is blocked if validation fails.
- On success, show "Form Submitted" confirmation on screen.

---

## 🧪 Postman Dump

A manually created Postman dump is available in the root folder:

**File:** `/postman_dump.json`

It contains the API details, request body, headers, and expected responses.

### How to Import:

1. Open Postman application
2. Click **Import** button (top left)
3. Select **File** tab
4. Choose `postman_dump.json` from the project root
5. Click **Import**

The collection will appear in your Postman sidebar with the contact form endpoint ready to test.

### Example cURL:

```bash
curl -X POST https://vernanbackend.ezlab.in/api/contact-us/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "testuser@gmail.com",
    "phone": "908765498",
    "message": "This is a message"
  }'
```

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project folder
cd <project-folder>

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open the app at `http://localhost:5173`

---

## 🌍 Deployment

The project can be deployed on:

- **Vercel**

### Deployment Steps (Vercel):

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import project in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure build settings** (usually auto-detected):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

#### Configuration File

The project includes `vercel.json` with optimal settings:
- SPA routing configuration (all routes serve `index.html`)
- Asset caching headers for better performance
- Auto-detected build settings

**Note:** No environment variables are required for this project.
---

## 🧾 Deliverables

- ✅ Fully functional, responsive single-page web app
- ✅ Integrated contact form with API and validation
- ✅ Manual Postman dump (`postman_dump.json`)
- ✅ Deployed link and repository link for submission

---

## ✅ Pre-Deployment Checklist

Before deploying to Vercel, ensure:

- [ ] All dependencies are installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] No build errors or warnings
- [ ] Contact form API endpoint is accessible
- [ ] All images and assets are properly referenced
- [ ] Code is pushed to GitHub repository
- [ ] `vercel.json` configuration file exists

### Quick Build Test

```bash
# Test the build locally
npm run build

# Preview the production build
npm run preview
```

If the preview works correctly, your project is ready for Vercel deployment!

---

## 🧠 Notes

- No need to complete every section perfectly; focus on demonstrating a clean approach and understanding.
- Creativity (animations, color palette, UX improvements) is encouraged.
- Maintain consistent font, spacing, and overall look from the Figma reference.

---

## 📁 Project Structure

```
vfilms-app/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── ContactUs.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   └── main.jsx
├── postman_dump.json
├── README.md
└── package.json
```

---

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables are required for this project. The API endpoint is hardcoded in the ContactUs component.

---

## 📝 API Details

### Request Headers

```
Content-Type: application/json
```

### Required Fields

- `name` (string): User's full name
- `email` (string): Valid email address
- `phone` (string): Phone number
- `message` (string): Message content

### Response Codes

- `200 OK` - Successful submission
- `400 Bad Request` - Validation error or missing fields
- `500 Internal Server Error` - Server error

---

## 🐛 Troubleshooting

### Form not submitting?

- Check browser console for errors
- Verify API endpoint is accessible
- Ensure all required fields are filled
- Check network tab for request/response details

### Validation errors?

- Ensure email format is valid (e.g., `user@example.com`)
- All fields must be non-empty
- Check for any special characters that might cause issues

---

## 📞 Contact

For questions or issues, please contact the development team.

---

## 📄 License

This project is part of an assignment submission for EZ Labs.
