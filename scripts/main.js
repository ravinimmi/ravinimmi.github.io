//var myImage = document.querySelector('img');

//myImage.onclick = function() {
    //var mySrc = myImage.getAttribute('src');
    //if(mySrc === 'images/a.png') {
      //myImage.setAttribute ('src','images/cool.jpg');
    //} else {
      //myImage.setAttribute ('src','images/a.png');
    //}
//}

//var myButton = document.querySelector('button');
//var myHeading = document.querySelector('h1');

//function setUserName() {
  //var myName = prompt('Please enter your name.');
  //localStorage.setItem('name', myName);
  //myHeading.textContent = 'Mozilla is cool, ' + myName;
//}

//if(!localStorage.getItem('name')) {
  //setUserName();
//} else {
  //var storedName = localStorage.getItem('name');
  //myHeading.textContent = 'Mozilla is cool, ' + storedName;
//}
var multiply = function()
{
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  var sum = document.getElementById('product');
  var s = parseInt(num1.value) * parseInt(num2.value);
  sum.value = s;
}

var myButton = document.getElementById("multiply_button");
myButton.onclick = function() {
	multiply();
}


