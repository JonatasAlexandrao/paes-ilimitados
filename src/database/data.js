
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

  module.searchById2 = (ref, id) => {
    let obj

    db.ref(ref).on('value', (snapshot) => {     
      snapshot.forEach(item => {
        //let chave = item.key
        let dado = item.val()

        //console.log(chave, dado) 
        //console.log(chave)

        if(dado.id == id)
         obj = dado
        //console.log('if', dado)
        //return dado
        //else
       // return 'vazio'
        //console.log('else', dado)
        //console.log(1,obj)
      })
      //console.log(2,obj)
    })
    
    return obj

  }

  module.objCliente = () => {
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
  }


  return {
    save: module.save,
    searchById: module.searchById,
    obj: module.objCliente,
    searchList: module.searchList
  }

})()

export default data