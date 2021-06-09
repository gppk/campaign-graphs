

document.documentElement.setAttribute('data-theme','rfi')

var ctx = document.getElementById('myChart');

var stars = [135850, 52122, 148825, 16939, 9763,135850, 52122, 148825, 16939, 9763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi', 'Angular', 'Vue', 'Hyperapp', 'Omi','ta'];


var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
     labels: frameworks,
     datasets: [{
         label: 'Popular JavaScript Frameworks',
         data: stars,
         backgroundColor: [
           "rgba(75, 192, 192, 0.2)"
         ]
         }]
  },
 });
 
 const source = document.getElementById('source');
const inputHandler = function(e) {
  console.log('input: ' +e.target.value );

  myChart.data.datasets[0].data[5] = e.target.value;
    myChart.update();
  console.log('value: ' + myChart.data.datasets[0].data[5]);

}
source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); // for IE8
