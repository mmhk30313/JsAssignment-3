// https://github.com/mmhk30313/JsAssignment-3


const kilometerToMeter = ( lengthByKM ) => {
    try{
        if( lengthByKM > -1 ){
            const lengthByM = ( lengthByKM * 1000 );
            return lengthByM;
        }
        throw "Distance cant not be negative or others type except number";

    }catch( err ){
        return err;
    }
    
}

function budgetCalculator(watch, mobile, laptop) {
    if( watch > -1 && mobile > -1 && laptop > -1 ){
        const totalCost = ( watch * 50 ) + ( mobile * 100 ) + ( laptop * 500);
        return totalCost;
    }
    return "Any product quantity is invalid";
}

const hotelCost = ( days ) => {
    try{
        const totalHotelCost = ( days < 11 )  ? ( days * 100 ) : ( days < 21) ? (((days - 10) * 80) + ( 10 * 100 )) : ( (days - 20) * 50) + ( 10 * 80 ) + ( 10 * 100 );
        if( totalHotelCost ){
            return totalHotelCost;
        }
        throw "Day's quantity cant not be negative or others type except number";

    }catch( err ){
        return err;
    }
    
}

function megaFriend( friends ) {
    if( friends.length === 0 ){
        return "There is no friends in our life";
    }
    let bigFriend = "";
    for ( let i = 0 ; i < friends.length ; i++ ) {
        if( typeof friends[i] === "number" ){
            continue;
        }
        bigFriend = ( bigFriend.length < friends[i].length ) ? friends[i] : bigFriend;
    }
    if(!bigFriend){
        return "Friends name can not be number type or empty string";
    }
    return bigFriend;
}

// Declaring result for all problems

let result;

// Problem-1: Kilometer To Meter Conversion

// let kiloMeter = -1;
// let kiloMeter = "name or character";
let kiloMeter = 1;
result = kilometerToMeter(kiloMeter);
console.log( result );

// Problem-2: Product Budget Calculation

let watch = 2;
let mobile = 1;
let laptop = 3;
result = budgetCalculator( watch, mobile, laptop);
console.log( result );

// Problem-3: Hotel Cost Calculation For Different Days

// let days = -1;
// let days = "string type";
let days = 21;
result = hotelCost( days );
console.log( result );

// Problem-4: Determining Mega Friend According To The Number Of Letter In The Friends String

// let friends = [];
// let friends = [1, 2, 3, 4, 5];
// let friends = ["", "", "", ""];
// let friends = [ 55, "mmh", "Ruhol", "Elias Ali", "Robel"];
let friends = [ "Abdullah", "Evan", "Ruhol", "Elias", "Robel"];
result = megaFriend( friends );
console.log( result );
