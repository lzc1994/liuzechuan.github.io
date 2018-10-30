var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Sophie.jpg') {
        myImage.setAttribute('src', 'images/Sophie3.jpg');
    }
    else if (mySrc === 'images/Sophie3.jpg') {
        myImage.setAttribute('src', 'images/Sophie2.jpg');
    }
    else if (mySrc === 'images/Sophie2.jpg') {
        myImage.setAttribute('src', 'images/Sophie4.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/Sophie.jpg');
    }
}
/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'So YOU MUST BE Crazy, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'So YOU MUST BE Crazy, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
*/