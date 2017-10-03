import React from "react";
import * as d3 from "d3";
import $ from "jquery";

class Immigration extends React.Component {
  constructor(props) {
    super(props);
    this.countrySpotGenerator = this.countrySpotGenerator.bind(this);
    this.countryCoordinates = this.countryCoordinates.bind(this);
  }

  countrySpotGenerator(arr) {
    arr.forEach((country) => {
      let [x, y] = country;
        d3.select("svg")
          .append("circle")
          .attr("r", 2)
          .attr("cx", x)
          .attr("cy", y)
          .attr("fill", "red");
    });
  }

  countryCoordinates() {
    const coordinates = [
      [0, 220],[30, 190],[-15, 265],[175, 110],[60,273],[47,273],[240,174]
    ];

    return coordinates;
  }

  render() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3NqNnBvcmZ5IiwiYSI6ImNqODg2N3o3ZjFoM20zM29hMmV1dmtvaTgifQ.qsmrk1kkn8DjFAILMgRMIg';
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ssj6porfy/cj886di5648oh2sod4z2ncb9s',
      "center": [
        10,
        27
      ],
      "zoom": 1.1
    });

    let svg = d3.select("#map")
                  .append("svg")
                  .attr("viewBox", "0 0 500 500");

    this.countrySpotGenerator(this.countryCoordinates());

  // PATHS

    d3.select("svg") // Mexico to US
      .append('path')
      .attr('class', 'flowline')
      .attr('d', 'M-15 265 L0 220');

    d3.select("svg") // Haiti to US
      .append('path')
      .attr('class', 'flowline')
      .attr('d', 'M47 273 L0 220');

    d3.select("svg") //DR to US
      .append('path')
      .attr('class', 'flowline')
      .attr('d', 'M60 273 L0 220');

    d3.select("svg")// Canada to US
      .append('path')
      .attr('class', 'flowline')
      .attr('d', 'M30 190 L0 220');


    return (
      <div>
      </div>
    );
  }
}

export default Immigration;
