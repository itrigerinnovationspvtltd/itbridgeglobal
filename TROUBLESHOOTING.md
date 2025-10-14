# Troubleshooting Guide

## Common Issues and Solutions

### Tailwind CSS v4 Configuration

This project uses **Tailwind CSS v4** (latest version), which has a different configuration approach compared to v3.

#### ✅ What's Different in v4

1. **No `tailwind.config.js` file**: Tailwind v4 uses CSS-based configuration with the `@theme` directive
2. **New PostCSS plugin**: Uses `@tailwindcss/postcss` instead of the old `tailwindcss` plugin
3. **CSS variables**: Custom theme values are defined using CSS custom properties in `src/index.css`

#### Configuration Files

**postcss.config.js:**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**src/index.css:**
```css
@import "tailwindcss";

@theme {
  --color-primary-orange: #FF8C42;
  --color-primary-red: #DC143C;
  --color-primary-green: #7CB342;
  --color-primary-teal: #00B496;
  
  --font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### Common Errors

#### Error: "module is not defined in ES module scope"

**Solution:** Make sure your config files use ES module syntax (`export default`) not CommonJS (`module.exports`) since package.json has `"type": "module"`.

#### Error: "tailwindcss directly as a PostCSS plugin"

**Solution:** This happens when using Tailwind v4 with the old configuration. Make sure:
1. You have `@tailwindcss/postcss` installed
2. Your `postcss.config.js` uses `'@tailwindcss/postcss'` not `'tailwindcss'`

#### Styles Not Applying

**Solution:**
1. Make sure `src/index.css` has `@import "tailwindcss";` at the top
2. Verify the dev server is running without errors
3. Check browser console for CSS loading errors
4. Clear browser cache and hard reload (Cmd/Ctrl + Shift + R)

#### Error: "Cannot apply unknown utility class `hover:bg-opacity-90`"

**Solution:** Tailwind CSS v4 uses different opacity syntax. Replace:
- ❌ `hover:bg-opacity-90` 
- ✅ `hover:bg-primary-teal/90`

Other opacity examples:
- `bg-red-500/50` (50% opacity)
- `bg-blue-500/75` (75% opacity)
- `text-black/60` (60% opacity)

#### Build Errors

If you encounter build errors:

```bash
# Clean and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

### Development Server Issues

#### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or run on a different port
npm run dev -- --port 3000
```

#### Server Not Starting

1. Check Node.js version (recommend v18 or higher)
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Reinstall dependencies: `npm install`

### Custom Color Not Working

If your custom colors aren't working:

1. **Check `src/index.css`** - Make sure colors are defined in `@theme` block:
   ```css
   @theme {
     --color-primary-teal: #00B496;
   }
   ```

2. **Use in components** - Reference with the `primary-` prefix:
   ```jsx
   <div className="bg-primary-teal text-white">
   ```

### Hot Module Replacement (HMR) Issues

If changes aren't reflecting:

1. Hard reload browser (Cmd/Ctrl + Shift + R)
2. Restart dev server
3. Check for syntax errors in console

### Production Build Issues

#### Build Fails

```bash
# Clean build
rm -rf dist
npm run build
```

#### Build Succeeds but Site Broken

1. Check `base` path in `vite.config.js`
2. Verify all assets are in `public/` folder
3. Test locally: `npm run preview`

### Browser Compatibility

If the site doesn't work in older browsers:

1. This project uses modern React 19 and ES modules
2. Supported browsers:
   - Chrome/Edge (latest 2 versions)
   - Firefox (latest 2 versions)
   - Safari (latest 2 versions)
   - Mobile browsers (iOS 15+, Android Chrome)

### Image Loading Issues

If images don't load:

1. Check image paths are correct (use `/` for public folder)
2. Verify images are in `public/` folder
3. Use relative paths from `public/`: `/images/logo.png`

### Form Submission Not Working

The contact form currently logs to console. To connect it:

1. Use EmailJS, Netlify Forms, or custom API
2. See `CUSTOMIZATION.md` for integration examples

### Deployment Issues

#### Vercel/Netlify Deployment

1. Make sure build command is `npm run build`
2. Set publish directory to `dist`
3. Check environment variables are set
4. Verify Node.js version in deployment settings

#### Routes Not Working After Deployment

Add redirect rules for SPA routing:

**Netlify** - Create `public/_redirects`:
```
/* /index.html 200
```

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Performance Issues

If the site feels slow:

1. Optimize images (compress, WebP format)
2. Check bundle size: `npm run build` and inspect `dist/`
3. Use lazy loading for images
4. Consider code splitting for large pages

### Getting Help

1. Check [Tailwind CSS v4 docs](https://tailwindcss.com/docs)
2. Check [Vite documentation](https://vitejs.dev)
3. Check [React documentation](https://react.dev)
4. Look at browser console for errors
5. Check terminal for build errors

### Useful Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for linting errors
npm run lint

# Kill dev server
pkill -f vite

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json && npm install

# Check package versions
npm list tailwindcss @tailwindcss/postcss
```

## Still Having Issues?

1. Check if you have the latest code
2. Make sure all files are saved
3. Restart your IDE/editor
4. Clear browser cache
5. Try in incognito/private mode
6. Check Node.js version: `node --version` (should be v18+)

---

**Note:** This project uses Tailwind CSS v4 with the latest modern configuration. If you prefer Tailwind v3, you'll need to downgrade and reconfigure. See the git history for the v3 configuration.

