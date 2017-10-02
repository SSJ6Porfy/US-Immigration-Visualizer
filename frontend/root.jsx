import React from "react";
import * as d3 from "d3";

class Immigration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3NqNnBvcmZ5IiwiYSI6ImNqODg2N3o3ZjFoM20zM29hMmV1dmtvaTgifQ.qsmrk1kkn8DjFAILMgRMIg';
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ssj6porfy/cj886di5648oh2sod4z2ncb9s',
      "center": [
        10,
        30
      ],
      "zoom": 1.1,
      "bound": [ -180.0, -90.0, 180.0, 90.0]

    });

    let svg = d3.select("#map")
                  .append("svg")
                  .attr("viewBox", "0 0 200 200");

    d3.select("svg")
      .append("circle")
      .attr("height", "100px")
      .attr("width", "100px")
      .attr("r", "1")
      .attr("cx", 23)
      .attr("cy", 26)
      .attr("fill", "blue");
    return (
      <div>
      </div>
    );
  }
}

export default Immigration;
