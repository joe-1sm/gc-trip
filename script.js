// Trip itinerary data
const tripData = [
    {
        day: 1,
        date: "October 12, 2025",
        dayOfWeek: "Sunday",
        wakeUp: "Bellagio, Las Vegas",
        sleep: "Maswik Lodge, Grand Canyon",
        location: "Grand Canyon",
        confirmation: "20062939",
        coordinates: { lat: 36.0544, lon: -112.1401 },
        driveTime: "4.5 hours",
        driveFrom: "Las Vegas",
        activities: [
            { name: "South Rim Sunset", icon: "🌅", description: "Catch the breathtaking sunset at Mather Point or Yavapai Point" },
            { name: "Desert View Watchtower", icon: "🗼", description: "Visit this historic 70-foot stone tower with panoramic views" },
            { name: "Rim Trail Walk", icon: "🚶", description: "Easy walk along the rim with spectacular canyon views" },
            { name: "Visitor Center", icon: "ℹ️", description: "Get oriented and learn about the canyon's geology and history" }
        ]
    },
    {
        day: 2,
        date: "October 13, 2025",
        dayOfWeek: "Monday",
        wakeUp: "Maswik Lodge, Grand Canyon",
        sleep: "Amangiri",
        location: "Amangiri (Canyon Point, Utah)",
        coordinates: { lat: 37.0336, lon: -111.9841 },
        driveTime: "3 hours",
        driveFrom: "Grand Canyon",
        activities: [
            { name: "Sunrise at Grand Canyon", icon: "🌄", description: "Wake up early for an unforgettable sunrise over the canyon" },
            { name: "Amangiri Spa", icon: "💆", description: "Relax with world-class spa treatments in the desert" },
            { name: "Via Ferrata", icon: "🧗", description: "Guided climbing experience on the resort's private via ferrata" },
            { name: "Stargazing", icon: "⭐", description: "Incredible dark sky viewing in the Utah desert" }
        ]
    },
    {
        day: 3,
        date: "October 14, 2025",
        dayOfWeek: "Tuesday",
        wakeUp: "Amangiri",
        sleep: "Amangiri",
        location: "Amangiri (Canyon Point, Utah)",
        coordinates: { lat: 37.0336, lon: -111.9841 },
        activities: [
            { name: "Horseshoe Bend", icon: "🏜️", description: "15 min drive - iconic Colorado River meander viewpoint" },
            { name: "Antelope Canyon Tour", icon: "📸", description: "30 min drive - stunning slot canyon photography opportunity" },
            { name: "Desert Hikes", icon: "🥾", description: "Explore the otherworldly landscape around the resort" },
            { name: "Pool & Relaxation", icon: "🏊", description: "Enjoy the stunning pool carved into ancient rock" }
        ]
    },
    {
        day: 4,
        date: "October 15, 2025",
        dayOfWeek: "Wednesday",
        wakeUp: "Amangiri",
        sleep: "Clear Sky Resorts, Bryce Canyon",
        location: "Bryce Canyon",
        confirmation: "2345693574279",
        coordinates: { lat: 37.6283, lon: -112.1676 },
        driveTime: "2.5 hours",
        driveFrom: "Amangiri",
        activities: [
            { name: "Scenic Drive", icon: "🚗", description: "Beautiful drive through Utah's red rock country" },
            { name: "Sunset Point", icon: "🌇", description: "Watch the hoodoos glow at golden hour" },
            { name: "Rim Trail Preview", icon: "👀", description: "Get your first views of the amphitheater" },
            { name: "Stargazing Program", icon: "🔭", description: "Bryce is an International Dark Sky Park" }
        ]
    },
    {
        day: 5,
        date: "October 16, 2025",
        dayOfWeek: "Thursday",
        wakeUp: "Clear Sky Resorts, Bryce Canyon",
        sleep: "Clear Sky Resorts, Bryce Canyon",
        location: "Bryce Canyon",
        coordinates: { lat: 37.6283, lon: -112.1676 },
        activities: [
            { name: "Sunrise at Bryce Point", icon: "🌅", description: "The hoodoos are magical in morning light" },
            { name: "Queens Garden Trail", icon: "🥾", description: "Moderate 1.8-mile hike through the hoodoos" },
            { name: "Navajo Loop Trail", icon: "⛰️", description: "Dramatic descent into the amphitheater" },
            { name: "Inspiration Point", icon: "🎨", description: "Multiple viewpoints of the vast amphitheater" }
        ]
    },
    {
        day: 6,
        date: "October 17, 2025",
        dayOfWeek: "Friday",
        wakeUp: "Clear Sky Resorts, Bryce Canyon",
        sleep: "Under Canvas, Lake Powell",
        location: "Lake Powell",
        confirmation: "125182",
        coordinates: { lat: 37.0336, lon: -111.4803 },
        driveTime: "2 hours",
        driveFrom: "Bryce Canyon",
        activities: [
            { name: "Morning at Bryce", icon: "🌄", description: "Sunrise hike before departing" },
            { name: "Scenic Highway 12", icon: "🛣️", description: "One of America's most scenic drives" },
            { name: "Lake Powell Views", icon: "🏞️", description: "Arrive and explore the stunning lake vistas" },
            { name: "Glamping Setup", icon: "⛺", description: "Settle into your luxury tent" }
        ]
    },
    {
        day: 7,
        date: "October 18, 2025",
        dayOfWeek: "Saturday",
        wakeUp: "Under Canvas, Lake Powell",
        sleep: "Under Canvas, Lake Powell",
        location: "Lake Powell",
        coordinates: { lat: 37.0336, lon: -111.4803 },
        activities: [
            { name: "Boat Tour", icon: "🚤", description: "Explore the lake's incredible slot canyons by boat" },
            { name: "Kayaking", icon: "🛶", description: "Paddle through narrow canyon passages" },
            { name: "Horseshoe Bend (revisit)", icon: "📸", description: "25 min drive - different light than before" },
            { name: "Under Canvas Dining", icon: "🍽️", description: "Enjoy camp-style gourmet dining experience" }
        ]
    },
    {
        day: 8,
        date: "October 19, 2025",
        dayOfWeek: "Sunday",
        wakeUp: "Under Canvas, Lake Powell",
        sleep: "TBD - Zion or Las Vegas",
        location: "Transition Day",
        coordinates: { lat: 37.2982, lon: -113.0263 },
        activities: [
            { name: "Morning at Lake Powell", icon: "🌅", description: "Sunrise views over the lake" },
            { name: "Option: Drive to Zion", icon: "🗻", description: "2.5 hours - explore Zion National Park" },
            { name: "Option: Return to Vegas", icon: "🎰", description: "4.5 hours - back to Las Vegas" },
            { name: "Decision Time", icon: "🤔", description: "Booking needed for tonight's accommodation" }
        ]
    },
    {
        day: 9,
        date: "October 20, 2025",
        dayOfWeek: "Monday",
        wakeUp: "TBD",
        sleep: "Las Vegas (TBD)",
        location: "Las Vegas",
        coordinates: { lat: 36.1699, lon: -115.1398 },
        activities: [
            { name: "Arrive in Vegas", icon: "🎰", description: "Check into hotel" },
            { name: "Shows & Entertainment", icon: "🎭", description: "Catch a world-class Vegas show" },
            { name: "Fine Dining", icon: "🍽️", description: "Experience Vegas's culinary scene" },
            { name: "Booking Needed", icon: "⚠️", description: "Reserve hotel for tonight" }
        ]
    },
    {
        day: 10,
        date: "October 21, 2025",
        dayOfWeek: "Tuesday",
        wakeUp: "Las Vegas",
        sleep: "Travel Day",
        location: "Departure",
        coordinates: { lat: 36.1699, lon: -115.1398 },
        activities: [
            { name: "Final Morning in Vegas", icon: "🌅", description: "Last breakfast and check-out" },
            { name: "Travel Prep", icon: "✈️", description: "Head to airport for departure" },
            { name: "Trip Memories", icon: "📷", description: "Share photos and memories" }
        ]
    }
];

