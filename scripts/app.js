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
        removeBtn.className = 'bg-red-700 rounded-lg p-2 m-2 cursor-pointer flex justify-between hover:bg-red-800';
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
    let rngName = getFromStorage();
    let amountofGroups = addAmountGroupInput.value;
    Number(amountofGroups);

    if(rngName.length != 0 && addAmountGroupInput.value != '' && amountofGroups < rngName.length){
        let randomNumber = Math.floor(Math.random() * rngName.length);

        let groupSize = rngName.length / amountofGroups;
            
        console.log(Math.floor(groupSize));

        //amount of groups = input
        //total amout of people = rngName.length
        //number of people in each group = groupSize

        //i have to find a way of putting people in each group
        //the same person connot be in mulitple groups
        //groups connot have one person



        randomGroupText.innerText = 'Incomplete';
        randomGroupText.className = 'bg-slate-300 rounded-lg p-2 m-4 flex justify-around items-center';
    }else{
        randomGroupText.innerText = 'Sorry. Please make sure there are added people, entered something in the input field, and that the number input was not higher than the amount of people :( ';
        randomGroupText.className = 'bg-slate-300 rounded-lg p-2 m-4 flex justify-center items-center';
    }
    
})
