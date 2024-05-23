import "./App.css";
import ModalTest from "./components/modal-popup/ModalTest.jsx";
import ProfileFinder from "./components/profile-finder/ProfileFinder.jsx";
// import TabTest from "./components/tabs/TabTest.jsx";
// import LightDarkMode from './components/light-dark-mode/LightDarkMode';
// import ImageSlider  from './components/image-slider/ImageSlider';
// import LoadMoreData from './components/load-more-data/LoadMoreData';
// import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator';
// import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
// import Tabs from './components/tabs/Tabs.jsx';

// import TreeStructure from './components/tree-structure/TreeStructure';
// import menus from './components/tree-structure/data'
// import { RandomColor } from './components/RandomColor';
// import Stars  from './components/stars/Stars';

function App() {
  return (
    <div className="App">
      {/* <RandomColor/> */}
      {/* <Stars/>      */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeStructure menus={menus} /> */}
      {/* <QrCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <TabTest /> */}
      {/* <ModalTest/> */}
      <ProfileFinder/>
    </div>
  );
}

export default App;
