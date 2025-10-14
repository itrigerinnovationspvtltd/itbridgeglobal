# Deployment Guide

This guide covers various deployment options for the IT Bridge Global website.

## 📦 Build for Production

Before deploying, create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` folder.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel provides excellent support for Vite + React applications.

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

**Or deploy via GitHub:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### 2. Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Or deploy via Git:**
1. Push code to GitHub/GitLab/Bitbucket
2. Visit [netlify.com](https://netlify.com)
3. Import repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create an S3 bucket and enable static website hosting

3. Upload the `dist` folder contents to the bucket

4. Set up CloudFront distribution pointing to the S3 bucket

5. Update DNS records to point to CloudFront

### 5. Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Build and run:
```bash
docker build -t itbridge-global .
docker run -p 80:80 itbridge-global
```

## 🔧 Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🌐 Domain Configuration

After deployment:

1. Get the deployment URL from your hosting provider
2. Configure your custom domain DNS:
   - For Vercel/Netlify: Add CNAME record pointing to their provided URL
   - For CloudFront: Add CNAME to CloudFront distribution domain
3. Enable HTTPS (usually automatic with modern hosting)

## ✅ Pre-Deployment Checklist

- [ ] Update contact information (email, phone, address)
- [ ] Replace placeholder images with real ones
- [ ] Add real Google Maps embed
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test all forms and functionality
- [ ] Optimize images and assets
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure SEO meta tags
- [ ] Test on multiple devices and browsers
- [ ] Enable HTTPS
- [ ] Set up redirects (www to non-www or vice versa)

## 🔍 Performance Optimization

1. **Image Optimization:**
   - Use WebP format
   - Implement lazy loading
   - Use CDN for images

2. **Code Splitting:**
   - Already handled by Vite

3. **Caching:**
   - Configure proper cache headers
   - Use service workers (PWA)

4. **CDN:**
   - Use CloudFlare or similar CDN
   - Distribute assets globally

## 📊 Monitoring

Set up monitoring tools:

- **Google Analytics** - Track visitors and behavior
- **Google Search Console** - Monitor search performance
- **Sentry** - Error tracking
- **Lighthouse CI** - Performance monitoring

## 🆘 Troubleshooting

### Routes not working on refresh
Make sure your hosting supports SPA routing:
- Netlify: Add `_redirects` file with `/* /index.html 200`
- Vercel: Add `vercel.json` with rewrites configuration

### Assets not loading
Check the `base` configuration in `vite.config.js` matches your deployment path.

### Build fails
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Update dependencies: `npm update`
- Check Node.js version (recommended: v18 or higher)

