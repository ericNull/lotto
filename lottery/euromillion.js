
var request = require('request');
const cheerio = require('cheerio');
var number =[];
var ball =[];
sorted =[[0,"-"],[1,"-"],[2,"-"],[3,"-"],[4,"-"],[5,"-"],[6,"-"],[7,"-"],[8,"-"],[9,"-"],[10,"-"],[11,"-"],[12,"-"],[13,"-"],[14,"-"],[15,"-"],[16,"-"],[17,"-"],[18,"-"],[19,"-"],[20,"-"]];
known = [] ;
known1 = [];
sorted2=[[0,"-"],[1,"-"],[2,"-"],[3,"-"],[4,"-"],[5,"-"]];

var final = [];

for (var x = 0; x<51; x++){
  number.push (0);
}
for (var x = 0; x < 13; x++){
  ball.push (0);
}
request('https://www.euro-millions.com/results-archive-2019', function (error, response, body) {
  var $ = cheerio.load(body);
  var area = $(".ball");
  var aream = $(".lucky-star");
    area.each((index,data) => {
    //console.log($(data).text());
    var position = parseInt($(data).text());
    number[position] = number[position] + 1;
  })
 // for (var x = 0;  x < 71; x++){
    // console.log(x +"::"+ number[x])
 // }
  aream.each((index,data) => {
    var position = parseInt($(data).text());
    ball[position] = ball[position] + 1;
  })
  for (var x = 0;  x < 13; x++){
    console.log(x +" ball ::"+ ball[x])
  }
  for (var x = 1; x < number.length; x++){
     
    sorted[number[x]].push(x);
  }
  

console.log(sorted);
  for(var i = 0; i < 20;i++){
    pick =[];

    for (var y = 0 ; y < 3;y++){
   
      var first = Math.floor((Math.random() * 8) + 4);
    
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 8) + 4);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 8) + 4);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 8) + 4);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 8) + 4);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 8) + 4);
      }
     
      var second = Math.floor((Math.random() * (sorted[first].length -2)) +2); 
       pick.push(sorted[first][second]);
   
      }
      for (var y = 0 ; y < 2;y++){
        var first = Math.floor((Math.random() * 3) + 1); 
        var second = Math.floor((Math.random() * (sorted[first].length-2))+2); 
         pick.push(sorted[first][second]);
        }
        pick.sort(function(a, b) {
          return a - b;
        });
        pick.push(Math.floor(Math.random() * 25) + 1)
        final.push(pick);
         
  }
  // for (var i = 0; i < 5; i ++){
  //   var pin=  Math.floor((Math.random() * 20) +0); 
  //   console.log(final[pin]);
  // }
  //console.log(final);
var number2 = [];
for (var x = 0; x<51; x++){
    number2.push (0);
  }

var area2=$(".ball");

for (var i = 0; i < 20; i++ ){
    //console.log($(area2[i]).text());
    var position = parseInt($(area2[i]).text());
    number2[position] = number2[position] + 1;

}
for (var x = 1; x < number2.length; x++){
     
    sorted2[number2[x]].push(x);
  }
  console.log(sorted2[1]);
  console.log(sorted2[2]);
  console.log(sorted2[3]);
  console.log(sorted2[4]);
 
  for (var j = 0 ; j<10 ; j++){
    var sorted3 = [];
    

  for (var x = 0 ; x < 2 ; x++){
      var index = (Math.floor((Math.random() * (sorted2[1].length-2)) + 2));
      sorted3.push(sorted2[1][index]);
      //console.log(sorted2[1][index]);
      
  }
  for (var i = 0 ; i < 3 ; i++){
    var index = (Math.floor((Math.random() * (sorted2[0].length-2)) + 2));
    sorted3.push(sorted2[0][index]);
    //console.log(sorted2[0][index]);
    
}
console.log(sorted3.sort(function(a, b) { return a < b ? -1 : a > b ? 1 : 0; }));
  }
})


