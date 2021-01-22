// https://github.com/mmhk30313/JsAssignment-3

const kilometerToMeter = ( lengthByKM ) => {
    if(lengthByKM < 0){
        return "Distance cant not be negative";
    }
    const lengthByM = (lengthByKM * 1000);
    return lengthByM;
}

function budgetCalculator(watch, mobile, laptop) {
    if( watch > -1 && mobile > -1 && laptop > -1){
        const totalCost = ( watch * 50 ) + ( mobile * 100 ) + ( laptop * 500);
        return totalCost;
    }
    return "Any product quantity is invalid";
}

const hotelCost = ( days ) => {
    if( days < 0 ){
        return "Day's quantity cant not be negative";
    }
    const totalHotelCost = ( days < 11 )  ? ( days * 100 ) : ( days < 21) ? (((days - 10) * 80) + ( 10 * 100 )) : ( (days - 20) * 50) + ( 10 * 80 ) + ( 10 * 100 );
    return totalHotelCost;
}

function megaFriend( friends ) {
    if( friends.length === 0 ){
        return "There is no friends in our life";
    }
    let bigFriend = friends[0];
    for (let i = 1; i < friends.length; i++) {
        if( bigFriend.length < friends[i]){
            bigFriend = friends[i];
        }
    }
    return bigFriend;
}

// Declaring result for all problem

let result;

// Kilometer To Meter Conversion

// let kiloMeter = -1;
let kiloMeter = 1;
result = kilometerToMeter(kiloMeter);
console.log( result );

// Product Budget Calculation

let watch = 2;
let mobile = 1;
let laptop = 3;
result = budgetCalculator( watch, mobile, laptop);
console.log( result );

// Hotel Cost Calculation For Different Days

// let days = -1;
let days = 21;
result = hotelCost( days );
console.log( result );

// Determining Mega Friend According To The Number Of Letter In The Friends String

// let friends = [];
let friends = [ "Abdullah", "Evan", "Ruhol", "Elias", "Robel"];
result = megaFriend(friends);
console.log(result);