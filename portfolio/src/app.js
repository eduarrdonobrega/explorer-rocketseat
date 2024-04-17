const username = 'eduarrdonobrega'
const repoName = 'explorer-rocketseat'
const branch = 'tree/main'
const projectsDiv = document.querySelector('.projects')

const projects = [
    {
        name: 'SPA Universe',
        path: 'stage-06/spa-universe',
        url: 'https://spa-universe-eight.vercel.app/',
    },
    {
        name: 'FocusTimer 2.0',
        path: 'stage-05/focus-timer-2.0',
    },
    {
        name: 'FocusTimer',
        path: 'stage-05/focus-timer',
    },
    {
        name: 'IMC',
        path: 'stage-05/imc',
    },
    {
        name: 'Biscoito da sorte',
        path: 'stage-05/biscoito-da-sorte',
    },
    {
        name: 'Jogo da Adivinhação',
        path: 'stage-05/jogo-da-adivinhacao',
    },

    {
        name: 'Explore sem Limites',
        path: 'stage-03/explore-sem-limites',
    },
    {
        name: 'Cat Blog',
        path: 'stage-03/cat-blog',
    },
    {
        name: 'Galeria de Fotos',
        path: 'stage-03/photo-blog',
    },

    {
        name: 'Galaxies',
        path: 'stage-03/galaxies',
    },
    {
        name: 'Cheesecake',
        path: 'stage-03/cheesecake',
    },
    {
        name: 'Responsivo',
        path: 'stage-03/responsivo',
    },
    {
        name: 'Space Cream',
        path: 'stage-03/space-cream',
    },
    {
        name: 'Macbook Card',
        path: 'stage-03/macbook-card',
    },
    {
        name: 'Formulário Avaliação',
        path: 'stage-03/form-avaliacao',
    },
    {
        name: 'Formulário Mentoria',
        path: 'stage-03/form-mentoria',
    },
    {
        name: 'Formulário Evento',
        path: 'stage-03/form-evento',
    },
    {
        name: 'Rocket.sect',
        path: 'stage-02/rocket-sect',
    },
    {
        name: 'Treine.me',
        path: 'stage-02/treine-me',
    },
    {
        name: 'Flutar',
        path: 'stage-02/recriando-layout',
    },
    {
        name: 'Arquitetura',
        path: 'stage-02/projeto-01',
    },
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
    const url = project.url ?? `https://${username}.github.io/${repoName}/${project.path}/`

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

    // Get favicon
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
