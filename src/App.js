import './App.css';
import MenuComponent from "./components/menu/index";
import FooterComponent from "./components/footer/index";
import HeaderComponent from "./components/header/index";
import ContentComponent from "./components/content/index";
import LoadingCompnent from "./components/loading/index";
import QuickLinkComponent from "./components/quick-link/index";
import TransferPage from "./pages/main/transfer/index";
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
                {/* <ContentComponent></ContentComponent> */}
                <TransferPage></TransferPage>
              </div>
              <div className="right">
                <QuickLinkComponent></QuickLinkComponent>
              </div>
            </div>
          </div>
          <FooterComponent></FooterComponent>
        </div>
      </div>
      <LoadingCompnent></LoadingCompnent>
    </div>
  );
}

export default App;