// Location mapping for navigation
const locations = {
    "Grand Canyon": [1],
    "Amangiri": [2, 3],
    "Bryce Canyon": [4, 5],
    "Lake Powell": [6, 7],
    "Transition Day": [8],
    "Las Vegas": [9],
    "Departure": [10]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    renderItinerary();
    setupScrollSpy();
    loadAllWeather();
});

// Render sidebar navigation
function renderNavigation() {
    const dayNav = document.getElementById('dayNav');
    const locationNav = document.getElementById('locationNav');

    // Render day navigation
    tripData.forEach(day => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#day-${day.day}`;
        a.textContent = `Day ${day.day} - ${day.dayOfWeek}`;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToDay(day.day);
        });
        li.appendChild(a);
        dayNav.appendChild(li);
    });

    // Render location navigation
    Object.keys(locations).forEach(location => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#day-${locations[location][0]}`;
        a.textContent = location;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToDay(locations[location][0]);
        });
        li.appendChild(a);
        locationNav.appendChild(li);
    });
}

// Render itinerary cards
function renderItinerary() {
    const itinerary = document.getElementById('itinerary');

    tripData.forEach(day => {
        const dayCard = createDayCard(day);
        itinerary.appendChild(dayCard);
    });
}

// Create a day card
function createDayCard(day) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.id = `day-${day.day}`;

    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML = `
        <div>
            <div class="day-title">Day ${day.day} - ${day.location}</div>
            <div class="day-date">${day.date} (${day.dayOfWeek})</div>
        </div>
    `;

    const content = document.createElement('div');
    content.className = 'day-content';

    // Location info
    const locationInfo = document.createElement('div');
    locationInfo.className = 'location-info';
    locationInfo.innerHTML = `
        <div class="info-item">
            <strong>🌅 Wake Up</strong>
            ${day.wakeUp}
        </div>
        <div class="info-item">
            <strong>😴 Sleep</strong>
            ${day.sleep}
        </div>
    `;
    content.appendChild(locationInfo);

    // Weather widget
    const weatherWidget = document.createElement('div');
    weatherWidget.className = 'weather-widget';
    weatherWidget.id = `weather-${day.day}`;
    weatherWidget.innerHTML = '<div class="weather-loading">Loading weather forecast...</div>';
    content.appendChild(weatherWidget);

    // Drive time
    if (day.driveTime) {
        const driveTime = document.createElement('div');
        driveTime.className = 'drive-time';
        driveTime.innerHTML = `
            <div class="drive-time-icon">🚗</div>
            <div class="drive-time-info">
                <div class="drive-time-label">Drive from ${day.driveFrom}</div>
                <div class="drive-time-duration">${day.driveTime}</div>
            </div>
        `;
        content.appendChild(driveTime);
    }

    // Activities
    if (day.activities && day.activities.length > 0) {
        const activities = document.createElement('div');
        activities.className = 'activities';
        activities.innerHTML = '<h3>🎯 Recommended Activities</h3>';

        const activityGrid = document.createElement('div');
        activityGrid.className = 'activity-grid';

        day.activities.forEach(activity => {
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';
            activityCard.innerHTML = `
                <h4>${activity.icon} ${activity.name}</h4>
                <p>${activity.description}</p>
            `;
            activityGrid.appendChild(activityCard);
        });

        activities.appendChild(activityGrid);
        content.appendChild(activities);
    }

    // Confirmation info
    if (day.confirmation) {
        const confirmationInfo = document.createElement('div');
        confirmationInfo.className = 'confirmation-info';
        confirmationInfo.innerHTML = `
            <strong>📋 Confirmation Number:</strong> ${day.confirmation}
        `;
        content.appendChild(confirmationInfo);
    }

    card.appendChild(header);
    card.appendChild(content);

    return card;
}

