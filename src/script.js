const app = document.getElementById('app')

async function loadPages(){
    const data = await fetch('../database/database.json')
    const response = await data.json()
    return response
}

(async () => {
    const pages = await loadPages();
    pages.forEach((page) => {
        const redirect = document.createElement('a')
        const iframe = document.createElement('iframe')
        redirect.href = page.url
        redirect.classList.add('overlay')
        redirect.target = '_blanck'
        iframe.src = page.url
        redirect.appendChild(iframe)
        app.appendChild(redirect)
        let name = page.name
        let link = page.url
    })
})();