function hotelCost(day){
    var first10DayCost = 100;
    var second10DayCost = 80;
    var moreThan20DayCost = 50; 
var Cost = 0;
if (day<0 ){
    return 'error';
}
else if(day<=10){
    Cost = day*first10DayCost;
}
else if(day<=20){
    var first10Day = 10*first10DayCost;
    var remaining = day - 10;
    var second10Day = remaining*second10DayCost;
    Cost = first10Day + second10Day;
}
else{
    var first10Day = 10*first10DayCost;
    var second10Day = 10*second10DayCost;
    var remaining = day - 20;
    var remainingDay = remaining*moreThan20DayCost;
    Cost = first10Day + second10Day + remainingDay;
    }
    return Cost;
}
var total = hotelCost(21);
console.log(total);