function strLower (setStringCounter) {
    let resultLower ='';
    setString = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i< setStringCounter; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        resultLower += ((setString[index]));
    }
    return resultLower;
}
function strUpper (setStringCounter) {
    let resultUpper ='';
    setString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i< setStringCounter; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        resultUpper += ((setString[index]));
    }
    return resultUpper;
}
function numbOnly (setStringCounter) {
    let resultNumber = '';
    setString = '1234567890';
    for (var i = 0; i< setStringCounter; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        resultNumber += ((setString[index]));
    }
    return resultNumber;
}
let strAlpha = (setStringCounter) => {
    let resultAlpha='';
    var setString = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i< setStringCounter; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        resultAlpha += ((setString[index]));
    }
    return resultAlpha;
}
exports.strLower = strLower;
exports.strUpper = strUpper;
exports.numbOnly = numbOnly;
exports.strAlpha = strAlpha;
