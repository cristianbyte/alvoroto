import camera from "./camera.js";

class Resize{
    constructor(){
        this.renderer = null
    }
    start(renderer){
        this.renderer = renderer
        window.addEventListener("resize", this.resize.bind(this))
    }
    stop(){
        window.addEventListener("resize", this.resize.bind(this))
    }
    resize(){
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)

    }
}

const resize = new Resize()

export default resize
