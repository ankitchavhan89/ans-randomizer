// var ansRandomizer = require('./src/index.js');
const result ='';
//function to genrate customisable random string
function strLower (setString) {
    setString = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i< setString; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        result += ((setString[index]));
    }
    return result;
}
function strUpper (setString) {
    setString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i< setString; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        console.log(typeof setString+' test')
        result += ((setString[index]));
    }
    return result;
}
function numbOnly (setString) {
    setString = '1234567890';
    for (var i = 0; i< setString; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        console.log(typeof setString)
        result += ((setString[index]));
    }
    return result;
}
function strAlpha (setString) {
    setString = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i< setString; i++) {
        var index = Math.floor((Math.random()*100)) % setString.length;
        result += ((setString[index]));
    }
    return result;
}
exports.strLower = strLower;
exports.strUpper = strUpper;
exports.numbOnly = numbOnly;
exports.strAlpha = strAlpha;
