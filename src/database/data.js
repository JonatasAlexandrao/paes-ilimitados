
import { db } from '@/database/firebase'


const data = (function() {

  module.save = (ref, obj) => { db.ref(ref).set(obj) }
  module.update = (ref, obj) => { db.ref(ref).update(obj) }
  module.delete = (ref, id) => { db.ref(ref + id).remove() }

  module.searchList = (ref) => {
    const callback = (resolve, reject) => {
      let dado = []
      const error = false
      db.ref(ref).on('value', (snapshot) => { 
        let i = 0
        snapshot.forEach((item) => {
          dado[i] = item.val()
          i++
        })

        error ? reject('erro de conexão') : resolve(dado)
        // if(error)
        //   reject('erro de conexão')   
        // else
        //   resolve(dado)

        
      })
    }   
    return new Promise(callback) 
  }

  return {
    save: module.save,
    update: module.update,
    delete: module.delete,
    searchList: module.searchList
  }

})()

export default data