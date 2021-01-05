
import { db } from '@/database/firebase'


const data = (function() {

  module.save = (ref, obj) => {
    db.ref(ref).push().set(obj)
  }

  module.search = (ref, id) => {

    db.ref(ref).on('value', (snapshot) => {
      
      snapshot.forEach(item => {
        //let chave = item.key
        let dado = item.val()

        //console.log(chave, dado) 
        //console.log(chave)

        if(dado.id == id)
        console.log('if', dado)
        else
        console.log('else', dado)
      })


    })

  }

  return {
    save: module.save,
    search: module.search
   
  }

})()

export default data