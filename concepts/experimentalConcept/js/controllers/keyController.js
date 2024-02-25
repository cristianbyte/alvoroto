import keyCode from "../components/keyCode.js";
import keyListener from "../components/keyListener.js";

class KeyController{
    constructor(peerId){
        this.peerId = peerId
        this.state = null
        this.keyListener = keyListener
    }
    setKeyListener(keyListener){
        this.keyListener = keyListener
    }
    init(characterController){
        this.state = characterController.state
        this.state['translation'] = { x:0 , y:0}
        this.state['rotation'] = { y:0}
        this.state['angle'] = { y:0}
    }
    tick(){
        this.state.translation.x = 0
        this.state.translation.y = 0
        this.state.rotation.y = 0
        this.state.angle.y = 0
        if(this.keyListener.isPressed(keyCode.w)) this.state.translation.y = 1
        if(this.keyListener.isPressed(keyCode.s)) this.state.translation.y = -1
        if(this.keyListener.isPressed(keyCode.a)) this.state.translation.x = 1
        if(this.keyListener.isPressed(keyCode.d)) this.state.translation.x = -1
        
        if(this.keyListener.isPressed(keyCode.LEFT_ARROW)) this.state.angle.y = 1
        if(this.keyListener.isPressed(keyCode.RIGHT_ARROW)) this.state.angle.y = -1

       
    
    }



}


const keyController = new KeyController()
export default keyController

export {KeyController}
