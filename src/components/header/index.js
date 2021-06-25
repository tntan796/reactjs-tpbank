function HeaderComponent() {
    return (
        <div className="page-header">
            <div className="top-header">
                <img id="hamburger-menu" src="./assets/images/main/ic_menu.png" />
                <a href="https://tpb.vn" target="_blank">
                    <img className="logo" src="./assets/images/main/logo.png" />
                </a>
            </div>
            <div className="left-text">
                <div>
                    <h1 className="page-title">Trang chủ</h1>
                </div>
            </div>
            <div className="user-info" id="globalUserInfo">
                <i className="fas fa-bell" id="notification-btn" tabIndex={0} onclick="window.location.replace('/notification.html');">
                    <div className="notification-active-icon" />
                </i>
                <div id="user-btn">
                    <span className="avatar">
                        <div className="avatar-container" style={{ width: '30px', height: '30px' }}>
                            <div className="avatar-content" style={{ textAlign: 'center', borderRadius: '100%', textTransform: 'uppercase', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(127, 140, 141)', fontSize: '12px', lineHeight: '30px', fontWeight: 500 }}>
                                TT </div>
                        </div>
                    </span>
                    <span className="user-name">TANO</span>
                    <i className="fas fa-chevron-down" />
                </div>
                <div className="user-menu" hidden>
                    <a>
                        <i className="fas fa-power-off" /> Thoát
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;