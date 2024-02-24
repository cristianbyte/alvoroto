const app = document.getElementById('app')

async function loadPages(){
    const data = await fetch('../database/database.json')
    const response = await data.json()
    return response
}

(async () => {
    const pages = await loadPages();
    for (const [key, value] of Object.entries(pages)) {
        const iframe = document.createElement('iframe')
        iframe.src = value
        iframe.addEventListener('click',()=>{
            window.location.href = value;
        })
        app.appendChild(iframe)
        console.log(`${key}: ${value}`);
    }
})();