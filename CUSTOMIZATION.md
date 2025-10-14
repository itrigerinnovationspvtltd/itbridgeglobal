# Customization Guide

This guide will help you customize the IT Bridge Global website to match your specific needs.

## 🎨 Branding & Colors

### Color Scheme

**This project uses Tailwind CSS v4** with CSS-based configuration. Edit `src/index.css` to change the color palette:

```css
@theme {
  --color-primary-orange: #FF8C42;    /* Change to your brand color */
  --color-primary-red: #DC143C;       /* Change to your brand color */
  --color-primary-green: #7CB342;     /* Change to your brand color */
  --color-primary-teal: #00B496;      /* Change to your brand color */
}
```

Use colors in components with the `primary-` prefix:
```jsx
<div className="bg-primary-teal text-white">
```

### Typography

The website uses **Inter** font. To change it:

1. Update `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

2. Update `src/index.css` in the `@theme` block:
```css
@theme {
  --font-family-sans: 'YourFont', system-ui, sans-serif;
}
```

### Logo

Replace the logo in the Navbar component (`src/components/Navbar.jsx`):

```jsx
// Current gradient logo
<div className="w-10 h-10 bg-gradient-to-br from-primary-orange via-primary-teal to-primary-green rounded-lg">
  <span className="text-white font-bold text-xl">IT</span>
</div>

// Replace with image
<img src="/logo.png" alt="Company Logo" className="h-10" />
```

## 📝 Content Updates

### Home Page

Edit `src/pages/Home.jsx`:

1. **Hero Section:**
   - Update headline text
   - Change hero image
   - Modify CTA buttons

2. **Services:**
   - Edit the `services` array
   - Update service descriptions
   - Change icons (from react-icons)

3. **Statistics:**
   - Update the `stats` array with your numbers

4. **Testimonials:**
   - Modify the `testimonials` array
   - Add real client reviews

### About Page

Edit `src/pages/About.jsx`:

1. **Company Story:**
   - Replace the story content
   - Update founding year and history

2. **Mission & Vision:**
   - Customize mission statement
   - Update vision statement

3. **Values:**
   - Edit the `values` array
   - Add/remove company values

4. **Team:**
   - Update the `team` array
   - Add real team photos and bios

5. **Achievements:**
   - Modify certifications and awards

### Services Page

Edit `src/pages/Services.jsx`:

1. **Service Listings:**
   - Update the `allServices` array
   - Modify service descriptions
   - Change features and technologies
   - Reference: https://itbridgeglobal.com/

2. **Process:**
   - Customize the `process` workflow steps

### Portfolio Page

Edit `src/pages/Portfolio.jsx`:

1. **Projects:**
   - Update the `projects` array
   - Add real project case studies
   - Include actual screenshots
   - Add project results/metrics

2. **Categories:**
   - Modify filter categories

### Contact Page

Edit `src/pages/Contact.jsx`:

1. **Contact Information:**
   - Update phone numbers
   - Change email addresses
   - Modify office address

2. **Map:**
   - Replace Google Maps embed URL with your location

3. **Social Links:**
   - Update social media URLs

Also update Footer (`src/components/Footer.jsx`):
- Contact details
- Social media links
- Quick links

## 🖼️ Images

### Replace Placeholder Images

The website currently uses Unsplash images. Replace them with your own:

1. Add images to `public/images/` folder
2. Update image sources in components:

```jsx
// From
<img src="https://images.unsplash.com/photo-..." />

// To
<img src="/images/your-image.jpg" />
```

### Optimize Images

Before adding images:
1. Compress images using TinyPNG or similar
2. Use WebP format for better performance
3. Provide multiple sizes for responsive images

## 🎭 Animations

### Modify Animations

Framer Motion animations can be customized in each page:

```jsx
// Change animation duration
transition={{ duration: 0.6 }}  // Change to 0.3, 1, etc.

// Change animation type
transition={{ type: 'spring', stiffness: 100 }}

// Change animation direction
initial={{ opacity: 0, y: 20 }}  // y: vertical, x: horizontal
```

### Disable Animations

To reduce motion for accessibility or preference:

```jsx
// Wrap in a config
const shouldAnimate = true; // Set to false to disable

<motion.div
  initial={shouldAnimate ? { opacity: 0 } : {}}
  animate={shouldAnimate ? { opacity: 1 } : {}}
>
```

## 📱 Responsive Design

### Breakpoints

Tailwind CSS breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Customize Layouts

Example of responsive grid:
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

## 🔧 Forms

### Contact Form Integration

Currently, the form logs to console. Integrate with:

1. **EmailJS:**
```bash
npm install @emailjs/browser
```

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send('service_id', 'template_id', formData, 'public_key')
    .then(() => alert('Message sent!'));
};
```

2. **Netlify Forms:**
```jsx
<form name="contact" method="POST" data-netlify="true">
  {/* form fields */}
</form>
```

3. **Custom API:**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};
```

## 🔍 SEO Optimization

### Meta Tags

Update `index.html` with your meta information:

```html
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your Description" />
<meta property="og:image" content="/og-image.jpg" />
```

### Dynamic Titles

Install react-helmet:
```bash
npm install react-helmet-async
```

Use in pages:
```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Page Title - IT Bridge Global</title>
  <meta name="description" content="Page description" />
</Helmet>
```

## 🌐 Analytics

### Google Analytics

1. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Google Tag Manager

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
```

## 🔐 Security

### Environment Variables

Store sensitive data in `.env`:

```env
VITE_API_KEY=your_api_key
VITE_ANALYTICS_ID=your_analytics_id
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

### Content Security Policy

Add CSP headers in your hosting configuration.

## 🚀 Performance Tips

1. **Lazy Load Images:**
```jsx
<img loading="lazy" src="..." alt="..." />
```

2. **Code Splitting:**
```jsx
const About = lazy(() => import('./pages/About'));
```

3. **Optimize Bundles:**
   - Remove unused dependencies
   - Use production build for deployment

## 📚 Additional Features

### Add Blog

1. Create `src/pages/Blog.jsx`
2. Add route in `App.jsx`
3. Use a headless CMS (Contentful, Strapi, etc.)

### Add Chat Widget

Integrate live chat:
- Tawk.to
- Intercom
- Crisp

### Add Newsletter

Integrate with:
- Mailchimp
- ConvertKit
- SendGrid

## 🆘 Need Help?

- Check React documentation: https://react.dev
- Tailwind CSS docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion/
- Vite documentation: https://vitejs.dev

For project-specific help, refer to the main README.md file.

