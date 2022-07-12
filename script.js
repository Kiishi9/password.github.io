let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBtn = document.getElementById("password-btn")
let password = "";
let passwordLength = 10;
let passwordTwo = "";
let copyBtn = document.getElementById("copy-btn");
let copy = document.getElementById("copy")

function generatePassword(){
    password = "";
    passwordTwo = "";
    for ( let i = 0; i < passwordLength; i++){
        let generateOne = characters[Math.floor(Math.random() * characters.length)];
        password += generateOne
    }
    document.getElementById("display").value = password;

    for ( let i = 0; i < passwordLength; i++){
        let generateTwo = characters[Math.floor(Math.random() * characters.length)];
        passwordTwo += generateTwo
    }
    document.getElementById("display-two").value = passwordTwo;

}


copyBtn.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = display.value;
	
	if(!password)
     { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	textarea.remove();
	alert('Password copied to clipboard');
});

copy.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = display.value;
	
	if(!password)
     { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	textarea.remove();
	alert('Password copied to clipboard');
});




