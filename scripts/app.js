import { saveToStorage, getFromStorage, removeFromStorage } from "./localStorage.js";

let nameInput = document.getElementById("nameInput");
let addNameBtn = document.getElementById("addNameBtn");
let getRandomNameBtn = document.getElementById("getRandomNameBtn");
let randomNameText = document.getElementById("randomNameText");

let addGroupSizeInput = document.getElementById("addGroupSizeInput");
let getRandomGroupsBtn = document.getElementById("getRandomGroupsBtn");
let nameList = document.getElementById("nameList");

let nameAdd = '';

const GetNames = () => {
    let storedName = getFromStorage();

    storedName.map(givenname => {

        let p = document.createElement('p');
        p.className = "m-4 flex justify-between items-center border-t-2";
        p.innerText = `${givenname}`;

        let removeBtn = document.createElement('i');
        removeBtn.type = 'button';
        removeBtn.className = 'bg-red-700 rounded-lg p-2 m-2 cursor-pointer flex justify-between';
        removeBtn.innerText = 'delete';

        removeBtn.addEventListener('click', () => {
            removeFromStorage(givenname);
            p.remove();
            
        })

        p.appendChild(removeBtn);

        nameList.appendChild(p);
    })

}
GetNames();

addNameBtn.addEventListener('click', () => {
    if(nameInput.value != ''){
        nameAdd = nameInput.value;
        saveToStorage(nameAdd);
        nameList.innerHTML = '';

        GetNames();
        nameInput.value = '';
    }else{
        nameList.innerHTML = '';
        GetNames();
    }
    
})

getRandomNameBtn.addEventListener('click', () => {
    let rngName = getFromStorage();
    let randomNumber  = Math.floor(Math.random() * rngName.length);

    randomNameText.innerText = rngName[randomNumber];
    randomNameText.className = 'bg-slate-300 rounded-lg p-2 m-4 flex justify-center items-center';
})


