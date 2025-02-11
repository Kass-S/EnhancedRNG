const saveToStorage = (givenname) => {
    let nameArr = getFromStorage();

    if(!nameArr.includes(givenname)){
        nameArr.push(givenname);
    }
    localStorage.setItem('SavedName', JSON.stringify(nameArr));
}

const getFromStorage = () => {
    let localStorageData = localStorage.getItem('SavedName');

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const removeFromStorage = (givenname) => {
    let localStorageData = getFromStorage();
    let nameIndex = localStorageData.indexOf(givenname);

    localStorageData.splice(nameIndex, 1);

    localStorage.setItem('SavedName', JSON.stringify(localStorageData));
}

export { saveToStorage, getFromStorage, removeFromStorage}