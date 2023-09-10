import React, {useState} from 'react';

function Ward(props){
  const[popupActive, setPopupActive] = useState([true]);

    return(
      <div>
        <div className="card">
        <div className='clear'>
          <li>
          <h3>Длинное предлинное длинючее название прихода</h3>
          </li>
        </div>
          <img className='cu-p' src='/img/category.png' alt='Category'/>
          <h2>23 <br>
          </br><p>Продукта</p> </h2>
          <h4>04/12 <br></br>06/Апр/2017</h4>
          <h4>2 500 $ <br></br>250 000. 50 UAH</h4>
          <button className="open-btn" onClick={() => setPopupActive(true)}>
          <img className='cu-p' src='/img/trash.png' alt='Trash'/>
          </button>
        </div>
        {/* <button className="open-btn" onClick={() => setPopupActive(true)}>
          <img className='cu-p' src='/img/trash.png' alt='Trash'/>
          </button> */}

      </div>
      
    )
}

export default Ward;