interface GithubUserResponse {
  id: number,
  login: string,
  name: string,
  bio: string,
  public_repos: number,
  repos_url: string,
  message?: "Not Found"
}

interface GithubRepoResponse {
  name: string,
  description: string,
  stargazers_count: number
}

const users: GithubUserResponse[] = [];

async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const user: GithubUserResponse = await response.json();

    if (user.message) {
      console.log(`User not found.`);
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