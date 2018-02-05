const runicTable = [{
    word: "El",
    power: 28,
    antagonist: "Ort"
},
{
    word: "Eld",
    power: 33,
    antagonist: "Sur"
},
{
    word: "Tir",
    power: 9,
    antagonist: "Eth"
},
{
    word: "Nef",
    power: 7,
    antagonist: "Ist"
},
{
    word: "Eth",
    power: 31,
    antagonist: "Tir"
},
{
    word: "Ith",
    power: 22,
    antagonist: "Pul"
},
{
    word: "Tal",
    power: 8,
    antagonist: "Io"
},
{
    word: "Ral",
    power: 25,
    antagonist: "Um"
},
{
    word: "Ort",
    power: 18,
    antagonist: "El"
},
{
    word: "Thul",
    power: 13,
    antagonist: "Sol"
},
{
    word: "Amn",
    power: 6,
    antagonist: "Fal"
},
{
    word: "Sol",
    power: 10,
    antagonist: "Thul"
},
{
    word: "Shael",
    power: 17,
    antagonist: "Lem"
},
{
    word: "Dol",
    power: 11,
    antagonist: "Hel"
},
{
    word: "Hel",
    power: 12,
    antagonist: "Dol"
},
{
    word: "Io",
    power: 20,
    antagonist: "Tal"
},
{
    word: "Lum",
    power: 32,
    antagonist: "Gul"
},
{
    word: "Ko",
    power: 27,
    antagonist: "Mal"
},
{
    word: "Fal",
    power: 14,
    antagonist: "Amn"
},
{
    word: "Lem",
    power: 26,
    antagonist: "Shael"
},
{
    word: "Pul",
    power: 15,
    antagonist: "Ith"
},
{
    word: "Um",
    power: 16,
    antagonist: "Ral"
},
{
    word: "Mal",
    power: 21,
    antagonist: "Ko"
},
{
    word: "Ist",
    power: 4,
    antagonist: "Nef"
},
{
    word: "Gul",
    power: 23,
    antagonist: "Lum"
},
{
    word: "Vex",
    power: 24,
    antagonist: "Ohm"
},
{
    word: "Ohm",
    power: 1,
    antagonist: "Vex"
},
{
    word: "Lo",
    power: 2,
    antagonist: "Cham"
},
{
    word: "Sur",
    power: 30,
    antagonist: "Eld"
},
{
    word: "Ber",
    power: 3
},
{
    word: "Jah",
    power: 5,
    antagonist: "Zod"
},
{
    word: "Cham",
    power: 29,
    antagonist: "Lo"
},
{
    word: "Zod",
    power: 19,
    antagonist: "Jah"
}
];

exports.generateRunicWords = length => {

// Sorting objects in arrays by power value

let sortedRunicTable = runicTable.sort( (a, b) => {
   return b.power - a.power
});


let runicWords = [];

let mostPowerfulRunes = [];

if (typeof length !== "number") {
    return "Your input must be a number!"
} else if (length < 1 || length > runicTable.length) {
    return "Your number is too big or too small!"
} else {

// Splitting sorted runic array by the length argument

for (let i = 0; i < sortedRunicTable.length; i += length) {
    myChunk = sortedRunicTable.slice(i, i + length);
    mostPowerfulRunes.push(myChunk);
}

// Omitting any incomplete word
if (mostPowerfulRunes[mostPowerfulRunes.length - 1].length < length) {
    mostPowerfulRunes = mostPowerfulRunes.slice(0, mostPowerfulRunes.length - 1)
}

// Creating array with runic words
for (let j = 0; j < mostPowerfulRunes.length; j++) {


    let powerVal = mostPowerfulRunes[j].reduce(function (acc, val) {
        return acc + val.power;
    }, 0);
    let wordVal = mostPowerfulRunes[j].reduce(function (acc, val, index) {
        return index == 0 ? val.word : acc + "-" + val.word;
    }, "");
    runicWords.push({
        'word': wordVal,
        'power': powerVal - length
    });

}


// Checking if runic words array is not longer than 10 objects
if (runicWords.length > 10) {
    runicWords = runicWords.slice(0, 10)
}

return runicWords
}
}


exports.checkRunicWord = runicWord => {

if (typeof runicWord !== "string") {
    return "Your runic word must be a string!"
} else if (runicWord === "") {
    return "Your runic word can't be empty!"
} else {
    let singleRunes = runicWord.split("-");
    let runicPower = 0;
    let runicWordObject;

    // The loop which checks if the runic word is correct and when it is, it returns the total power of runic word

    for (let i = 0; i < runicTable.length; i++) {
        if ((runicWord.indexOf(runicTable[i].word) !== -1) && (runicWord.indexOf(runicTable[i].antagonist) !== -1)) {
            runicWordObject = "Your runic word is incorrect. Sorry!";
            break;
        } else {
            for (let j = 0; j < singleRunes.length; j++) {
                if (runicTable[i].word == singleRunes[j]) {
                    runicPower += runicTable[i].power;
                    runicWordObject = runicPower - singleRunes.length;
                }

            }
        }
    }

    return runicWordObject;
}
}