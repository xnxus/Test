import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Ward from './components/Ward.js';
import React, {useState} from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Group from './pages/Group.jsx';
import Popup from './components/Popup.js'

function App() {
  const[profileOpened, setProfileOpened] = useState([false]);
  const[popupActive, setPopupActive] = useState([true]);
  return (
    <><div className="wrapper">
      {profileOpened ? <Profile onClose={() => setProfileOpened(false)} /> : null}
      <Header onClickProfile={() => setProfileOpened(true)} />
      <Routes>
        <Route path='/' element={<Ward />}></Route>
        <Route path='/group' element={<Group />}></Route>
      </Routes>
    </div>
    <div>
    <Popup active={popupActive} setActive={setPopupActive}>
      <h4>Вы уверены, что хотите удалить этот приход?</h4>
      <li>
        <p>Gigabyte Technology X58-USBB3</p>
      </li>
      <div className='pop-wrap'>
        <button className=''>Отменить</button>
        <button>Удалить</button>
      </div>
    </Popup>
    </div>
    <button className="open-btn" onClick={() => setPopupActive(true)}>
          <img className='cu-p' src='/img/trash.png' alt='Trash'/>
          </button>
    </>
  );
}

export default App;