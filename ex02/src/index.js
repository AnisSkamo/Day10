// Only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};
function myFunction(myObj) {
    var hatValue = myClothes.hat; // value1
    var shirtValue = myClothes.shirt; // value2
    var shoesValue = myClothes.shoes; // value2
    return { hatValue, shirtValue, shoesValue } ;
}
// Onlz change code above this line
console.log(myFunction(myClothes)); 
module.exports = myFunction(myClothes);