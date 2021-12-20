'use strict';

function reverseString(s) {
    try {
        return s.split('').reverse().join('');
    }   catch (err) {
        return(err.message);
        return String(s);
    }
}
console.log(reverseString('qwerty'));
console.log(reverseString(459));