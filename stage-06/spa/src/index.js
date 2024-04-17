import { Router } from './router.js'

const router = new Router()

router.add('/', './pages/home.html')
router.add('/about', './pages/about.html')
router.add('/contact', './pages/contact.html')
router.add(404, './pages/404.html')

const links = document.querySelectorAll('nav a')
links.forEach(link => link.addEventListener('click', e => router.route(e)))

router.handle()

window.addEventListener('popstate', () => router.handle())
