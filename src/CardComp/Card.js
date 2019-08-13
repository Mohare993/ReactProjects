import React from 'react';



function Card(props)  {

        return (
            <div>
          <div id="card">
  <div id="inner">
    <div id="title">
      {props.cardData.title}
      <div id="cost">{props.cardData.cost}</div>
    </div>
    <div id="image"><img scr={props.imge}/></div>
    <div id="type">
      {props.cardData.type}
      <div id="symbol">
        <i className="ss ss-emn ss-uncommon ss-fw"></i>
      </div>
    </div>
    <div id="desc">
    {props.cardData.textBox}
    </div>
    <div id="power">{props.cardData.power}</div>
    <div id="footer">
     {props.cardData.footer}
    </div>
  </div>
</div>
</div>
          

        )
    

}


export default Card;