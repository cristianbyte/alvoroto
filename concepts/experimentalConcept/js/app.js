//IMPORTS
//COMPONENTS
import camera from "./components/camera.js";
import keyCode from "./components/keyCode.js";
import keyListener from "./components/keyListener.js";
import light from "./components/light.js";
import loopMachine from "./components/loopMachine.js";
import renderer from "./components/renderer.js";
import resize from "./components/resize.js";
import scene from "./components/scene.js";


//SHAPES
import cube from "./components/shapes/cube.js";
import plane from "./components/shapes/plane.js";

//CONTROLLERS
import characterController from "./controllers/characterController.js";
import keyController from "./controllers/keyController.js";
import moveController from "./controllers/moveController.js";
import X_BotLoader from "./models/characters/XBot/X_BotLoader.js";


scene.add( cube );
scene.add( light );
scene.add( plane );


camera.position.set(2,2,-2);

// X_BotLoader().then(bot =>{
//   scene.add(bot)
// })




characterController.addCharacter(cube)
characterController.addController(keyController)
characterController.addController(moveController)

loopMachine.addCallback(()=>{
camera.lookAt(cube.position)

  // if(keyListener.isPressed(keyCode.ENTER))
   cube.rotation.y += .1
  renderer.render(scene,camera)

})




resize.start(renderer)
loopMachine.start()
keyListener.start()
characterController.start()