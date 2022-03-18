var randomDate = require('random-datetime');

function generateRandomIdNumber(){
    const year = Math.floor(Math.random() * (2000 - 1910) ) + 1910;
    const date = randomDate({year: year});
    const secondGroup = randomSecondGroup();
    const firstAndSecondGroup = `${(""+date.getFullYear()).slice(-2)}${zeroFill(date.getMonth(), 2)}${zeroFill(date.getDay(), 2)}${secondGroup}`;
    const thirdGroup = zeroFill(97 - (parseInt(firstAndSecondGroup) % 97), 2);
    return `${firstAndSecondGroup}${thirdGroup}`;
}

function randomSecondGroup(){
    return zeroFill(Math.floor(Math.random(0)*999), 3);
}

function zeroFill(number, width) {
    width -= number.toString().length;
    if(width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + "";
}

exports.generateRandomIdNumber = generateRandomIdNumber;
