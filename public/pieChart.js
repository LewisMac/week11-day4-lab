var PieChart = function(){
  var container = document.querySelector("#pie-chart");

  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container,
    },
    title: {
      text: "Pokemon Types I've Caught",
    },
    series: [{
      name: "Type",
      data: [{
        name: "Fire",
        y: 64,
        color: "#ffac33",
        // sliced: true,
      },{
        name: "Water",
        y: 22,
        color: "#73b7ff",
        sliced: true,
      },{
        name: "Grass",
        y: 4,
        color: "#00ba2f",
        // sliced: true,
      },{
        name: "Electric",
        y: 10,
        color: "yellow",
      }],
    }],
  });
}