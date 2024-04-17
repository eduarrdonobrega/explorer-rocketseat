export class Router {
    routes = {}

    add({ routName, pagePath, pageClass }) {
        this.routes[routName] = { path: pagePath, pageClass }
    }

    route(event) {
        event.preventDefault()
        let el = event.currentTarget

        if (el.nodeName != 'A') {
            el = event.target
        }

        const route = el.nodeName == 'FORM' ? el.action : el.href
        window.history.pushState({}, '', route)

        this.handle()
    }

    async handle() {
        const { pathname } = window.location

        const page = this.routes[pathname] ?? this.route[404]

        const html = await fetch(page.path).then(res => res.text())

        document.querySelector('main').innerHTML = html
        document.documentElement.className = page.pageClass
    }
}
