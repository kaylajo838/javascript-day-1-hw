//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(string) {
    //Your code goes here
    // loop through dog_names array
    for(let names of dog_names) {
        // check if the string includes the names in the array
        if (string.includes(names)){
            return `Matched ${names}`
        } else {
            return 'No Match'
        }
    }
}

//Call method here with parameters
console.log(findWords(dog_string))

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
    //code goes here
    //loop through every even index of the array
    for(let i = 0; i < arr.length; i +=2) {
        // replace each even index with "even index"
        arr.splice(i, 1, "even index")
    }
    return arr
    
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Codewars python to JS questions

//============Exercise #3 ============//
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

let bmi = function(weight, height){
    // calculation for bmi
    let bmiCalc = weight / (height * height)
    // check if calculated bmi is underweight, normal, overweight, or obese
    if (bmiCalc <= 18.5){
        return "Underweight"
    } else if (bmiCalc <= 25.0){
        return "Normal"
    } else if (bmiCalc <= 30.0){
        return "Overweight"
    } else if (bmiCalc > 30){
        return "Obese"
    }
}

// (bmi(50, 1.80), "Underweight")
// (bmi(80, 1.80), "Normal")
// (bmi(90, 1.80), "Overweight")
// (bmi(110, 1.80), "Obese")
// (bmi(50, 1.50), "Normal")

console.log(bmi(50, 1.80))
console.log(bmi(80, 1.80))
console.log(bmi(90, 1.80))
console.log(bmi(110, 1.80))
console.log(bmi(50, 1.50))



//============Exercise #4 ============//
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// def get_count(sentence):
//     vowels = ["a", "e", "i", "o", "u"]
//     count = 0
//     for word in sentence:
//         if word in vowels:
//             count += 1
//     return count

let get_count = function(sentence){
    // put all vowels excepy 'y' in an array
    const vowels = ["a", "e", "i", "o", "u"]
    // define a count variable
    let count = 0

    // loop through string
    for(let i = 0; i < sentence.length; i++){
        let letter = sentence[i]
        // check if letter is in the vowels array
        if (vowels.includes(letter)){
            // increment count by 1
            count++
        }
    }

    return count
}

// get_count("aeiou"), 5
// get_count("y"), 0
// get_count("bcdfghjklmnpqrstvwxz y"), 0
// get_count(""), 0
// get_count("abracadabra"), 5

console.log(get_count("aeiou"))
console.log(get_count("y"))
console.log(get_count("bcdfghjklmnpqrstvwxz y"))
console.log(get_count(""))
console.log(get_count("abracadabra"))
