import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Admin.css';
import MenuComponent from './components/menu';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MenuItemTypeListPage from './pages/menu-item-type/menu-item-type-list';

function Admin() {
    let match = useRouteMatch();

    return (
        <div className="layout-wrapper"> 
         {/* layout-topbar-mobile-active */}
            <div className="layout-topbar p-shadow-4">
                <div className="layout-topbar-left">
                    <button type="button" className="layout-topbar-logo p-link" style={{ cursor: 'pointer' }}>
                        <img id="app-logo" src="https://www.primefaces.org/ultima-react/assets/layout/images/logo-light.svg" alt="ultima-layout" style={{ height: '2.25rem' }} />
                    </button>
                    <button type="button" className="layout-menu-button p-shadow-6 p-link">
                        <i className="pi pi-chevron-right" />
                    </button>
                    <button type="button" className="layout-topbar-mobile-button p-link">
                        <i className="pi pi-ellipsis-v fs-large" />
                    </button>
                </div>
                <div className="layout-topbar-right">
                {/* layout-topbar-mobile-active */}

                    <div className="layout-topbar-actions-left">
                    </div>
                    <div className="layout-topbar-actions-right">
                        <ul className="layout-topbar-items">
                            <li className="layout-topbar-item layout-search-item">
                                <button className="layout-topbar-action rounded-circle p-link">
                                    <i className="pi pi-search fs-large" />
                                </button>
                            </li>
                            <li className="layout-topbar-item notifications">
                                <button className="layout-topbar-action rounded-circle p-link">
                                    <span className="p-overlay-badge">
                                        <i className="pi pi-bell fs-large" />
                                        <span className="p-badge p-badge-warning p-badge-dot" />
                                    </span>
                                </button>
                            </li>
                            <li className="layout-topbar-item app">
                                <button className="layout-topbar-action rounded-circle p-link">
                                    <i className="pi pi-table fs-large" />
                                </button>
                            </li>
                            <li className="layout-topbar-item">
                                <button className="layout-topbar-action p-d-flex p-dir-row p-jc-center p-ai-center p-px-2 rounded-circle p-link">
                                    <img src="https://www.primefaces.org/ultima-react/assets/demo/images/avatar/amyelsner.png" alt="avatar" style={{ width: '32px', height: '32px' }} />
                                </button>
                            </li>
                            <li className="layout-topbar-item">
                                <button type="button" className="layout-topbar-action rounded-circle p-link">
                                    <i className="pi fs-large pi-arrow-left" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="menu-wrapper">
                <MenuComponent></MenuComponent>
            </div>
            <div className="layout-main">
            <Switch>
            
                  <Route path={`${match.path}/menu-item-type`}> <MenuItemTypeListPage/> </Route>
                  {/* <Route path="/setting"> <SettingPage/> </Route>
                  <Route path="/main"> <MainPage/> </Route>
                  <Route> <NotFoundPage/> </Route> */}
                </Switch>
            </div>
        </div>
    );
}

export default Admin;