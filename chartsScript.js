

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
 var textBoxCount;
 const source = document.getElementById('source');
const inputHandler = function(e) {
  console.log('input: ' +e.target.value );

  myChart.data.datasets[0].data[5] = e.target.value;
    myChart.update();
  console.log('value: ' + myChart.data.datasets[0].data[5]);

}
source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); // for IE8


var textBoxArray= new Array;
function add_field()
{
  textBoxCount=document.getElementsByClassName("input_text");
  textBoxCount=textBoxCount.length+1;
  document.getElementById("field_div").innerHTML=document.getElementById("field_div").innerHTML+
  "<p id='input_text"+textBoxCount+
  "_wrapper'><input type='text' class='input_text' id='input_text"+
  textBoxCount+
  "' placeholder='Enter Text'><input type='button' value='Remove' onclick=remove_field('input_text"+
  textBoxCount+
  "');></p>";
  console.log('total_text: ' + textBoxCount)
  textBoxArray.push('input_text'+textBoxCount)

  const textBoxSource = document.getElementById('input_text'+textBoxCount);
  textBoxSource.addEventListener('input', inputHandler1);
  textBoxSource.addEventListener('propertychange', inputHandler1); // for IE8 

}
function remove_field(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}


const inputHandler1 = function(e) {
  console.log('added text Box: ' +e.target.value );

}
