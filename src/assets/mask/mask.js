

const mask = (function() {

  module.letter = (value) => {
    //value = value.replace(/[^\w\s]/gi, '')
    value = value
      .replace('*', '')
      .replace('[', '')
      .replace('+', '')
      .replace(/\d/gi, '')
      
    return value
  },

  module.noLetter = (value) => {
    value = value.replace(/\D/g, '')
    return value
  }

  module.money = (value) => {

    //if(value){
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
      
    //}
    return value
    
  }

  module.cellPhone = (value) => {

    value = value.replace(/\D/g, '')
      .replace(/(^\d)/, '($1')
      .replace(/(^.{3})(\d)/, '$1) $2')
      .replace(/(^.{9})(\d)/, '$1-$2')
      .replace(/(^.{9})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(^.{6})(\d{4}-\d{4})/, '$1 $2')
      .replace(/(-\d{4})\d+?$/, '$1')

    return value
  }

  module.weight = (value) => {
    let num = value.replace('Kg', '').replace('.', '')
         
      console.log(num)
      //let num = value
      value = num
        .replace(/\D/g, '')

       .replace(/^[0]$/, "0000")
       .replace(/(\d)(\d{3}$)/, '$1.$2')
       .replace(/(^0)(\d{1}.)(\d)/, '$2$3')
       .replace(/(^\d{3}$)/g, '0$1')
       //.replace(/\d{0}/, 'Kg ')
       //.replace(/\d{0}$/, 'Kg ')
     

    return value

  }

  module.maskFilter = (filter, value) => {
    if(filter == 'noLetter'){ value = module.noLetter(value) }
    else if(filter == 'letter'){ value = module.letter(value) }  
    else if(filter == 'money'){ value = module.money(value) }
    else if(filter == 'cellPhone'){ value = module.cellPhone(value) }
    else if(filter == 'weight'){ value = module.weight(value) }
    
    return value
  }


  return {
    maskFilter: module.maskFilter
  }

})()



export default mask