fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => console.log(jsondata));

//지도로 표시, 카테고리로 선택, 선택한 항목들 그래프란에 표시, 환율에 따라 계산해서 그래프 단위 통일
//추세선, 같은 원료, 선택한(전체)원료 가격변동 추이, 가격변동 정도는 %로 계산
//그래프는 마우스 오버 시 해당 칸의 정보 표시, 클릭하면 유지 (여러 그래프가 겹쳐있으므로 따로 원자재 하나 선택 후 마우스 오버)

// google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawTrendlines);

// function drawTrendlines() {
//       var data = new google.visualization.DataTable();
//       data.addColumn('number', 'X');
//       data.addColumn('number', 'Dogs');
//       data.addColumn('number', 'Cats');

//       data.addRows([
//         [0, 0, 0],    [1, 10, 0],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
//         [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
//         [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
//         [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
//         [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
//         [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
//         [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
//         [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
//         [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
//         [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
//         [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
//         [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
//       ]);

//       var options = {
//         hAxis: {
//           title: 'Time'
//         },
//         vAxis: {
//           title: 'Popularity'
//         },
//         colors: ['#AB0D06', '#007329'],
//         trendlines: {
//           0: {type: 'exponential', color: '#333', opacity: 1},
//           1: {type: 'linear', color: '#111', opacity: .3}
//         }
//       };

//       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//       chart.draw(data, options);
//     }
google.charts.load('current', { 'packages': ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'aa'],
    ["2023/01/17", 82.54, 82.54 + 1, 21],
    ["2023/01/16", 81.79, 81.79 + 1, 21],
    ["2023/01/13", 81.07, 81.07 + 1, 21],
    ["2023/01/12", 79.53, 79.53 + 1, 21],
    ["2023/01/11", 76.84, 76.84 + 1, 21],
    ["2023/01/10", 76.04, 76.04 + 1, 21],
    ["2023/01/09", 77.09, 77.09 + 1, 21],
    ["2023/01/06", 75.20, 75.20 + 1, 21],
    ["2023/01/05", 75.19, 75.19 + 1, 21],
    ["2023/01/04", 77.10, 77.10 + 1, 21],
    ["2023/01/03", 82.07, 82.07 + 1, 21],
    ["2022/12/30", 78.77, 78.77 + 1, 21],
    ["2022/12/29", 78.15, 78.15 + 1, 21],
    ["2022/12/28", 80.00, 80.00 + 1, 21],
    ["2022/12/27", 80.63, 80.63 + 1, 21],
    ["2022/12/23", 78.11, 78.11 + 1, 21],
    ["2022/12/22", 78.88, 78.88 + 1, 21],
    ["2022/12/21", 76.74, 76.74 + 1, 21],
    ["2022/12/20", 75.79, 75.79 + 1, 21],
    ["2022/12/19", 75.36, 75.36 + 1, 21]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}