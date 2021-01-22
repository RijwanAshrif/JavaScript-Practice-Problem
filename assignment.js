



//---------------------------------------------------------------------------kilometerToMeter code:---------------------------->
function kilometerToMeter(kiloMeter){

    if (kiloMeter<0){
        return 'error';
    }
    else{
        var meter = kiloMeter*1000;   //{1km = 1000meter}
        return meter;
    }
}
var distance = kilometerToMeter(21);
console.log(distance);




//----------------------------------------------------------------------------budgetCalculator code:----------------------------->

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = 50;
    var mobilePrice = 100; 
    var laptopPrice = 500;
    var total = 0;
    if (watch<0 || mobile<0 || laptop<0){
        return 'error';
    }
    else{
        total = watch * watchPrice + mobile * mobilePrice + laptop * laptopPrice;
        return total;
    }
}
var result = budgetCalculator(1, 2, 1);

console.log(result);





//-------------------------------------------------------------------------------hotelCost code:--------------------------------->

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




//--------------------------------------------------------------------------------megaFriend code---------------------------->

function megaFriend(name){
    let big = name[0]; 
    let index = 0; 
    for(i=1; i<name.length; i++){
        if( big < name[i]){
            big = name[i];
            index = i;
        }
    }
    return index;
}

let friendName = ['Batman','Superman','Spiderman','IronManHulkBuster'];
let lengthOfName = [];
for(let i=0; i<friendName.length; i++){
    let name = friendName[i];
    nameLength = name.length;
    lengthOfName.push(nameLength)
}

 longestName = megaFriend(lengthOfName);
 console.log(friendName[longestName]);