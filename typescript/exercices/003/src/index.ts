interface GithubUserResponse {
  id: number,
  login: string,
  name: string,
  bio: string,
  public_repos: number,
  repos_url: string,
  message?: 'Not Found'
}

interface GithubRepoResponse {
  name: string,
  description: string,
  fork: boolean,
  stargazers_count: number
}

const users: GithubUserResponse[] = [];

async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const user: GithubUserResponse = await response.json();

    if (user.message) {
      console.log('User not found.');
    } else {
      users.push(user);
      
      console.log(
        `The user ${user.login} was saved.
        - ID: ${user.id}
        - Login: ${user.login}
        - Name: ${user.name}
        - Bio: ${user.bio}
        - Public repos: ${user.public_repos}`
        )
    }
}

async function showUser(username: string) {
  const user = users.find(user => user.login === username);
  
  if (typeof user === 'undefined') {
    console.log('user not found.');
  } else {
    const response = await fetch(user.repos_url);
    const repos: GithubRepoResponse[] = await response.json();
    
    let message = `id: ${user.id}
      login: ${user.login}
      Name: ${user.name}
      Bio: ${user.bio}
      Public repos: ${user.public_repos}`

    repos.forEach(repo => {
      message += `Name: ${repo.name}
        Description: ${repo.description}
        Stars: ${repo.stargazers_count}
        Is a fork: ${repo.fork ? 'Yes' : 'No'}`
    })
    console.log(message);
  }
}

function showAllUsers() {
  let message = `Users:\n`;
  users.forEach((user) => {
    message += `\n- ${user.login}`
  });
  console.log(message);
}

function showReposTotal() {
  const reposTotal = users.reduce((acc, user) => {
    return acc + user.public_repos
  }, 0);
  console.log(`The group has a total of ${reposTotal} public repositories`);
}

function showTopFive() {
  const topFive = users.slice().sort((a, b) => {
    return b.public_repos - a.public_repos
  }).slice(0,5);

  let message = `Top 5 users with more public repositores: \n`

  topFive.forEach((user, index) => {
    return message += `\n${index+1} - ${user.login}: ${user.public_repos}`
  });
  console.log(message);
}

// testing

async function main() {
  await fetchUser('isaacpontes')
  await fetchUser('julianaconde')
  await fetchUser('pcaldass')
  await fetchUser('lucasqueirogaa')
  await fetchUser('frans203')
  await fetchUser('LeDragoX')

  await showUser('isaacpontes')
  await showUser('julianaconde')

  showAllUsers()
  showReposTotal()
  showTopFive()
}

main()
