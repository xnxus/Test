import { Link } from "react-router-dom";


function Profile(props){

    return(
        <div className="overlay">
        <div className="profile">
         <img className="avatar" src='img/avatar.png' alt='Avatar'/>
          <img className="settings cu-p" src='img/settings.png' alt='Settings'/>
          <div className='h3 clear'>
            <img onClick={props.onClose} className="remove" src="/img/btn-remove.svg" alt='Remove'/>
            <Link to="/"><h3>Приход</h3></Link>
            <Link to="/group"><h3>Группы</h3></Link>
            <h3>Продукты</h3>
            <h3>Пользователи</h3>
            <h3>Настройки</h3>
          </div>
        </div>  
      </div>
    )
}

export default Profile;