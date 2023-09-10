function Category(props){

    return(
        <div className="category">
            <h4>Тип:</h4>
            <select name="user_type">
              <option value={1}>Moni I</option>
              <option value={1}>Moni L</option>
              <option value={1}>Moni B</option>
              <option value={1}>Moni C</option>
            </select>
            <h4>Специфікація:</h4>
            <select name="user_type">
              <option value={1}>Moni I</option>
              <option value={1}>Moni L</option>
              <option value={1}>Moni B</option>
              <option value={1}>Moni C</option>
            </select>
            <img onClick={props.onClose} className="remove" src="/img/btn-remove.svg" alt='Remove'/>
          </div>
    )
}

export default Category;