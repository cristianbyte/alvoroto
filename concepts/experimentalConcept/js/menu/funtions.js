export async function getData(url){
    try {
        const response = await fetch(url)
        return await response.json()


    } catch (error) {
        console.log("Error en traer los datos");
    }
}


