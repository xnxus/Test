import React, {useState} from 'react';
import Category from './Category';

function Header(props){
  const[categoryOpened, setCategoryOpened] = useState([false]);

    return(
        <div className="wrapper clear">
          <header className="d-flex justify-between align-center m-20">
        <div className="d-flex p-10">
          <div className="d-flex align-center m-20">
          <img width={45} height={50} src="/img/logo.png" alt="Logo"></img>
            <div>
              <h3 className="text-uppercase">INVENTORY</h3>
            </div>
          </div>
          <div className="search-block d-flex m-25">
              <img src="/img/search.svg" alt="Search"></img>
              <input placeholder="Поиск..." />
          </div>
        </div>
        <ul className="d-flex m-30">
          <li onClick={props.onClickProfile}  >
            <img width={25} height={25} src="/img/profile.png" alt="Profile"></img>
          </li>
        </ul>
      </header> 
      <div className=" d-flex content p-40 align-start	">
      <button className='cu-p' onClick={props.onClickCategory} onClickCategory ={() => setCategoryOpened(true)}>
            <img  src="/img/plus.png" alt='Plus'/>
        </button>
        <h1 >Приходы / 25</h1>
        </div>
        {categoryOpened ? <Category onClose={() => setCategoryOpened(false)}/> :null}
        </div>
    )
}

export default Header;