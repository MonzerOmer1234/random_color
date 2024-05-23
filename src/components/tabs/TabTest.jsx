import Tabs from "./Tabs";
import './style.css'

function RandomContent(){
    return <h1>Some Random Content</h1>
}

export default function TabTest(){

  const tabs = [
    {
        label  : "Tab1",
        content : <div>This Is The Content for Tab 1</div>

    },
    {
        label  : "Tab2",
        content : <div>This Is The Content for Tab 2</div>

    },
    {
        label  : "Tab3",
        content : <RandomContent/>

    },
  ]
  function handleChange(tabIndex){
   console.log(tabIndex)
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />
}