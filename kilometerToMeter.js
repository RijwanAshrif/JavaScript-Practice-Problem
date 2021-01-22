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
