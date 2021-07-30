const readline = require('readline');
let username="";
let setPassword=""

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
_     _  _______  ___      _______  _______  __   __  _______ 
| | _ | ||       ||   |    |       ||       ||  |_|  ||       |
| || || ||    ___||   |    |       ||   _   ||       ||    ___|
|       ||   |___ |   |    |       ||  | |  ||       ||   |___ 
|       ||    ___||   |___ |      _||  |_|  ||       ||    ___|
|   _   ||   |___ |       ||     |_ |       || ||_|| ||   |___ 
|__| |__||_______||_______||_______||_______||_|   |_||_______|                                
              to the password validator tool!
`)

reader.question('What username would you like?', function(userinput){
username=userinput
console.log(`hi there ${username}`)
let length= false
let upperCase=false
    reader.question('Please enter a password to validate:', function(input){
    let password=input
      if (password.length>=10){
        length=true;
          console.log( `
          This password is long enough!
           _  _  ____  ___  ____ 
          (( ( )(_  _)/ __)( ___)
           )  (  _)(_( (__  )__) 
          (_))_)(____)|___)(____)
          
        
    `)
        } else {
          console.log(`
        ██▓ ███▄    █   ██████ ▓█████  ▄████▄   █    ██  ██▀███  ▓█████ 
        ▓██▒ ██ ▀█   █ ▒██    ▒ ▓█   ▀ ▒██▀ ▀█   ██  ▓██▒▓██ ▒ ██▒▓█   ▀ 
        ▒██▒▓██  ▀█ ██▒░ ▓██▄   ▒███   ▒▓█    ▄ ▓██  ▒██░▓██ ░▄█ ▒▒███   -not long enough.
        ░██░▓██▒  ▐▌██▒  ▒   ██▒▒▓█  ▄ ▒▓▓▄ ▄██▒▓▓█  ░██░▒██▀▀█▄  ▒▓█  ▄ 
        ░██░▒██░   ▓██░▒██████▒▒░▒████▒▒ ▓███▀ ░▒▒█████▓ ░██▓ ▒██▒░▒████▒
        ░▓  ░ ▒░   ▒ ▒ ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░░ ▒░ ░
         ▒ ░░ ░░   ░ ▒░░ ░▒  ░ ░ ░ ░  ░  ░  ▒   ░░▒░ ░ ░   ░▒ ░ ▒░ ░ ░  ░
         ▒ ░   ░   ░ ░ ░  ░  ░     ░   ░         ░░░ ░ ░   ░░   ░    ░   
         ░           ░       ░     ░  ░░ ░         ░        ░        ░  ░
                                        ░                                 
        `)
        }
      let capitals=/[A-Z]/g

      if (password.search(capitals) !== -1){
        upperCase=true
        console.log(`
        -good job, having some Capital letters adds more security
         __   ____  ____ ____  ______   ____  _     
        /  ] /    ||    ||   ||      | /    || |    
       /  / |  o  ||  o  )  | |      ||  o  || |    
      /  /  |     ||   _/|  | |_|  |_||     || |___ 
     /   |_ |  _  ||  |  |  |   |  |  |  _  ||     |
     |     ||  |  ||  |  |  |   |  |  |  |  ||     |
      |____||__|__||__| |____|  |__|  |__|__||_____|
                                                  

      `)
      } else{
         console.log(`
        |"|      
       _|_|_  add in Capital letters to be secure
       (o o) /  
    ooO--(_)--Ooo-
    `)
      }
if (length===true && upperCase===true){
  setPassword=password
  // console.log(`your username is ${username} and password is ${setPassword}`)
  console.log("hey that's great! We've got the username and password stored for you now")

console.log(`let's practice!`)

reader.question(`What's your username?`, function(input){
if (input===username){
  console.log("nice!")
  reader.question('your secure password?', function(input){
    if (input===setPassword){

      console.log(`
You got it! Let's go!
             .--~~,___.
:-....,-------'   '._.'
 '-,,,  ,_      ;'
  _,-' ,' -__; '--.
 (_/'~~      ''''(;

      `)

    } else {
      "secure passwords can be hard to remember :( "
    }
  
  reader.close()
} 

  )}else{console.log("did you forget who you were? :/")}

})}


 
      }
    )
})
