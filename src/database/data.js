
import { db } from '@/database/firebase'


const data = (function() {

  module.save = (ref, obj) => {
    db.ref(ref).push().set(obj)
  }

  module.searchList = (ref) => {
    let dado = []
    db.ref(ref).on('value', (snapshot) => { 
      /*snapshot.forEach(item => {
        dado = item.val()
      })*/  
      //console.log(snapshot.val())
      dado = snapshot.val()  
      /*snapshot.map((item, index) => {
        dado[index] = item.val()
      })/*
    //dado = snapshot.val()*/
    let i = 0
      snapshot.forEach((item) => {
        console.log(item.val())
        console.log(i)
        dado[i] = item.val()
        i++
      })
    })
    console.log('----------')
    console.log(dado)
    return dado
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

  module.objCliente = () => {
    let obj = [
      {id: 1,nome: "Jonatas",celular: "(19)99876-5432",valor: "100,00"},
      {id: 2,nome: "Pamela",celular: "(19)99876-5432",valor: "100,00"},
      {id: 3,nome: "Diego",celular: "(19)99876-5432",valor: "100,00"},
      {id: 1,nome: "Jon",celular: "(19)99876-5432",valor: "100,00"},
      {id: 2,nome: "Carinha ai",celular: "(19)99876-5432",valor: "100,00"},
      {id: 3,nome: "Teste",celular: "(19)99876-5432",valor: "100,00"},
      {id: 1,nome: "Jorge",celular: "(19)99876-5432",valor: "100,00"},
      {id: 2,nome: "Malu",celular: "(19)99876-5432",valor: "100,00"},
      {id: 3,nome: "Tos",celular: "(19)99876-5432",valor: "100,00"}
    ]
      
    
    return obj
  }

  return {
    save: module.save,
    search: module.search,
    obj: module.objCliente,
    searchList: module.searchList
  }

})()

export default data