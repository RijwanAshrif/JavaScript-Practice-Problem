//budgetCalculator code:
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