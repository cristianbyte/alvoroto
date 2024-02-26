class KeyListener{
    constructor(caster){
        this.keys = {}
        this.caster = caster || console.log;
    }
    setCaster(caster){
        this.caster = caster
    }
    down = (e) =>{
        if(this.keys[e.keyCode]) return
        this.keys[e.keyCode] = true
        this.caster([e.keyCode, true, this.keys])
    }
    up = (e)=>{
        this.keys[e.keyCode]= false
        this.caster([e.keyCode, false, this.keys])
    }
    isPressed(keyCode){
        return (this.keys[keyCode]) ? this.keys[keyCode] : false
    }

    start(){
        this.stop()
        window.addEventListener('keydown', this.down)
        window.addEventListener('keyup', this.up)
    }
    stop(){
        window.removeEventListener('keydown',this.down)
        window.removeEventListener('keyup',this.up)
    }
}
const keyListener = new KeyListener()

export default keyListener

export { KeyListener }
