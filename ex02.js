function checkPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function printPrime(n){
    for(let i =2;i<=n;i++){
        checkPrime(i) && console.log(i)
    }
}

printPrime(10)
