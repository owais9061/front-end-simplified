//FIRST WAY TO ACCESS 
console.log(document.querySelector('h4'))

//SECOND WAY
console.log(document.getElementsByClassName('title'))

//Changing InnerHTML

document.querySelector('.title').innerHTML += 'CANNY CODERS 2.0'

//CHANGE CSS
document.querySelector('strong.title').style.color = 'red';

//function for dark theme SIMPLE

function changeColorToPurple(){
    console.log("Clicked !!")
    document.querySelector('h4').style.color='Purple';
}