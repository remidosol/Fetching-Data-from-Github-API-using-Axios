
function UI(){
    this.usernameInput = document.querySelector("#githubname");
    this.profile = document.querySelector("#profile");
    this.repos = document.querySelector("#repos");
    this.lastUsers = document.querySelector("#last-users");
    this.lastUsers = document.querySelector("#last-users");

}

UI.prototype.displayMessages = function (type, message){
    const cardBody = document.querySelector(".search.card.card-body");
    const alert = document.createElement("div");
    const button = document.createElement("button");

    alert.className = `alert alert-${type} alert-dismissible`;
    alert.innerHTML = `<em>${message}</em>`;

    button.type = "button";
    button.className = "close";
    button.innerHTML = `&times;`;

    alert.appendChild(button);
    cardBody.appendChild(alert);

    button.addEventListener("click", function () {
        alert.remove();
    });

    setTimeout(function () {
        alert.remove();
    }, 5000);
};

UI.prototype.addUser = function (avatar_url, name, bio, followers, following, repos_url) {
    this.profile.innerHTML = `<div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2" src="${avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${name}</strong></div>
                         <hr>
                         <div id="bio">${bio}</div>
                        <hr>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Followers  <span class="badge badge-light">${followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Following  <span class="badge badge-light">${following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repos  <span class="badge badge-light">${repos_url}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company"></span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location"></a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="email"></span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>`;
};

UI.prototype.addRepo = function (repoName, stargazers_count, forks, url) {
    this.repos.innerHTML += `<div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${url}" target = "_blank" id = "repoName">${repoName}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Stars  <span class="badge badge-light" id="repoStar">${stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forks  <span class="badge badge-light" id ="repoFork">${forks}</span>
                            </button>
                    
                        </div>
                </div>

                </div>`;
};

UI.prototype.addSeachedUsers = function (users) {
    for(let i=0; i<users.length; i++){
        this.lastUsers.innerHTML += `<li class="list-group-item">${users[i]}</li>`;
    }
};

UI.prototype.clearAll = function () {
    this.lastUsers.innerHTML = "";
    // this.profile.innerHTML = "";
    this.repos.innerHTML = "";
};

UI.prototype.clearInput = function () {
    this.usernameInput.value = "";
};

