let content = "F8 - Hoc lap trinh de di lam";

function stringReverse(str) {
    let newStr = '';
    // for(let i = str.length - 1 ; i>=0 ; i--) {
    //     newStr += str[i];
    // }
    for( let i of str ) {
        newStr = i + newStr
    }
    return newStr;
}
function arrayReverse() {
    return content.split("").reverse().join("");
}
console.log(arrayReverse(content));

console.log(stringReverse(content));
function monthRandom() {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const randomIndex = Math.floor(Math.random() * months.length);
    return months[randomIndex];
}

console.log(monthRandom()); // This will output a random month, e.g., "April"
