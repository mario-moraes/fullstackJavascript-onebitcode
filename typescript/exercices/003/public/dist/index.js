var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const users = [];
function fetchUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${username}`);
        const user = yield response.json();
        if (user.message) {
            console.log('User not found.');
        }
        else {
            users.push(user);
            console.log(`The user ${user.login} was saved.
        - ID: ${user.id}
        - Login: ${user.login}
        - Name: ${user.name}
        - Bio: ${user.bio}
        - Public repos: ${user.public_repos}`);
        }
    });
}
function showUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = users.find(user => user.login === username);
        if (typeof user === 'undefined') {
            console.log('user not found.');
        }
        else {
            const response = yield fetch(user.repos_url);
            const repos = yield response.json();
            let message = `id: ${user.id}
      login: ${user.login}
      Name: ${user.name}
      Bio: ${user.bio}
      Public repos: ${user.public_repos}`;
            repos.forEach(repo => {
                message += `Name: ${repo.name}
        Description: ${repo.description}
        Stars: ${repo.stargazers_count}
        Is a fork: ${repo.fork ? 'Yes' : 'No'}`;
            });
            console.log(message);
        }
    });
}
function showAllUsers() {
    let message = `Users:\n`;
    users.forEach((user) => {
        message += `\n- ${user.login}`;
    });
    console.log(message);
}
function showReposTotal() {
    const reposTotal = users.reduce((acc, user) => {
        return acc + user.public_repos;
    }, 0);
    console.log(`The group has a total of ${reposTotal} public repositories`);
}
function showTopFive() {
    const topFive = users.slice().sort((a, b) => {
        return b.public_repos - a.public_repos;
    }).slice(0, 5);
    let message = `Top 5 users with more public repositores: \n`;
    topFive.forEach((user, index) => {
        return message += `\n${index + 1} - ${user.login}: ${user.public_repos}`;
    });
    console.log(message);
}
// testing
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchUser('isaacpontes');
        yield fetchUser('julianaconde');
        yield fetchUser('pcaldass');
        yield fetchUser('lucasqueirogaa');
        yield fetchUser('frans203');
        yield fetchUser('LeDragoX');
        yield showUser('isaacpontes');
        yield showUser('julianaconde');
        showAllUsers();
        showReposTotal();
        showTopFive();
    });
}
main();
