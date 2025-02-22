function formatIndianCurrency(number) {
    let [integerPart, decimalPart] = number.toString().split('.');
    
    let lastThree = integerPart.slice(-3);
    let rest = integerPart.slice(0, -3);
    
    if (rest) {
        rest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    }
    
    let formattedNumber = rest ? rest + ',' + lastThree : lastThree;
    return decimalPart ? formattedNumber + '.' + decimalPart : formattedNumber;
}


console.log(formatIndianCurrency(123456.7891)); 
console.log(formatIndianCurrency(1000000));     
