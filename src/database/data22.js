
import { db } from '@/database/firebase'


const data = {

  save: (ref, obj) => {
    db.ref(ref).push().set(obj)
  },

  obj: () => {
    let obj = [
      {id: 1,nome: "Jonatas",celular: "(19)99876-5432",valor: "100,00"},
      {id: 2,nome: "Pamela",celular: "(19)99876-5432",valor: "100,00"},
      {id: 3,nome: "Diego",celular: "(19)99876-5432",valor: "100,00"},
      {id: 4,nome: "Jon",celular: "(19)99876-5432",valor: "100,00"},
      {id: 5,nome: "Carinha ai",celular: "(19)99876-5432",valor: "100,00"},
      {id: 6,nome: "Teste",celular: "(19)99876-5432",valor: "100,00"},
      {id: 7,nome: "Jorge",celular: "(19)99876-5432",valor: "100,00"},
      {id: 8,nome: "Malu",celular: "(19)99876-5432",valor: "100,00"},
      {id: 9,nome: "Tos",celular: "(19)99876-5432",valor: "100,00"}
    ] 
    return obj
  },

  teste: async function tes() {
    let id
    setTimeout(() => {id = 1000}, 2000)
    return await Promise.resolve(id)
  },

  search: () => {

  },

  searchById2: async function (ref, id) {
    let obj

    db.ref(ref).on('value', async (snapshot) => {     
      snapshot.forEach(item => {
        //let chave = item.key
        let dado = item.val()
        if(dado.id == id)
         obj = dado
  
      })
    })    
    return obj

  }

}

export default data