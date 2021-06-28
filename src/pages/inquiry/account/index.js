import './index.css';
function InquiryAccountPage() {
    return (
        <div className="content-wrap">
            <div className="tab-main" id="tab-enquiry">
                <div className="nav-tab">
                    <div className="nav-tab-button active" routerlinkactive="active" tabIndex={0} onclick="window.location.replace('/inquiry-account.html');">Tài khoản </div>
                    <div className="nav-tab-button" routerlinkactive="active" tabIndex={0} onclick="window.location.replace('/inquiry-saving.html');">Tiết kiệm
                    </div>
                    <div className="nav-tab-button" routerlinkactive="active" tabIndex={0} onclick="window.location.replace('/inquiry-credit-card.html');">Thẻ tín dụng</div>
                    <div className="nav-tab-button" routerlinkactive="active" tabIndex={0} onclick="window.location.replace('/inquiry-credit-card.html');">Khoản vay
                    </div>
                    <div className="nav-tab-button" routerlinkactive="active" tabIndex={0} onclick="window.location.replace('/inquiry-transfer.html');">Lệnh chuyển tiền</div>
                </div>
            </div>
            <div className="account-list-content">
                <a className="account-card shadow-btn" href="/retail/vX/main/inquiry/account/transaction?id=02105921501">
                    <div className="account-card-left">
                        <img height={60} src="https://ebank.tpb.vn/retail/vX/assets/images/account-logo.png" width={60} />
                    </div>
                    <div className="account-card-right">
                        <div className="name">TANO</div>
                        <div className="bban">124234234</div>
                        <div className="money"> 706,555 VND</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default InquiryAccountPage;