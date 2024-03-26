let state = true

new Promise((resolve, reject) =>{
    if(state){
        resolve('mety tsara')
    }else{
        reject('tsy mety')
    }
})

async function isStateValid() {
    return new Promise((resolve, reject) =>{
    if(state){
        resolve('mety tsara')
    }else{
        reject('tsy mety')
    }
    })
}
    
async function checker(){
    try{
        await isStateValid()
    }catch(error){
        console.log(error);
    }
}



// myPromise
// .then((resolve) =>{
//     console.log(resolve);
// })
// .catch((reject) =>{
//     console.log(reject);
// })