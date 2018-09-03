var request = require('request');
const cheerio = require('cheerio');
var number =[];
var ball =[];
sorted =[[],[],[],[],[],[],[],[],[],[],[]];
known = [1,2,29,38,14,11,17 ];
known1 = [1,2,29,38,14,11,17,4, 5, 31, 33, 43, 46, 48, 49, 53, 58, 59, 64, 66, 70];

for (var x = 0; x<71; x++){
  number.push (0);
}
for (var x = 0; x<27; x++){
  ball.push (0);
}
request('https://www.national-lottery.com/megamillions/past-results', function (error, response, body) {
  var $ = cheerio.load(body);
  var area = $(".megamillions-ball");
  var aream = $(".megamillions-mega-ball");
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
    for (var y = 0 ; y < 1;y++){
    // var first = Math.floor(Math.random() * 4) + 6; 
    // var second = Math.floor(Math.random() * sorted[first].length); 
    //  pick.push(sorted[first][second]);
    first =  Math.floor(Math.random() * known.length); 
    first1 =  Math.floor(Math.random() * known1.length); 
    pick.push(known[first]);
    pick.push(known1[first1]);
    }
    for (var y = 0 ; y < 3;y++){
      var first = Math.floor(Math.random() * 4) + 2; 
      var second = Math.floor(Math.random() * sorted[first].length); 
       pick.push(sorted[first][second]);
      }
      pick.push(Math.floor(Math.random() * 26) + 1)
      console.log(pick);
  }
// console.log(pick);
  
})






// var request = require('request');
// const cheerio = require('cheerio');
// var number =[];
// var ball =[];
// sorted =[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
// known = [] ;
// known1 = [];

// for (var x = 0; x<70; x++){
//   number.push (0);
// }
// for (var x = 0; x<26; x++){
//   ball.push (0);
// }
// request('https://www.lotteryusa.com/powerball/pb-year.html', function (error, response, body) {
//   var $ = cheerio.load(body);
//   var area = $("li");
//   var aream = $(".powerball");
//     area.each((index,data) => {
//     var position = parseInt($(data).text());
//     number[position] = number[position] + 1;
//   })
//   for (var x = 0;  x < 71; x++){
//     // console.log(x +"::"+ number[x])
//   }
//   aream.each((index,data) => {
//     var position = parseInt($(data).text());
//     ball[position] = ball[position] + 1;
//   })
//   for (var x = 0;  x < 26; x++){
//     console.log(x +" ball ::"+ ball[x])
//   }
//   for (var x = 1; x < number.length; x++){
     
//     sorted[number[x]].push(x);
//   }
  
//   console.log(sorted);

//   for(var i = 0; i < 20;i++){
//     pick =[];
//     for (var y = 0 ; y < 1;y++){
//     // var first = Math.floor(Math.random() * 4) + 6; 
//     // var second = Math.floor(Math.random() * sorted[first].length); 
//     //  pick.push(sorted[first][second]);
//     first =  Math.floor(Math.random() * known.length); 
//     first1 =  Math.floor(Math.random() * known1.length); 
//     pick.push(known[first]);
//     pick.push(known1[first1]);
//     }
//     for (var y = 0 ; y < 3;y++){
//       var first = Math.floor(Math.random() * 4) + 2; 
//       var second = Math.floor(Math.random() * sorted[first].length); 
//        pick.push(sorted[first][second]);
//       }
//       pick.push(Math.floor(Math.random() * 26) + 1)
//       console.log(pick);
//   }
// // console.log(pick);
  
// })




