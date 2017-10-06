# US Immigration

## The Project

The goal of the US Immigration data visualizer is to show the flow of
immigrants to the United States by decade since 1820. The data used was
sourced from the US census.

The project must be completed in 4 days.

## Features

* Users can scroll over circle placed on a world map representing that nation.
On mouseover a popup div appears rendering the number of immigrants who have
immigranted to the United States since 1820.

* The visualization involves a d3 path rendered from the nation of origin to
a Star Polygon placed at the center of the United States.

### Technologies
* d3.js - A javascript library for manipulating document with data.
* mapbox API - A location data platform designed specifically to build rich
maps.
* Vanilla javascript
* Webpack for bundling the scripts

## MVP

![Wireframes](https://github.com/SSJ6Porfy/US-Immigration-Visualizer/blob/master/docs/1820.1.png)


Coordinates between countries will render a series of dots representing
a rate of 25,000 immigrants per dot flow on a path towards the US.  
The more immigrants, the higher the speed of
the dots. Countries with a larger number will
have a noticeably higher rate.

Users will have an interactive experience by using the mouse to scroll
which decade the user wants to see with rate changing depending on the data.

![Wireframes](https://github.com/SSJ6Porfy/US-Immigration-Visualizer/blob/master/docs/1820.2.png)

## Timeline

### Weekend

* Mine US census for immigration information by country
* Learn D3 library and implementation
* Learn Mapbox Api

### Day 1

* Build Out map with Mapbox and style.
* Render plots for countries based on Coordinates.

### Day 2

* Build logic for rendering dot flows on path based on a rate of 25,000
immigrants per dot.

### Day 3

* Load data on map

### Day 4

* Add scrolling feature for change in decade.  
