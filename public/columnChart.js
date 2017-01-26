var ColumnChart = function(title, dataName, dataValues, columnNames, container){
  // var container = document.querySelector("#column-chart");

  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container,
    },
    title: {
      text: title
    },
    series: [{
      name: dataName,
      data: dataValues,
    },],
    xAxis: {
      categories: columnNames
    }
  });
}