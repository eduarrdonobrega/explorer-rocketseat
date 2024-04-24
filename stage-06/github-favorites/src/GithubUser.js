export class GithubUser {
    static async fetch(username) {
        const endpoint = `https://api.github.com/users/${username}`

        const data = await fetch(endpoint).then(res => res.json())

        return {
            login: data.login,
            name: data.name,
            profile: data.html_url,
            avatar: data.avatar_url,
            repos: data.public_repos,
            followers: data.followers,
        }
    }
}
