/*------------------1------------------*/ 
let age = prompt("How old are you?", 1);
if (+age <= 17){
    alert("Do you study at school?");
} else if (17 < +age && +age < 25){
    alert("Do you study at university?");
} else if (+age >= 25 && +age < 60){
    alert("Do you have a job?");
} else{
    alert("What are you doing?");
}

/*------------------2------------------*/ 
let displayValue = prompt('Write a display property:')
switch(displayValue){
    case 'block':
        alert('Set display: block;');
        break;
    case 'flex':
        alert('Set display: flex;');
        break;
    case 'grid':
        alert('Set display: grid;');
        break;
    case 'inline':
        alert('Set display: inline;');
        break;
    case 'none':
        alert('Set display: none;');
        break;
    default:
        alert('Set display: inline-block;');
}
/*------------------3------------------*/ 
let number = prompt('Please enter the number:');
number = Number(number);
while(isNaN(number)){
    number = prompt('Your number is incorect, please enter corect number');
} 
alert(`Number ${number} times 12 equals: ${number * 12}`);

/*------------------4------------------*/ 
let numbers = 50;
for(let i = 2; i <= numbers; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}





