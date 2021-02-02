
import { db } from '@/database/firebase'


const data = (function() {

  module.save = (ref, obj) => {
    db.ref(ref).set(obj)
  }

  module.update = (ref, obj) => {
    db.ref(ref).update(obj)
  }


  module.searchList = (ref) => {
    const callback = (resolve, reject) => {
      let dado = []
      const error = false
      db.ref(ref).on('value', (snapshot) => { 
        //dado = snapshot.val() 
        //console.log(snapshot.val())
        let i = 0
        snapshot.forEach((item) => {
          dado[i] = item.val()
          i++
        })

        if(error)
          reject('erro de conexão')   
        else
          resolve(dado)

        
      })
    }   
    return new Promise(callback) 
  }

  /*module.searchList = (ref) => {
    const callback = (resolve, reject) => {
      let dado = []
      const error = false
      db.ref(ref).on('value', (snapshot) => { 
        dado = snapshot.val() 
        

        if(error)
          reject('erro de conexão')   
        else
          resolve(dado)

          console.log(dado)
      })
    }   
    return new Promise(callback) 
  }*/

  module.searchById = (ref, id) => {
    let obj

    db.ref(ref).on('value', (snapshot) => {     
      snapshot.forEach(item => {
        //let chave = item.key
        let dado = item.val()

        //console.log(chave, dado) 
        //console.log(chave)

        if(dado.id == id)
        return obj = dado
    
      })
      //console.log(2,obj)
    })
    
    return obj

  }


  return {
    save: module.save,
    update: module.update,
    searchById: module.searchById,
    searchList: module.searchList
  }

})()

export default data