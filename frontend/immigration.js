import * as d3 from "d3";
import fetchData from "./data_actions";
import mapboxgl from "mapbox-gl";


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

  let mainSvg = d3.select("svg")
                  .append("polygon")
                  .attr("points", "-11 228 -8 217 -17 210 -5 210 0 200 5 210 17 210 8 217 11 228 0 220");


  const builder = () => {
    fetchData().then(res => countrySpotGenerator(res));
  };

  const countryIn = (country) => {
    d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
    };

    country.moveToFront();
    country.style("visibility","visible");
  };


  const countryOut = (country) => {
    country.style("visibility","hidden");
  };

  // Receive Obj from CSV and <div></div> in string format that is then passed
  // to .html() metho
  const byDecadeInfo = (arr, country, path) => {
    let keys = Object.keys(arr).slice(1);
    let popKeys = Object.keys(arr[country][0]).slice(0,Object.keys(arr[country][0]).length - 1);
    let sum = 0;
    let decadeStr = "<div class='year-div'><div class='col1'>";
    popKeys.forEach((popKey, idx) => {
       decadeStr += (
         arr["RowTitle"][0][popKey] + ": " + Number(arr[country][0][popKey]).toLocaleString() + "<br>");
       sum += Number(arr[country][0][popKey]);
       if ((idx + 1) % 7 === 0) {
         decadeStr += `</div><div class='col${((idx + 1) / 7) + 1}'>`;
       }
    });
    decadeStr += "</div></div>";
    decadeStr += `<div class='total'>Total: ${sum.toLocaleString()}</div>`;

    path.style("animation", `flow ${400000 / sum}s linear infinite`);
    path.style("-webkit-animation", `flow ${400000 / sum}s linear infinite`);
    return decadeStr;
  };


  // generates spots and paths
  const countrySpotGenerator = (arr) => {

    let keys = Object.keys(arr).slice(1);
    keys.forEach((key, idx) => {
      let str = arr[key][0]["FIELD21"];
      let [a, b] = str.split(",");
      let x = Number(a.match(/-?\d+/));
      let y = Number(b.match(/-?\d+/));

      let svg = d3.select("svg");

      let circle =  svg.append("circle")
                        .attr("r", 5)
                        .attr("cx", x)
                        .attr("cy", y)
                        .on("mouseover", () => countryIn(forObj))
                        .on("mouseout", () => countryOut(forObj));

      let path = svg.append('path')
                    .attr('class', 'flowline')
                    .attr('d', `M${x} ${y} L0 215`);

      if (y < 155) {
        y += 50;
      }

      if (x < 205) {
        x += 400;
      }


      let forObj = svg.append("foreignObject")
                      .attr("width", "375px")
                      .attr("height", "210px")
                      .attr("x", x - 390)
                      .attr("y", y - 150)
                      .attr("visibility", "hidden");

      let containerDiv = forObj.append("xhtml:div")
                                .attr("id", "containerDiv")
                                .attr("visibility", "hidden");

      let countryBody = containerDiv.append("xhtml:body")
                                    .attr("id", "body-country");

      let countryTitle = countryBody.append("xhtml:div")
                                      .attr("id", "country-title")
                                      .text(() => {return key;});

      let countryInfo = countryBody.append("xhtml:text")
                                   .attr("id", "country-body")
                                   .html(() => byDecadeInfo(arr, key, path));
    });
  };

  builder();
