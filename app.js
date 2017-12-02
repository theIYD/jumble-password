console.log('App is running.');

const remote = require('electron').remote;

const form = document.querySelector('#form');
const submit = document.querySelector('#submitBtn');
const passDiv = document.querySelector('#password');
const closeBtn = document.querySelector('#close');

form.addEventListener('submit', init);
closeBtn.addEventListener('click', () => {
    remote.getCurrentWindow().close();
});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function init(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let dob = e.target[1].value;

    //console.log(name,dob);
    if(isNaN(name) && dob) {
        if(parseDate(dob)) {
            createPassword(name, dob);
        } else {
            alert('Something is wrong.');
            form.reset();
        }
    } else {
        alert('Something is wrong.');
        form.reset();
    }
}

function parseDate(str){
    const t = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if(t!==null){
      let d=+t[1], m=+t[2], y=+t[3];
      let date = new Date(y,m-1,d);
      if(date.getFullYear()===y && date.getMonth()===m-1){
        return true;   
      }
    }
    return false;
}

function createPassword(nameEntered, dateEntered) {
    //console.log('createPassword method');
    let name = nameEntered.replaceAll(' ', '').toLowerCase().trim().split(/(?!$)/);
    let dob = dateEntered.replaceAll('/', '').trim().split(/(?!$)/);

    let currentArray = name.concat(dob);
    let shuffledArray = shuffle(currentArray).toString().replaceAll(',', '');

    passDiv.innerText = shuffledArray;
}

//Fisher Yates Shuffle Algorithm
function shuffle(arr) {
    let currentIndex = arr.length
    , temporaryValue
    , randomIndex
    ;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
  return arr;
}