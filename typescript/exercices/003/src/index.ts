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
    alert(message);
  }
}