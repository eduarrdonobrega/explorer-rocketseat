import { GithubUser } from './GithubUser.js'

class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.load()
    }

    async add(username) {
        try {
            const isUserAlreadyInList = this.users.some(
                user => user.login === username
            )

            if (isUserAlreadyInList) {
                throw new Error('Usuário já adicionado!')
            }

            const user = await GithubUser.search(username)

            if (user.login == undefined) {
                throw new Error('Usuário não encontrado')
            }

            this.users = [user, ...this.users]

            this.save()
            this.update()
        } catch (error) {
            return alert(error.message)
        }
    }

    load() {
        this.users =
            JSON.parse(localStorage.getItem('@github-favorites:users')) || []
    }

    save() {
        localStorage.setItem(
            '@github-favorites:users',
            JSON.stringify(this.users)
        )
    }

    remove(login) {
        this.users = this.users.filter(user => user.login !== login)

        this.save()
        this.update()
    }
}

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

    update() {
        this.removeAllTr()

        const isEmpty = this.users.length === 0

        if (isEmpty) {
            this.tbody.classList.add('isEmpty')
        } else {
            this.tbody.classList.remove('isEmpty')
        }

        this.users.forEach(user => {
            const row = this.createRow()

            const img = row.querySelector('.user img')
            img.src = `https://github.com/${user.login}.png`
            img.alt = `Foto do perfil de ${user.name}`

            row.querySelector('a').href = `https://github.com/${user.login}`
            row.querySelector('p').textContent = user.name
            row.querySelector('span').textContent = `/${user.login}`

            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').addEventListener('click', () => {
                const confirm = window.confirm(
                    `Tem certeza que deseja remover ${user.name ?? user.login}`
                )

                if (confirm) {
                    this.remove(user.login)
                }
            })

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
          <td class="user">
            <a href="" target="_blank" rel="external">
              <img
                src="https://github.com/maykbrito.png"
                alt="Foto do perfil de Eduardo"
              />
              <div>
                <p>Mayk Brito</p>
                <span>/maykbrito</span>
              </div>
            </a>
          </td>
          <td class="repositories" >123</td>
          <td class="followers" >1234</td>
          <td>
            <button class="remove">
              <span>&times;</span><span>Remover</span>
            </button>
          </td>
          `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr:not(tr#msg-empty)').forEach(tr => {
            tr.remove()
        })
    }
}
