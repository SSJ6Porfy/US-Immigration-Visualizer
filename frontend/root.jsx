import React from "react";
import * as d3 from "d3";
import fetchData from "./data_actions";

class Immigration extends React.Component {
  constructor(props) {
    super(props);
    this.countrySpotGenerator = this.countrySpotGenerator.bind(this);
    this.builder = this.builder.bind(this);
  }

  builder() {
    fetchData().then(res => this.countrySpotGenerator(res));
  }

  countrySpotGenerator(arr) {
    let keys = Object.keys(arr).slice(1);
    keys.forEach((key) => {
      let str = arr[key]["FIELD21"];
        let [a, b] = str.split(",");
        let x = Number(a.match(/\d+/));
        let y = Number(b.match(/\d+/));
        d3.select("svg")
        .append("circle")
        .attr("r", 2)
        .attr("cx", x)
        .attr("cy", y)
        .attr("fill", "red");

        d3.select("svg") // Mexico to US
          .append('path')
          .attr('class', 'flowline')
          .attr('d', `M${x} ${y} L0 220`);
    });
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

    this.builder();

    return (
      <div>
      </div>
    );
  }
}

export default Immigration;
