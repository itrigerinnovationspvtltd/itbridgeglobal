# IT Bridge Global - Modern IT Services Website

A professional, modern 5-page website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design

The website features a clean, modern design with a vibrant color palette:
- **Primary Teal**: `#00B496`
- **Orange**: `#FF8C42`
- **Red**: `#DC143C`
- **Green**: `#7CB342`

## 📄 Pages

1. **Home** - Hero section, service highlights, company overview, testimonials, and CTA
2. **About Us** - Company story, mission & vision, values, team, and certifications
3. **Services** - Detailed listing of all IT services, process workflow, and benefits
4. **Portfolio** - Case studies and successful project showcases with filtering
5. **Contact** - Contact form, office information, map integration, and FAQ

## 🚀 Features

- ✨ Modern, responsive design (desktop, tablet, mobile)
- 🎭 Smooth animations with Framer Motion
- 🎨 Beautiful gradient effects and modern UI
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly structure
- 🔄 Smooth page transitions
- 📝 Contact form with validation
- 🗺️ Google Maps integration

## 🛠️ Tech Stack

- **React 19** - UI library (latest)
- **Vite 7** - Build tool (latest)
- **Tailwind CSS v4** - Utility-first CSS framework (latest)
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "/Users/amit/Downloads/Demo projects/ItBridgeGlobal"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
ItBridgeGlobal/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎯 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    orange: '#FF8C42',
    red: '#DC143C',
    green: '#7CB342',
    teal: '#00B496',
  },
}
```

### Content

- Update service offerings in `src/pages/Services.jsx`
- Modify team information in `src/pages/About.jsx`
- Add/edit portfolio projects in `src/pages/Portfolio.jsx`
- Update contact information in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 📝 License

This project is created for IT Bridge Global.

## 🤝 Support

For support, email info@itbridgeglobal.com or contact us through the website.
