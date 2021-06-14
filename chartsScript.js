

document.documentElement.setAttribute('data-theme','rfi')

var ctx = document.getElementById('myChart');

var stars = [6,6,6,6,6,6,6,6,6,6];
var frameworks = ['Homebrew', 'World Magic', 'Adult Themes', 'Magic Items', 'Campaign Length', 'Races', 'Technology', 'Realistic Themes', 'Fantasy Themes','Humor'];

var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
     labels: frameworks,
     datasets: [{
         label: 'Level of D&D Concepts In Game',
         data: stars,
         backgroundColor: [
           "rgba(75, 192, 192, 0.2)"
         ]
         }],
      },
      options: {
        scale: {
              max: 10,
              min: 0,
              ticks: {
                  stepSize: 1
              }
      }
      },  
 });

 // Below are lots of elements, these match up with the elements in the HTML.
 // Probably should figure out how to create elements with arrays
 // The key part is the event handler which figures out which box has been updated
 // using the number at the end of the element ID and then updating that entry in the graph array.
 const value1 = document.getElementById('value1');
 const value2 = document.getElementById('value2');
 const value3 = document.getElementById('value3');
 const value4 = document.getElementById('value4');
 const value5 = document.getElementById('value5');
 const value6 = document.getElementById('value6');
 const value7 = document.getElementById('value7');
 const value8 = document.getElementById('value8');
 const value9 = document.getElementById('value9');
 const value0 = document.getElementById('value0'); 


const inputHandler = function(e) {
  console.log('input: ' +e.target.value );
  var boxNumber = e.target.id.match(/\d+/);
  myChart.data.datasets[0].data[boxNumber] = e.target.value;
    myChart.update();
  console.log('value: ' + myChart.data.datasets[0].data[5]);
  Cookies.set('graph-values', JSON.stringify(myChart.data.datasets[0]));
}

value1.addEventListener('input', inputHandler);
value2.addEventListener('input', inputHandler);
value3.addEventListener('input', inputHandler);
value4.addEventListener('input', inputHandler);
value5.addEventListener('input', inputHandler);
value6.addEventListener('input', inputHandler);
value7.addEventListener('input', inputHandler);
value8.addEventListener('input', inputHandler);
value9.addEventListener('input', inputHandler);
value0.addEventListener('input', inputHandler);

window.onload = function (){
  console.log('loaded');
  var i = 0
  // var storedAry = JSON.parse($.cookie('name'));
   var newary=JSON.parse(Cookies.get('graph-values'));
   stars=newary;
  frameworks.forEach(function(entry) {
    document.getElementById('label'+i++).value = entry; 
  });
  i=0;
  stars.forEach(function(entry) {
    document.getElementById('value'+i++).value = entry; 
  });

  document.getElementById('label1').value = Cookies.get('name');
}

// Download Button
document.getElementById('btn-download').onclick = function() {
  // Trigger the download
  var a = document.createElement('a');
  a.href = myChart.toBase64Image();
  a.download = 'my_file_name.png';
  a.click();
}