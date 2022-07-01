function convertBase(decimalNumber, base)   {
    let restStack = [];
    let rest, baseString = "", digits = "0123456789ABCDEF";

    while(decimalNumber > 0)    {
        rest = Math.floor(decimalNumber % base);

        restStack.push(rest);

        decimalNumber = Math.floor(decimalNumber / base);
    }

    while(restStack.length > 0)     {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}

// Base binária
console.log(convertBase(123, 2));

// Base Octal
console.log(convertBase(123, 8));

// Base Hexadecimal
console.log(convertBase(123, 16));