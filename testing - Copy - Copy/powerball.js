



var request = require('request');
const cheerio = require('cheerio');
var number =[];
var ball =[];
sorted =[[0,"-"],[1,"-"],[2,"-"],[3,"-"],[4,"-"],[5,"-"],[6,"-"],[7,"-"],[8,"-"],[9,"-"],[10,"-"],[11,"-"],[12,"-"],[13,"-"],[14,"-"],[15,"-"],[16,"-"],[17,"-"],[18,"-"],[19,"-"],[20,"-"]];
known = [] ;
known1 = [];

for (var x = 0; x<70; x++){
  number.push (0);
}
for (var x = 0; x<27; x++){
  ball.push (0);
}
request('https://www.lotteryusa.com/powerball/pb-year.html', function (error, response, body) {
  var $ = cheerio.load(body);
  var area = $("li");
  var aream = $(".powerball");
    area.each((index,data) => {
    var position = parseInt($(data).text());
    number[position] = number[position] + 1;
  })
  for (var x = 0;  x < 71; x++){
    // console.log(x +"::"+ number[x])
  }
  aream.each((index,data) => {
    var position = parseInt($(data).text());
    ball[position] = ball[position] + 1;
  })
  for (var x = 0;  x < 27; x++){
    console.log(x +" ball ::"+ ball[x])
  }
  for (var x = 1; x < number.length; x++){
     
    sorted[number[x]].push(x);
  }
  
  console.log(sorted);

  for(var i = 0; i < 20;i++){
    pick =[];

    for (var y = 0 ; y < 3;y++){
   
      var first = Math.floor((Math.random() * 12) + 9);
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 12) + 9);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 12) + 9);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 12) + 9);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 12) + 9);
      }
      if(sorted[first].length < 3){
        first = Math.floor((Math.random() * 12) + 9);
      }
      var second = Math.floor((Math.random() * (sorted[first].length -2)) +2); 
       pick.push(sorted[first][second]);
      }
      for (var y = 0 ; y < 2;y++){
        var first = Math.floor((Math.random() * 6) + 3); 
        var second = Math.floor((Math.random() * (sorted[first].length-2))+2); 
         pick.push(sorted[first][second]);
        }
        pick.push(Math.floor(Math.random() * 26) + 1)
        console.log(pick);
         
  }

})


