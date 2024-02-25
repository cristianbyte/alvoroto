import loopMachine from "../components/loopMachine.js";

class CharacterController{
    constructor(){
        this.controller = {}
        this.character = null
        this.state = {}
    }
    addController(controller){
        this.controller[controller.constructor.name] = controller
    }
    removeController(){
        delete this.controller[controller.constructor.name]
    }

    addCharacter(character){
        this.character = character
    }
    start(){
        Object.keys(this.controller).forEach(key =>{
            this.controller[key].init(this)
        })
        loopMachine.addCallback(this.tick)
    }
    tick = ()=>{
        Object.keys(this.controller).forEach(key=>{
            this.controller[key].tick()
        })
    }
    stop(){
        Object.keys(this.controller).forEach(key =>{
            if(this.controller[key].hasOwnProperty('stop')){
                this.controller[key].stop(this)
            }
        })
        loopMachine.removeCallback(this.tick)
        this.controller = {}
    }

}

const characterController = new CharacterController()

export default characterController

export {CharacterController}

