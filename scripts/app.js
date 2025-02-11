import { saveToStorage, getFromStorage, removeFromStorage } from "./localStorage.js";

let nameInput = document.getElementById("nameInput");
let addNameBtn = document.getElementById("addNameBtn");
let getRandomNameBtn = document.getElementById("getRandomNameBtn");
let randomNameText = document.getElementById("randomNameText");

let addAmountGroupInput = document.getElementById("addAmountGroupInput");
let getRandomGroupsBtn = document.getElementById("getRandomGroupsBtn");
let randomGroupText = document.getElementById("randomGroupText");

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
    randomNameText.innerText = '';
    randomNameText.className = 'p-2 m-7';

    if(nameInput.value != ''){
        nameAdd = nameInput.value;
        saveToStorage(nameAdd);
        nameList.innerHTML = '';

        GetNames();
        nameInput.value = '';
    }
    
})

getRandomNameBtn.addEventListener('click', () => {
    let rngName = getFromStorage();

    if(rngName.length != 0){
        let randomNumber  = Math.floor(Math.random() * rngName.length);

        randomNameText.innerText = rngName[randomNumber];
        randomNameText.className = 'bg-slate-300 rounded-lg p-2 m-4 flex justify-center items-center';
    }else{
        randomNameText.innerText = 'Sorry there are no names to randomize :( You should probably add some';
        randomNameText.className = 'bg-slate-300 rounded-lg p-2 m-4 flex justify-center items-center';
    }
    
})

getRandomGroupsBtn.addEventListener('click', () => {
    if(addAmountGroupInput.value != ''){
        let rngName = getFromStorage();
        let amountofGroups = addAmountGroupInput.value;
        Number(amountofGroups);

        if(rngName.length != 0){
            let randomNumber = Math.floor(Math.random() * rngName.length);

            let groupSize = rngName.length / amountofGroups;
            
            console.log(Math.floor(groupSize));            
    
        }else{
            randomGroupText.innerText = 'Sorry there are no names to randomize :( You should probably add some';
            randomGroupText.className = 'bg-slate-300 rounded-lg p-2 m-4 flex justify-center items-center';
        }
    }
    
})
