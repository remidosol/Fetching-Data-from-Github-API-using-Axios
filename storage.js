
function Storage() {

}

Storage.prototype.saveSearchedUser = function (newUser) {

    let users = this.getUsersFromStorage();

    let userName = usernameInput.value;
    let exist = false;

    for(let i = 0; i<users.length; i++){
        if(users[i] === userName){
            exist = true;
            break;
        }
    }

    if(!exist){
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    }
};


Storage.prototype.getUsersFromStorage = function () {
    let users;

    if (localStorage.getItem("users") === null){
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
};


Storage.prototype.removeAllUsers = function () {
    localStorage.clear();
};