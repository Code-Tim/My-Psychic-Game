// console.log('script\'s connected')
//List of all variables
// dom variables
var $tried = document.getElementById("tried")
var $tries = document.getElementById("tries")
var $wins = document.getElementById('wins')
var $loses = document.getElementById('loses')

//logical variables
var tried = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var wins = 0
var loses = 0
var tries = 9


var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];// random index
console.log('my guess', computerGuess)
//    let computerGuess=alphabet[index]//gets letter by random index
// let computerGuess="a"// stubbing out the random letter

function reset() {
    tries = 9
    $tries.innerText = tries
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log('my guess', computerGuess)
    tried = []
    $tried.innerText = tried

}

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 92) {
        console.log(`ok`)

        let userGuess = event.key
        let newLength = tried.push(userGuess)
        console.log("i hope this is a number: ", newLength)
        $tried.innerText = tried.join(" ")


        console.log(computerGuess == userGuess, computerGuess, userGuess)
        if (computerGuess == userGuess) {
            console.log('right')
            // wins = wins + 1
            // wins += 1//shorthand
            wins++
            $wins.innerText = wins
            reset()

            //they won
        } else {
            console.log('wrong')
            //they lose a guess
            tries--;
            $tries.innerText = tries
            if (tries == 0) {
                loses++
                $loses.innerText = loses
                reset()

                //if theyre out of guesses they lose (reset goes here)
                console.log('Lose')
            }
        }

    } else {
        console.log("Shouldn't a psychic make valid choices, that wasn\'t a letter")
    }
}
// function gimme7() {//definition
//     return 7
// }
// console.log(gimme7)//refer to 
// console.log(gimme7())//call's it up
// document.onkeydown = function () { tries += gimme7() }

//let alphabeArrayt= ["a","bcdefghijklmnop"]

// console.log(alphabet.includes("p"))
// console.log(alphabet.includes("q"))