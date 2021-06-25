import './App.css';
import MenuComponent from "./components/menu/index";
import FooterComponent from "./components/footer/index";
import HeaderComponent from "./components/header/index";
import ContentComponent from "./components/content/index";
import QuickLinkComponent from "./components/quick-link/index";
function App() {
  return (
    <div>
        <div className="main-container" onDragStart={() => false} onDrop={() => false}>
          <MenuComponent></MenuComponent>
          <div className="right">
            <div className="main-head-body">
              <HeaderComponent></HeaderComponent>
              <div className="page-body">
            <div className="left">
              <ContentComponent></ContentComponent>
            </div>
            <div className="right">
                <QuickLinkComponent></QuickLinkComponent>
            </div>
        </div>
            </div>
            <FooterComponent></FooterComponent>
          </div>
        </div>
        <div className="loading" hidden>
          {/* <img src="./assets/images/main/loading2.gif"> */}
        </div>
      </div>
  );
}

export default App;
