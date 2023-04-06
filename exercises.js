/**
 * Exercises using ForEach, Map, Filter methods
 */

'using strict';

let arr = [1, 2, 3, 4, 5];

/**
 * ForEach 
 */

function doubleValues(arr) {
    let doubledArr = [];
    arr.forEach(function(val) {
        doubledArr.push(val*2);
    });
    return doubledArr;
}

function onlyEvenValues(arr) {
    let evens = [];
    arr.forEach(function(val) {
        if(val % 2 === 0) evens.push(val);
    })
    return evens;
}

function showFirstAndLast(arr) {
    let shortie = [];
    arr.forEach(function(val) {
        let newStr = val.charAt(0) + val.charAt(val.length-1);
        shortie.push(newStr);
    });
    return shortie;
}

//let newArr = showFirstAndLast(['acde', 'jeff', 'jeremy']);
//console.log(newArr);

function addKeyAndValue(arr, key, value) {
    let newArray = [];
    arr.forEach(function(val) {
     let element = val;
     element[key] = value;
        newArray.push(element);
    });
    return newArray;

}

function vowelCount(string) {
    let splitArr = string.toLowerCase().split("");
    let obj = {};
    //let regexp = /[aeiou]/g;
    const vowels = "aeiou";

    splitArr.forEach(function(letter) {
        if(vowels.indexOf(letter) != -1) {
            if(obj[letter]) {
                obj[letter]++;
            }
            else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

let moddedA = addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
);
//console.log(moddedA);
// let msg = "I love you";
// let vCount = vowelCount(msg);
// console.log(vCount); 


/**
 * Map
 */
function doubleValuesWithMap(arr) {
    let newArr = arr.map(function(val) {
        return val*2;
    });
    return newArr;

}
//console.log(doubleValuesWithMap(arr));

function valTimesIndex(arr) {
    return arr.map(function(val, i) {
        return val*i;
    })
}
//console.log(valTimesIndex(arr));

function extractKey(arr, key) {
   return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    })
}
/**
 * Filter
 */
function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    })
}
// console.log(filterByValue(
//     [
//       {first: 'Elie', last:"Schoppik"},
//       {first: 'Tim', last:"Garcia", isCatOwner: true},
//       {first: 'Matt', last:"Lane"},
//       {first: 'Colt', last:"Steele", isCatOwner: true}
//     ],
//     'isCatOwner'
//     ));

function find(arr, value) {
    let retArr = arr.filter(function(val) {
        return val === value;
    })
    if(retArr.length == 0) return undefined;
    else return retArr[0];
}

//console.log(find([1,2,3,4,5], 6));

function findInObj(arr, key, value) {
    return arr.filter(function(val) {
        return val[key] == value;
    })[0];
}
console.log(findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  ));

function removeVowels(string) {
    let strArray = string.toLowerCase().split("");
    let newStr = "";
    newStr = strArray.filter(isConsonant).join("");
    return newStr;

}
//for every char in the word, determine whether it is a vowel. If it isn't, add it to the new string

function isConsonant(char) {
    return "aeiou".indexOf(char) == -1;
}

console.log(removeVowels('TimothyChatelat'));

function doubleOddNumbers(arr) {
    return arr.filter(isOdd).map(function(val) {
        return val*2;
    });
}
function isOdd(val) {
    return val % 2 != 0;
}

//console.log(doubleOddNumbers([1,2,3,4,5]));