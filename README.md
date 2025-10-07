# Grand Canyon Trip 2025 Itinerary

An interactive trip itinerary web app for a Grand Canyon area adventure from October 12-21, 2025.

## Features

- 📅 **Day-by-day itinerary** with accommodations and travel details
- 🌤️ **Live weather forecasts** for each location using Open-Meteo API
- 🚗 **Drive time estimates** between destinations
- 🎯 **Activity recommendations** for each location
- 📱 **Responsive design** that works on desktop, tablet, and mobile
- 🗺️ **Interactive navigation** - jump to any day or location
- ⭐ **Smooth scrolling** with automatic highlighting

## Trip Overview

- **Grand Canyon** - Maswik Lodge
- **Amangiri Resort** - Luxury desert experience
- **Bryce Canyon** - Clear Sky Resorts glamping
- **Lake Powell** - Under Canvas glamping
- **Las Vegas** - Shows and entertainment

## How to Use

### View Locally

1. Open `index.html` in your web browser
2. Navigate using the sidebar menu (by day or by location)
3. Weather updates automatically on page load

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload these files to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to repository Settings → Pages
4. Select the main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Quick Deploy Commands

```bash
cd gc-trip-app
git init
git add .
git commit -m "Initial commit: Grand Canyon trip itinerary"
git branch -M main
git remote add origin https://github.com/yourusername/gc-trip-2025.git
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **Vanilla JavaScript** - No dependencies, fast loading
- **Open-Meteo API** - Free weather forecasts (no API key required)

## Weather Data

Weather forecasts are fetched from [Open-Meteo](https://open-meteo.com/), a free weather API that doesn't require an API key. Forecasts are available up to 16 days in advance.

## Customization

### Update Trip Data

Edit the `tripData` array in `script.js` to modify:
- Locations and accommodations
- Activities and recommendations
- Coordinates for weather data
- Drive times

### Styling

Modify CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #d84315;
    --secondary-color: #ff6f43;
    --accent-color: #ffa726;
    /* ... */
}
```

## To-Do Items

- [ ] Cancel Bryce on night of 14th
- [ ] Decide place to stay on 19th
- [ ] Book for 19th
- [ ] Book for Vegas on 20th

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Personal use project for trip planning.
