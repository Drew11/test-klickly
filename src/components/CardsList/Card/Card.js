import React, {useState} from 'react';
import CardForm from './CardForm/CardForm';
import './style/card.sass';

const Card= ({text, status}) => {

    const [isOpenCard,toggleCard ] = useState(false);

    return (
      <React.Fragment>
       <div className={isOpenCard?`card active`: `card`}
            onClick={()=>toggleCard(!isOpenCard)}
       >
           <span>
               {text}
           </span>

           <div className={isOpenCard && status==='incomplete'?`card__status ${status} active `:`card__status ${status}`}>
               {status}
           </div>

           <i className={isOpenCard?`arrow up ${'active'}`: `arrow down ${'none'}`}/>
       </div>
          {isOpenCard?<CardForm/>:null}
      </React.Fragment>
   )

} ;

export default Card;