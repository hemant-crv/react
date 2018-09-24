import React from 'react';

const Ninjas = ({ninjas}) => {
      const ninjaList = ninjas.map(ninja=> {
        
        return ninja.age <22 ? (
             
              <div className='ninja'  key={ninja.id}>
              <div>name :{ninja.name}</div>
              <div>age:{ninja.age}</div>
              <div>belt:{ninja.belt}</div>
              </div>
        ) :null ;
      })
      return(
        <div>
        {ninjaList}
        </div>       
      )
  }
export default Ninjas