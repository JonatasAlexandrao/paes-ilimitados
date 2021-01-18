

const mask = (function() {

  module.noLetter = (value) => {
    value = value.replace(/\D/g, '')
    //console.log(value)
    return value
  }

  module.money = (value) => {

    if(value){
      let num = value.replace('R$ ', '').replace(',', '')

      if(parseFloat(num) && num.length < 3)
          num = '0,0' + num     
      
      value = num
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2}$)/, '$1,$2')
        .replace(/^00$/, '0,00')
        .replace(/^0$/, '0,00')
        .replace(/(^0)(\d{1},)(\d)/, '$2$3')
        .replace(/\d{0}/, 'R$ ')
      
    }
    return value
    
  }

  module.maskFilter = (filter, value) => {

    if(filter == 'noString'){
      value = module.noLetter(value)
     }  
     else if(filter == 'money'){
      value = module.money(value)
     }
    
     return value


  }


  return {
    maskFilter: module.maskFilter
  }

})()



export default mask