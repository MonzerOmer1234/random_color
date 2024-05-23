import MenuItem from "./MenuItem";
import './styles.css'
function MenuList({ list = [] }) {



    return <ul className="menu-list-container">
        {list && list.length ? 
        
        list.map((item) => <MenuItem item={item}/>)
        :null}
    </ul>
}

export default MenuList;
