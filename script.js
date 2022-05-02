// DOM Elements
const resultEl1 = document.getElementById("result1");
const resultEl2 = document.getElementById("result2");
const resultEl3 = document.getElementById("result3");
const resultEl4 = document.getElementById("result4");
const lengthEL = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate-btn");
const clipboardEl1 = document.getElementById("clipboard1");
const clipboardEl2 = document.getElementById("clipboard2");
const clipboardEl3 = document.getElementById("clipboard3");
const clipboardEl4 = document.getElementById("clipboard4");


// keeping all functions in an object.
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate Event listener.
generateEl.addEventListener("click" , () => {
    const length = +lengthEL.value;  //to convert string to a number type of length aaa + .
     //console.log(typeof length);

     const hasUpper = uppercaseEl.checked; //stores true or false value.
     const hasLower = lowercaseEl.checked;
     const hasNumber = numbersEl.checked;
     const hasSymbol = symbolsEl.checked;

     //console.log(hasUpper, hasLower, hasNumber, hasSymbol);
     resultEl1.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length); //1st
     resultEl2.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
     resultEl3.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
     resultEl4.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
    });

    //copy to clipboard starts.
    clipboardEl1.addEventListener("click",copyToClipboard1);
    clipboardEl2.addEventListener("click",copyToClipboard2);
    clipboardEl3.addEventListener("click",copyToClipboard3);
    clipboardEl4.addEventListener("click",copyToClipboard4);


    function copyToClipboard1(){
        const textarea1 = document.createElement("textarea");
        const password1 = resultEl1.innerText;

        if(!password1){
            return;
        }

        textarea1.value = password1;
        document.body.appendChild(textarea1);
        textarea1.select();
        document.execCommand("copy");           //navigator.clipboard.writeText(textarea.value);
        textarea1.remove();
        
        alert("Password copied to clipboard");

    };

    function copyToClipboard2(){
        const textarea2 = document.createElement("textarea");
        const password2 = resultEl2.innerText;

        if(!password2){
            return;
        }

        textarea2.value = password2;
        document.body.appendChild(textarea2);
        textarea2.select();
        document.execCommand("copy");           //navigator.clipboard.writeText(textarea.value);
        textarea2.remove();

        alert("Password copied to clipboard");

    };

    function copyToClipboard3(){
        const textarea3 = document.createElement("textarea");
        const password3 = resultEl3.innerText;

        if(!password3){
            return;
        }

        textarea3.value = password3;
        document.body.appendChild(textarea3);
        textarea3.select();
        document.execCommand("copy");           //navigator.clipboard.writeText(textarea.value);
        textarea3.remove();

        alert("Password copied to clipboard");

    };

    function copyToClipboard4(){
        const textarea4 = document.createElement("textarea");
        const password4 = resultEl4.innerText;

        if(!password4){
            return;
        }

        textarea4.value = password4;
        document.body.appendChild(textarea4);
        textarea4.select();
        document.execCommand("copy");           //navigator.clipboard.writeText(textarea.value);
        textarea4.remove();

        alert("Password copied to clipboard");

    };
    //copy to clipboard ends.

    //Generate password function.
    function generatePassword(upper, lower, number, symbol, length){    //2nd  //will receive true r false.
        //1. Initalize pw var.
        //2. Filter out unchecked types.
        //3. Loop over length call generator function for each type.
        //4. Add final pw to the pw var and return.

        let generatedPassword = "";

        const typesCount = lower + upper + number + symbol;
        //console.log('typesCount: ', typesCount);

        const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
        //console.log("typesArr :", typesArr);

        if(typesCount === 0){
            return '';
        }

        for(let i = 0; i < length; i += typesCount){
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];   //will store selected / checked functions.  ex: numbers & symbols.
                //console.log("funcName :", funcName);

                generatedPassword += randomFunc[funcName]();  //calling object.   
            })
        }

        //console.log(generatedPassword.slice(0, length));

        const finalPassword = generatedPassword.slice(0, length);
        return finalPassword;

    }



//Generator functions

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
   const symbols = '@#$%^&*(){}[]=<>/,.';
   return symbols[Math.floor(Math.random() * symbols.length)];  //In js v can get character of a string , like u could do with an array.
}

//console.log(getRandomSymbol());

