import $ from "jquery";

const fetchData = () => (
  $.ajax({
    url: "docs/data.json",
    dataType: "JSON"
  })
);


export default fetchData;
