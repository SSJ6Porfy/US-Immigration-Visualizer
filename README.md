# US Immigration

## The Project

The goal of the US Immigration data visualizer is to show the flow of
immigrants to the United States. The data used was sourced from the US census.

The project must be completed in 4 days.

## Features


![Wireframes](https://github.com/SSJ6Porfy/US-Immigration-Visualizer/blob/master/docs/1820.1.png)

* Users can scroll over circle placed on a world map representing that nation.
On mouseover a popup div appears rendering the number of immigrants who have
immigrated to the United States since 1820 by decade and the total.

* The visualization involves a d3 flowline path rendered from the nation of origin to a Star Polygon placed at the center of the United States.

![Wireframes](https://github.com/SSJ6Porfy/US-Immigration-Visualizer/blob/master/docs/1820.2.png)

### Technologies / Design

* mapbox API - A location data platform designed specifically to build rich
maps.
  * Used Mapbox API which is built on Mapbox's OpenMapStreet technologies and
  allow for a wider degree of customization. I personally chose and style the map background.  
  * The Mapbox API is fantastic and super simple to use.  Simply create an account, acquire a key and style your map in Mapbox's Mapbox Studio web app. Then publish a link that you place in the head of index.html.
  * To render the map on the DOM I used the mapbox-gl node package. Just install using npm and import "mapboxgl" to the script.   

* d3.js - A javascript library for manipulating document with data.
  * Implemented d3.js to render scalable vector graphics for a clean, sharp
  presentation that doesn't become pixelated by screen size.
  * First, I placed a transparent SVG over the entire map. Using SVG's viewBox
  params, created a coordinate system on within the SVG which allowed for a custom placement whether than simply feeding data through the Mapbox API.
  * Then I based on the coordinates, I parsed the data of a CSV coverted to JSON file can created both the circles and flowlines for each nation.
  * Lastly, On mouseover of a circle, another SVG would be render containing that nation's data.

* Vanilla javascript

* Webpack for bundling the scripts

## Todos

* Add legend for population size
* interactive scroll feature to select a specific decade and see just that decade's data
* Add more color to differentiate population movement. 
