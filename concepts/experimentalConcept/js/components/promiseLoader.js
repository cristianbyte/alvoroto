class PromiseLoader{
    constructor(loader, callback){
        this.loader = loader
        this.callback = callback      
    }
    
    load(url){
        const loader = new this.loader()
        return new Promise((res, rej)=>{
            loader.load(url, (object)=>{
                res(this.callback(object))
            })
        })
    }


}

export default PromiseLoader
