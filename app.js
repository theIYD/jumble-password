console.log('App is running.');

const remote = require('electron').remote;
const shell = require('electron').shell;
const Jumble = require('./api/api');

const form = document.querySelector('#form');
const submit = document.querySelector('#submitBtn');
const reset = document.querySelector('#resetBtn');
const passDiv = document.querySelector('#password');
const author = document.querySelector('#author');
const closeBtn = document.querySelector('#close');

form.addEventListener('submit', init);
author.addEventListener('click', () => {
    shell.openExternal('https://theiyd.github.io/theidrees.me/');
});

closeBtn.addEventListener('click', () => {
    remote.getCurrentWindow().close();
});

function init(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let dob = e.target[1].value;

    if(isNaN(name) && dob) {
        if(parseDate(dob)) {
            const pwd = new Jumble().createPassword(name, dob);
            passDiv.innerText = pwd;
        } else {
            alert('Error: There is an error in the date format.');
            form.reset();
        }
    } else {
        alert('Something\'s not correct.');
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
//create function Cleare
function cls(){
document.getElementById('pas').innerHTML = '';
}
