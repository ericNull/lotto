var lottery =[];
var final = [];
function lotto(){
    lottery =[];
    var temp =[];
    for(var j = 0; j <10 ; j++){
    temp = [];
    for(var i = 0; i < 5; i++)
    {
    var number = Math.floor((Math.random() *70) + 1);
    temp.push(number);
    }
    lottery.push(temp);
    
}
    for(var i = 0; i < 5; i++){
    var check = false;
    var random = Math.floor((Math.random() *9) + 0);
    var random1 = Math.floor((Math.random() *4) + 0);
    // console.log(lottery);
    // console.log(lottery[1][1]);
    var lot = lottery[random][random1];
    for( var z=0; z < final.length; z++){
    if(lot == final[z] ){
    check = true;
    }
    }
    if(check == false){
    final.push(lot);
    }
    else{
        i--;
    }
}
}
for(var k = 0; k <10; k++){
lotto();
final.push(Math.floor((Math.random() *25) + 1));

console.log(final);
final =[];

}
