import { GithubUser } from './GithubUser.js'

// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.load()
    }

    load() {
        this.favorites =
            JSON.parse(localStorage.getItem('@github-favorites:favorites')) ||
            []
    }

    async add(username) {
        try {
            const isUserAlreadyInList = this.favorites.find(
                favorite => favorite.login === username
            )
            if (isUserAlreadyInList) {
                throw new Error('Usuário já adicionado!')
            }

            const user = await GithubUser.fetch(username)

            if (user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.favorites = [user, ...this.favorites]

            this.save()
            this.update()
        } catch (error) {
            alert(error.message)
        }
    }

    delete(login) {
        this.favorites = this.favorites.filter(
            favorite => favorite.login !== login
        )

        this.save()
        this.update()
    }

    save() {
        localStorage.setItem(
            '@github-favorites:favorites',
            JSON.stringify(this.favorites)
        )
    }
}

// classe que vai criar a visualização e eventos html
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = document.querySelector('tbody')

        this.update()
        this.onAdd()
    }

    onAdd() {
        const form = this.root.querySelector('form')
        const input = form.querySelector('#query')

        form.addEventListener('submit', event => {
            event.preventDefault()

            const username = input.value

            if (!username) {
                input.focus()
                return alert('Digite um usuário')
            }

            this.add(username)

            input.focus()
            input.value = ''
        })
    }

    createRow() {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td class="user">
                <a
                    href=""
                    target="_blank"
                >
                    <img
                        src=""
                        alt=""
                    />
                    <div>
                        <h2></h2>
                        <p></p>
                    </div>
                </a>
            </td>
    
            <td class="repositories"></td>
    
            <td class="followers"></td>
    
            <td>
                <button class="remove">✖</button>
            </td>
        `
        return row
    }

    update() {
        this.removeAllTr()

        this.favorites.forEach(favorite => {
            const row = this.createRow()

            row.querySelector('a').href = favorite.profile
            row.querySelector('h2').textContent = favorite.name
            row.querySelector('p').textContent = favorite.login
            row.querySelector('.repositories').textContent = favorite.repos
            row.querySelector('.followers').textContent = favorite.followers

            const img = row.querySelector('img')
            img.src = favorite.avatar
            img.alt = `Foto do perfil de ${favorite.name}`

            row.querySelector('button').addEventListener('click', () => {
                const confirm = window.confirm(
                    `Tem certeza que deseja remover ${
                        favorite.name ?? favorite.login
                    }`
                )

                if (confirm) {
                    this.delete(favorite.login)
                }
            })

            this.tbody.appendChild(row)
        })
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach(tr => tr.remove())
    }
}
