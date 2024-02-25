class MoveController{
    constructor(peerId){
        this.peerId = peerId
        this.state = null
        this.character = null
        this.speed = .09
    }
    init(characterController){
        this.state = characterController.state
        this.character = characterController.character
    }
    tick(){
        const position = this.character.position
        const rotation = this.character.rotation

        if (this.state.translation.y === 1) {
            position.x += Math.sin(rotation.y) * this.speed;
            position.z += Math.cos(rotation.y) * this.speed;
        } else if (this.state.translation.y === -1) {
            position.x -= Math.sin(rotation.y) * this.speed;
            position.z -= Math.cos(rotation.y) * this.speed;
        }
        
        if (this.state.translation.x === 1) {
            position.x += Math.sin(rotation.y + Math.PI / 2) * this.speed;
            position.z += Math.cos(rotation.y + Math.PI / 2) * this.speed;
        } else if (this.state.translation.x === -1) {
            position.x -= Math.sin(rotation.y + Math.PI / 2) * this.speed;
            position.z -= Math.cos(rotation.y + Math.PI / 2) * this.speed;
        }


    }
}

const moveController = new MoveController()
export default moveController
export {MoveController}
