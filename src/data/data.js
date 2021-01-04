import Vue from 'vue'


const data = (function() {

  module.getCliente = () => {
    
    Vue.prototype.$http.get('clientes.json').then( res => { 
      /*let teste = res.data
      teste.map(r => {
        console.log(r)
        
      })*/

      console.log(res.data)
      let testes = res
      console.log(testes)


    })

   /* Vue.prototype.$http.collection('clientes.json').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data())
      })
    })*/

    //console.log(clienteBD)
    //return clienteBD.key
    
  }

  module.getClienteSingle = () => {
    Vue.prototype.$http.get('clientes.json').then( res => { 
      console.log(res.data)
      let teste = [{num:1},{num:2},{num:3},{num:4}] 
      //teste = res.data
      teste.map(d => {
        if(d.id == 2222)
          console.log(res)
        else  
          console.log(d)
      })
      
    })
  }

  module.postCliente = (obj) => {

    var db = firebaseAdmin.database();
    var ref = db.ref("clientes");
    ref.orderByChild("nome").on("child_added", function(snapshot) {
      console.log(snapshot.key + " was " + snapshot.val().height + " meters tall");
    });



    //clienteBD.push(obj)
   console.log(obj)

   /*Vue.prototype.$http.post('clientes.json', obj)
   console.log(obj)*/
   /*Vue.prototype.$http.orderByChild("nome").on("child_added", function(snapshot) {
    console.log(snapshot.key + " was " + snapshot.val().height + " meters tall");
  });*/
  }

  return {
    getCliente: module.getCliente,
    getClienteSingle: module.getClienteSingle,
    postCliente: module.postCliente

  }

})()

export default data