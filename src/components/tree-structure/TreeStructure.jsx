import MenuList from "./MenuList";

function TreeStructure({ menus = [] }) {



    return <div className="tree-structure-container">
        <MenuList list={menus}/> 
    </div>
}

export default TreeStructure;
