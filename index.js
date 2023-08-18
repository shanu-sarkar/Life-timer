let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContaintEl = document.getElementById("settingContaint");
const ilsialTextEl = document.getElementById("ilsialText");
const afterDOBBtnTextEl = document.getElementById("afterDOBBtnText");
const dobButtonEl = document.getElementById("dobButton");
const dobinputEl = document.getElementById("dobinput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const seceodEl = document.getElementById("seceod");

const makeTwoDigitNumber = (number) =>{
    return number > 9 ? number : `0${number}`
}

const toggleDateOfBirthSelector = () => {

    if(isDOBOpen){
        settingContaintEl.classList.add('hide');
    }else{
        settingContaintEl.classList.remove('hide');
    };
    isDOBOpen = !isDOBOpen
    console.log("Toggle",isDOBOpen);
};
const updateAge = () =>{
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth
    const year = Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365) % 12);
    const day = Math.floor(dateDiff/(1000 * 60 * 60 * 24) % 30);
    const hour = Math.floor(dateDiff/(1000 * 60 * 60 ) % 24);
    const minute = Math.floor(dateDiff/(1000 * 60) % 60);
    const seceod = Math.floor(dateDiff/1000 % 60);
    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day); //cc
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    seceodEl.innerHTML = makeTwoDigitNumber(seceod);
}

const setDOBHandler = () => {
    const dateString = dobinputEl.value;

    dateOfBirth = dateString ? new Date(dateString) : null;
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const date = localStorage.getItem("day");
    if(year && month && date){
        // console.log({
        //     year,
        //     month,
        //     date});
        // dateOfBirth = new Date(year, month, date);
    }

    if(dateOfBirth){
        localStorage.setItem("year",dateOfBirth.getFullYear());
        localStorage.setItem("month",dateOfBirth.getMonth());
        localStorage.setItem("day",dateOfBirth.getDay());
        ilsialTextEl.classList.add("hide");
        afterDOBBtnTextEl.classList.remove("hide");
        // updateAge()
        setInterval( () => updateAge(),1000);
    }else{
        afterDOBBtnTextEl.classList.add("hide");
        ilsialTextEl.classList.remove("hide");
    }
};

setDOBHandler();



settingCogEl.addEventListener('click',toggleDateOfBirthSelector);
dobButtonEl.addEventListener('click',setDOBHandler);