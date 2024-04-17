export class Router {
    routes = {}

    add(routeName, pagePath) {
        this.routes[routeName] = pagePath
    }

    route(event) {
        event.preventDefault()

        const link = event.target

        window.history.pushState({}, '', link.href)

        this.handle()
    }

    async handle() {
        const { pathname } = window.location
        
        const path = this.routes[pathname] ?? this.routes[404]

        const html = await fetch(path).then(res => res.text())

        document.getElementById('app').innerHTML = html
    }
}
