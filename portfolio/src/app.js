const username = 'eduarrdonobrega'
const repoName = 'explorer-rocketseat'
const branch = 'tree/main'
const projectsDiv = document.querySelector('.projects')

const projects = [
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232927250-4fd5b0f0-8e40-4d03-8863-addae16856d3.png',
    //   favicon:
    //     'https://raw.githubusercontent.com/eduarrdonobrega/food-explorer-frontend/main/favicon.ico',
    //   name: 'FoodExplorer',
    //   url: 'https://foodexplorer.bohr.io/',
    //   githubUrl: 'https://github.com/eduarrdonobrega/food-explorer',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232928850-af6e0d2e-1c15-4614-b6dd-e2feda0ba6b3.png',
    //   favicon:
    //     'https://raw.githubusercontent.com/eduarrdonobrega/rocketmovies-frontend/cb8ec33e5835aceab8c72411c86be219e7262733/favicon.ico',
    //   name: 'RocketMovies',
    //   url: 'https://rocketmovies.bohr.io/',
    //   githubUrl: 'https://github.com/eduarrdonobrega/rocketmovies',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232929684-de69afe2-3e6b-48de-9b71-d5e282aefaaf.png',
    //   favicon:
    //     'https://github.com/eduarrdonobrega/rocketnotes-frontend/blob/main/favicon.ico?raw=true',
    //   name: 'RocketNotes',
    //   url: 'https://rocketnotes.bohr.io/',
    //   githubUrl: 'https://github.com/eduarrdonobrega/rocketnotes',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232931762-84d71ee0-6033-4985-9b08-e3f0a5b6156f.png',

    //   name: 'SPA Universe',
    //   url: 'https://spa-universe-eight.vercel.app/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-06/spa-universe',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232934022-c6ddb543-74d0-4ba4-aca8-5236cdef1982.png',
    //   name: 'Git Fav',
    //   url: 'https://eduarrdonobrega.github.io/explorer-rocketseat/stage-06/git-fav/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-06/git-fav',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/190482232-97c60bba-3c20-4aa0-9f45-c449fd0cad9b.png',
    //   name: 'FocusTimer 2.0',
    //   favicon:
    //     'https://raw.githubusercontent.com/eduarrdonobrega/explorer-rocketseat/main/stage-05/focus-timer-2.0/favicon.ico',
    //   url: 'https://eduarrdonobrega.github.io/explorer-rocketseat/stage-05/focus-timer-2.0/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-05/focus-timer-2.0',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232935416-3a0a41d8-531a-41fb-9ec7-6ac2a3e5a31d.png',
    //   name: 'FocusTimer',
    //   favicon:
    //     'https://raw.githubusercontent.com/eduarrdonobrega/explorer-rocketseat/main/stage-05/focus-timer-2.0/favicon.ico',
    //   url: 'https://eduarrdonobrega.github.io/explorer-rocketseat/stage-05/focus-timer/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-05/focus-timer',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232936259-cfdd13ef-1640-488d-a601-9d5353a2aff8.png',
    //   name: 'Biscoito da Sorte',
    //   url: 'https://eduarrdonobrega.github.io/explorer-rocketseat/stage-05/biscoito-da-sorte/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-05/biscoito-da-sorte',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232936069-9f4370b4-b7b8-402d-9a1f-a86b5ac1435f.png',
    //   name: 'Jogo da Adivinhação',
    //   url: 'https://eduarrdonobrega.github.io/explorer-rocketseat/stage-05/jogo-da-adivinhacao/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-05/jogo-da-adivinhacao',
    // },
    // {
    //   imageUrl:
    //     'https://user-images.githubusercontent.com/87456011/232936365-fab9b5b8-4b28-4a9b-b10b-d1e76bc122c6.png',
    //   name: 'IMC',
    //   url: 'https://eduarrdonobrega.github.io/explorer-rocketseat/stage-05/imc/',
    //   githubUrl:
    //     'https://github.com/eduarrdonobrega/explorer-rocketseat/tree/main/stage-05/imc',
    // },

    {
        name: 'Cat Blog',
        path: 'stage-03/cat-blog'
    },

    {
        name: 'Galeria de Fotos',
        path: 'stage-03/photo-blog'
    },

    {
        name: 'Galaxies',
        path: 'stage-03/galaxies'
    },
    {
        name: 'Cheesecake',
        path: 'stage-03/cheesecake'
    },
    {
        name: 'Responsivo',
        path: 'stage-03/responsivo'
    },
    {
        name: 'Space Cream',
        path: 'stage-03/space-cream'
    },
    {
        name: 'Macbook Card',
        path: 'stage-03/macbook-card'
    },
    {
        name: 'Formulário Avaliação',
        path: 'stage-03/form-avaliacao'
    },
    {
        name: 'Formulário Mentoria',
        path: 'stage-03/form-mentoria'
    },
    {
        name: 'Formulário Evento',
        path: 'stage-03/form-evento'
    },
    {
        name: 'Rocket.sect',
        path: 'stage-02/rocket-sect'
    },
    {
        name: 'Treine.me',
        path: 'stage-02/treine-me'
    },
    {
        name: 'Flutar',
        path: 'stage-02/recriando-layout'
    },
    {
        name: 'Arquitetura',
        path: 'stage-02/projeto-01'
    }
]
projects.forEach((project, index) => {
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const projectImg = document.createElement('img')
    const projectName = document.createElement('h2')
    const projectUrl = document.createElement('a')
    const projectUrlGithub = document.createElement('a')

    const githubUrl = `https://github.com/${username}/${repoName}/${branch}/${project.path}`
    const url = `https://${username}.github.io/${repoName}/${project.path}/`

    projectImg.setAttribute('src', `./assets/${project.path.slice(9)}.jpg`)
    projectName.innerText = project.name
    console.log(index)
    div.style.setProperty('--delay', `${(index + 1) * 2}00ms`)

    projectUrl.innerHTML = '<i class="ph-link-thin"></i>'
    projectUrl.setAttribute('href', url)
    projectUrl.setAttribute('target', '_blank')

    projectUrlGithub.innerHTML = '<i class="ph-github-logo"></i>'
    projectUrlGithub.setAttribute('href', githubUrl)
    projectUrlGithub.setAttribute('target', '_blank')

    div.className = 'project'
    div2.className = 'project__info'
    div3.className = 'project__info_text'
    div4.className = 'project__links'

    // Ger favicon
    const projectFavicon = document.createElement('img')
    projectFavicon.className = 'project__info_favicon'
    projectFavicon.setAttribute(
        'src',
        `https://github.com/${username}/${repoName}/blob/main/${project.path}/favicon.ico?raw=true`
    )
    div3.appendChild(projectFavicon)

    div.appendChild(projectImg)
    div.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(projectName)
    div3.appendChild(projectUrl)
    div3.appendChild(div4)
    div4.appendChild(projectUrl)
    div4.appendChild(projectUrlGithub)

    projectsDiv.appendChild(div)
})
