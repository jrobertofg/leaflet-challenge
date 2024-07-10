## leaflet-challenge
Earthquake and Tectonic Plates Map
This project visualizes recent earthquakes and tectonic plate boundaries on an interactive map using Leaflet and D3.js. The map allows users to toggle the visibility of tectonic plates and provides detailed information about each earthquake when clicked.

# Features
Interactive map displaying recent earthquakes with color-coded depth and magnitude
Toggle button to show or hide tectonic plate boundaries
Pop-up information for each earthquake, including location, magnitude, and depth
Legend explaining the color coding of earthquake depths
Technologies Used
Leaflet: An open-source JavaScript library for mobile-friendly interactive maps
D3.js: A JavaScript library for producing dynamic, interactive data visualizations
OpenStreetMap: A collaborative project to create a free editable map of the world
USGS Earthquake Hazards Program: Source of earthquake data

## Getting Started

# Prerequisites
A web browser (e.g., Chrome, Firefox, Safari)
# Installation
Clone this repository to your local machine:

# Copy code
git clone https://github.com/jrobertofg/leaflet-challenge
Open the project directory:


## Usage
The map will load automatically, displaying recent earthquake data.
Click on any earthquake marker to see detailed information about the event.
Click the "Show Tectonic Plates" button to toggle the visibility of tectonic plate boundaries on the map.
Code Overview
HTML (index.html)
Sets up the structure of the webpage, including the title, map container, and toggle button.
CSS (inline in index.html)
Styles the map container, legend, and title.
JavaScript (map.js)
Initializes the Leaflet map and adds a tile layer from OpenStreetMap.
Fetches earthquake data from the USGS Earthquake Hazards Program and adds it to the map.
Styles earthquake markers based on depth and magnitude, and binds pop-up information.
Adds a legend to the map to explain the color coding of earthquake depths.
Implements a toggle button to show or hide tectonic plate boundaries.



## Acknowledgements
Leaflet
D3.js
OpenStreetMap
USGS Earthquake Hazards Program
