
// Code your solution in this file!

function distanceFromHqInBlocks (street){
const numBlocks = Math.abs(street-42);
console.log(numBlocks);
return numBlocks
};

function distanceFromHqInFeet (street){
const numFeet = distanceFromHqInBlocks(street)*264;
console.log(numFeet);
return numFeet
};

function distanceTravelledInFeet (streetStart, streetEnd){
const numDistance = Math.abs(streetStart-streetEnd)*264;
console.log(numDistance);
return numDistance;
};

function calculatesFarePrice(streetStart, streetEnd){
const numDistance = distanceTravelledInFeet(streetStart,streetEnd);
if (numDistance<400) {
    return 0   
} else if (numDistance<2000) {
    const numFare = (numDistance-400)*0.02; // unit * $/unit w/ first 400 free
    return numFare
} else if (numDistance<=2500) {
    return 25
} else {
    return 'cannot travel that far'
}

};

distanceFromHqInBlocks(32);
distanceFromHqInFeet(32);
distanceTravelledInFeet(50,42);

calculatesFarePrice(50,49);