// Scroll to specific day
function scrollToDay(dayNumber) {
    const element = document.getElementById(`day-${dayNumber}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Setup scroll spy for navigation highlighting
function setupScrollSpy() {
    const dayCards = document.querySelectorAll('.day-card');
    const navLinks = document.querySelectorAll('.sidebar a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-140px 0px -50% 0px'
    });

    dayCards.forEach(card => observer.observe(card));
}

// Weather API integration using Open-Meteo (free, no API key needed)
async function loadWeatherForDay(day) {
    const widget = document.getElementById(`weather-${day.day}`);

    try {
        const { lat, lon } = day.coordinates;

        // Calculate the date for this specific day
        const tripDate = new Date(day.date);
        const today = new Date();
        const daysUntilTrip = Math.ceil((tripDate - today) / (1000 * 60 * 60 * 24));

        // If the date is more than 7 days out, show historical averages instead
        if (daysUntilTrip > 7) {
            await showHistoricalWeather(day, widget);
            return;
        }

        // Open-Meteo API (free, no key required)
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America/Denver`;

        const response = await fetch(url);
        const data = await response.json();

        // Find the right day in the forecast
        let dayIndex = daysUntilTrip;
        if (dayIndex < 0) dayIndex = 0;

        const temp_max = Math.round(data.daily.temperature_2m_max[dayIndex]);
        const temp_min = Math.round(data.daily.temperature_2m_min[dayIndex]);
        const precipitation = data.daily.precipitation_probability_max[dayIndex];
        const windSpeed = Math.round(data.daily.wind_speed_10m_max[dayIndex]);
        const weatherCode = data.daily.weather_code[dayIndex];

        const weatherIcon = getWeatherIcon(weatherCode);
        const weatherDesc = getWeatherDescription(weatherCode);

        widget.innerHTML = `
            <div class="weather-header">
                <div>
                    <div style="font-size: 1.1rem; margin-bottom: 0.5rem;">${day.location} Weather Forecast</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">${weatherDesc}</div>
                </div>
                <div class="weather-icon">${weatherIcon}</div>
            </div>
            <div style="display: flex; gap: 2rem; align-items: center;">
                <div class="weather-temp">${temp_max}°F</div>
                <div style="font-size: 1.2rem; opacity: 0.9;">Low: ${temp_min}°F</div>
            </div>
            <div class="weather-details">
                <div class="weather-detail">
                    <span class="weather-detail-label">Rain Chance</span>
                    <span class="weather-detail-value">${precipitation}%</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Wind</span>
                    <span class="weather-detail-value">${windSpeed} mph</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Forecast</span>
                    <span class="weather-detail-value">${daysUntilTrip}d out</span>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Weather fetch error:', error);
        widget.innerHTML = `
            <div class="weather-header">
                <div>
                    <div style="font-size: 1.1rem; margin-bottom: 0.5rem;">${day.location} Weather</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">Forecast unavailable</div>
                </div>
                <div class="weather-icon">🌤️</div>
            </div>
            <div style="opacity: 0.8; margin-top: 1rem;">
                Check weather closer to your trip date for accurate forecasts.
            </div>
        `;
    }
}

// Show historical weather data for dates beyond the 7-day forecast
async function showHistoricalWeather(day, widget) {
    try {
        const { lat, lon } = day.coordinates;
        const tripDate = new Date(day.date);

        // Get the same date from 2024 for historical reference
        const historicalDate = new Date(tripDate);
        historicalDate.setFullYear(2024);
        const formattedDate = historicalDate.toISOString().split('T')[0];

        // Fetch historical weather data
        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${formattedDate}&end_date=${formattedDate}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America/Denver`;

        const response = await fetch(url);
        const data = await response.json();

        const temp_max = Math.round(data.daily.temperature_2m_max[0]);
        const temp_min = Math.round(data.daily.temperature_2m_min[0]);
        const precipitation = Math.round(data.daily.precipitation_sum[0] * 100) / 100;
        const windSpeed = Math.round(data.daily.wind_speed_10m_max[0]);

        widget.innerHTML = `
            <div class="weather-header">
                <div>
                    <div style="font-size: 1.1rem; margin-bottom: 0.5rem;">${day.location} - Typical Weather</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">Historical data from Oct ${tripDate.getDate()}, 2024</div>
                </div>
                <div class="weather-icon">📊</div>
            </div>
            <div style="display: flex; gap: 2rem; align-items: center;">
                <div class="weather-temp">${temp_max}°F</div>
                <div style="font-size: 1.2rem; opacity: 0.9;">Low: ${temp_min}°F</div>
            </div>
            <div class="weather-details">
                <div class="weather-detail">
                    <span class="weather-detail-label">Precipitation</span>
                    <span class="weather-detail-value">${precipitation}"</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Wind</span>
                    <span class="weather-detail-value">${windSpeed} mph</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Status</span>
                    <span class="weather-detail-value">Historical</span>
                </div>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255,255,255,0.2); border-radius: 6px; font-size: 0.85rem;">
                ℹ️ Live forecast available 7 days before your trip
            </div>
        `;
    } catch (error) {
        console.error('Historical weather fetch error:', error);
        widget.innerHTML = `
            <div class="weather-header">
                <div>
                    <div style="font-size: 1.1rem; margin-bottom: 0.5rem;">${day.location} Weather</div>
                    <div style="font-size: 0.9rem; opacity: 0.9;">Typical October conditions</div>
                </div>
                <div class="weather-icon">🌤️</div>
            </div>
            <div style="opacity: 0.8; margin-top: 1rem; line-height: 1.6;">
                <strong>Expected conditions for mid-October:</strong><br>
                • Grand Canyon: 60-70°F days, 30-40°F nights<br>
                • Amangiri/Lake Powell: 70-80°F days, 40-50°F nights<br>
                • Bryce Canyon: 50-60°F days, 25-35°F nights<br>
                <br>
                Live forecast will be available 7 days before your trip.
            </div>
        `;
    }
}

