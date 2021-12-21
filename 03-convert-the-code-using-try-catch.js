'use strict';

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (err) {
    console.log("s.split is not a function");
  }
  console.log(s);
}

reverseString('qwerty'); // ytrewq
reverseString(12345); // s.split is not a function