const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('welcome to the password validator tool!')

reader.question('Please enter a password to validate:', function(input){
 let password=input
  if (password.length>=10){
      console.log( `
      This password is long enough!
      _  _  ____  ___  ____ 
      (| ( )(_  _)/ __)( ___)
       )  (  _)(_( (__  )__) 
      (_)|_)(____)|___)(____)
      
     
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

    reader.close()
  }
)