// Load weather for all days
async function loadAllWeather() {
    for (const day of tripData) {
        if (day.coordinates) {
            await loadWeatherForDay(day);
            // Small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

// Get weather icon based on WMO weather code
function getWeatherIcon(code) {
    const icons = {
        0: '☀️',      // Clear sky
        1: '🌤️',     // Mainly clear
        2: '⛅',     // Partly cloudy
        3: '☁️',      // Overcast
        45: '🌫️',    // Fog
        48: '🌫️',    // Depositing rime fog
        51: '🌦️',    // Light drizzle
        53: '🌦️',    // Moderate drizzle
        55: '🌧️',    // Dense drizzle
        61: '🌧️',    // Slight rain
        63: '🌧️',    // Moderate rain
        65: '⛈️',     // Heavy rain
        71: '🌨️',    // Slight snow
        73: '🌨️',    // Moderate snow
        75: '❄️',     // Heavy snow
        77: '🌨️',    // Snow grains
        80: '🌦️',    // Slight rain showers
        81: '🌧️',    // Moderate rain showers
        82: '⛈️',     // Violent rain showers
        85: '🌨️',    // Slight snow showers
        86: '❄️',     // Heavy snow showers
        95: '⛈️',     // Thunderstorm
        96: '⛈️',     // Thunderstorm with hail
        99: '⛈️'      // Thunderstorm with heavy hail
    };
    return icons[code] || '🌤️';
}

// Get weather description based on WMO weather code
function getWeatherDescription(code) {
    const descriptions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Foggy',
        51: 'Light drizzle',
        53: 'Drizzle',
        55: 'Heavy drizzle',
        61: 'Light rain',
        63: 'Rain',
        65: 'Heavy rain',
        71: 'Light snow',
        73: 'Snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Light showers',
        81: 'Showers',
        82: 'Heavy showers',
        85: 'Light snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with hail',
        99: 'Severe thunderstorm'
    };
    return descriptions[code] || 'Partly cloudy';
}
