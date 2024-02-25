const app = document.getElementById('app')

async function loadPages(){
    const data = await fetch('../database/database.json')
    const response = await data.json()
    return response
}

(async () => {
    const pages = await loadPages();
    pages.forEach((page) => {
        const iframe = document.createElement('iframe')
        iframe.src = page.url
        app.appendChild(iframe)
        let name = page.name
        let link = page.url
        console.log(name,link);
    })
})();