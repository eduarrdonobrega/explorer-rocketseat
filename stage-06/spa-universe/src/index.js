import { Router } from './router.js'

const router = new Router()

router.add({ routName: '/', pagePath: './pages/home.html', pageClass: 'home' })
router.add({
    routName: '/universe',
    pagePath: './pages/universe.html',
    pageClass: 'universe',
})
router.add({
    routName: '/explorer',
    pagePath: './pages/explorer.html',
    pageClass: 'explorer',
})
router.add({ routName: 404, pagePath: './pages/404.html', pageClass: '' })

const links = document.querySelectorAll('a')

links.forEach(link => link.addEventListener('click', e => router.route(e)))

router.handle()

document.querySelector('main').addEventListener('submit', e => router.route(e))
