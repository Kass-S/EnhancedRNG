import { saveToStorage, getFromStorage, removeFromStorage } from "./localStorage.js";

let nameInput = document.getElementById("nameInput");
let addNameBtn = document.getElementById("addNameBtn");

let nameList = document.getElementById("nameList");

let nameAdd = '';

addNameBtn.addEventListener('click', () => {
    nameAdd = nameInput.value;
    saveToStorage(nameAdd);
    GetNames();
    nameInput.value = '';
})


const GetNames = () => {
    let storedName = getFromStorage();

    storedName.map(givenname => {
        console.log(givenname);

        let p = document.createElement('p');
        p.className = "";
        p.innerText = `${givenname}`;

        let removeBtn = document.createElement('i');
        removeBtn.type = 'button';
        removeBtn.className = 'bg-red-800 m-2';
        removeBtn.innerText = 'delete';

        removeBtn.addEventListener('click', () => {
            removeFromStorage(givenname);
            p.remove();
            
        })

        p.appendChild(removeBtn);

        nameList.appendChild(p);
    })

}