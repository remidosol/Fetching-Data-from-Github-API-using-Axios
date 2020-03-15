
function GitHubAPI() {

    this.instance = axios.create({
        baseURL: ``,
        headers: {'Content-type': 'application/json'}
    });
}

GitHubAPI.prototype.getGitHubData = async function(username){
    const responseUser = `https://api.github.com/users/${username}`;
    const responseRepo = `https://api.github.com/users/${username}/repos`;
    this.instance.method = 'get';
    const userData = await this.instance.get(responseUser, this.instance.headers);
    const repoData = await this.instance.get(responseRepo, this.instance.headers);
    return {user:userData.data, repo:repoData.data};
};
