import React from "react";
import * as d3 from "d3";
import fetchData from "./data_actions";

class Immigration extends React.Component {
  constructor(props) {
    super(props);
    this.countrySpotGenerator = this.countrySpotGenerator.bind(this);
    this.builder = this.builder.bind(this);
    this.countryInfo = this.countryInfo.bind(this);
  }

  builder() {
    fetchData().then(res => this.countrySpotGenerator(res));
  }

  countryInfo(country) {
    console.log(Object.keys(country));
    console.log(Object.values(country).slice(0, Object.values(country).length - 1));
  }

  countrySpotGenerator(arr) {
    let keys = Object.keys(arr).slice(1);
    keys.forEach((key, idx) => {
      let str = arr[key][0]["FIELD21"];
      let [a, b] = str.split(",");
      let x = Number(a.match(/-?\d+/));
      let y = Number(b.match(/-?\d+/));
      let svg = d3.select("svg");

      this.countryInfo(arr[key][0]);

      let textstuff = svg.append("svg:text")
      .attr("visibility", "hidden")
      .attr("x", x)
      .attr("y", y - 10)
      .text(function() {return key;})
      .attr("id", `${idx}-text`);

      let circle =  svg.append("circle")
                        .attr("r", 5)
                        .attr("cx", x)
                        .attr("cy", y)
                        .attr("fill", "red")
                        .on("mouseover", () => {textstuff.style("visibility","visible");})
                        .on("mouseout", () => {textstuff.style("visibility","hidden");});

      let path = svg.append('path')
                  .attr('class', 'flowline')
                  .attr('d', `M${x} ${y} L0 215`);

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

    let mapdiv = d3.select("#map")
                  .append("svg")
                  .attr("viewBox", "0 0 500 500");

              d3.select("svg")
                .append("polygon")
                .attr("fill", "blue")
                .attr("points", "-11 228 -8 217 -17 210 -5 210 0 200 5 210 17 210 8 217 11 228 0 220")
                .attr("stroke", "white")
                .attr("stroke-width", "2");

    this.builder();

    return (
      <div>
      </div>
    );
  }
}

export default Immigration;
