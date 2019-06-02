import React from 'react';
import SubCompUno from './subcompuno';





class CompUno extends React.Component{

  constructor(){
    super()
    this.state = {
      nombres : ["a","b","c","d","e","f","g"],
      numbers : [1,2,3,4,5]
    }
  }

  componentDidMount(){

  }


  render(){


      let nombres = this.state.nombres.map((nom) => {
        return <ul><li> <SubCompUno titulo = {nom}/> </li></ul>
      })

      return nombres;


  }
}




export default CompUno;
