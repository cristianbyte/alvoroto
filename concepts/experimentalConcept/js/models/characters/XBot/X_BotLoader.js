import * as THREE from "../../../threeJS/three.module.js"
import { FBXLoader } from "../../../threeJS/FBXLoader.js";


import AnimationLoader from "../../../components/animations/animationLoader.js"
import PromiseLoader from "../../../components/promiseLoader.js"

import fileList from "./fiellist.js";

const folder = 'components/models/characters/XBot/'
const urlAnimations = {}
for(const [key, value] of Object.entries(fileList)){
    urlAnimations[key] = folder + 'animations/' + value
}


const urlModel = folder + 'X_Bot.fbx'

const X_BotLoader = ()=>{
    const animationLoader = new AnimationLoader(urlModel, urlAnimations)
    const promiseLoader = new PromiseLoader(THREE.FBXLoader, function(object){
        const scale = .005
        object.scale.set(scale,scale,scale)
        object.traverse(function(child){
            if(child.isMesh){
                child.castShadow = true;
                child.receiveShadow = true
            }
        });
        object.castShadow = true
        object.receiveShadow = true
        return object
    })
    animationLoader.addPromiseLoader(promiseLoader)
    return animationLoader.getModelWithAnimations()
}

export default X_BotLoader
