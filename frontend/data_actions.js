import $ from "jquery";

const fetchData = () => (
  $.ajax({
    url: "docs/data.csv",
    dataType: "text"
  })
);


export default fetchData;
