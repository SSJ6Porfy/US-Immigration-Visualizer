import $ from "jquery";

const fetchData = () => (
  $.ajax({
    url: "country_data.csv",
    dataType: "text"
  })
);


export default fetchData;
