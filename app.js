//Select Elements

const usernameInput = document.querySelector("#githubname");
const githubForm = document.querySelector("#github-form");
const clearButton = document.querySelector("#clear-last-users");


const ui = new UI();
const git = new GitHubAPI();
const strg = new Storage();


eventListeners();

function eventListeners() {

    githubForm.addEventListener("submit", getUser);
    window.addEventListener("DOMContentLoaded", addSearches);
    clearButton.addEventListener("click", clearAllUsers);

}

function getUser(e) {
    let username = usernameInput.value.trim();
    if (username === "") {
        ui.displayMessages("danger", "Username is empty!");
    } else {
    git.getGitHubData(username)
        .then(resp=>{
            ui.addUser(resp.user.avatar_url, resp.user.name, resp.user.bio, resp.user.followers, resp.user.following, resp.user.repos_url);
            ui.clearAll();
            for (let el of resp.repo) {
                ui.addRepo(el.name, el.stargazers_count, el.forks, el.html_url);
            }
            strg.saveSearchedUser(username);
            const users = strg.getUsersFromStorage();
            ui.addSeachedUsers(users);
            ui.clearInput();
        })
        .catch(err => {
            ui.displayMessages("danger", "Username is invalid!");
            console.error(err);
        });
    }
    e.preventDefault();
}

async function addSearches(e) {
    await ui.addSeachedUsers(strg.getUsersFromStorage());
}

async function clearAllUsers(e) {
    await ui.clearAll();
    await strg.removeAllUsers();
}
