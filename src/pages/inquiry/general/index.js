import './index.css';
function InquiryGeneralPage() {
    return (
        <div className="content-wrap">
            <div className="search-input">
                <input className="form-control" type="text" placeholder="Tìm kiếm thông tin" />
            </div>
            <hr />
            <div className="content-card-link">
                <div className="content-card-link-item" routerlink="/main/inquiry/general/personal-info" tabIndex={0}>
                    <a className="content-card-link-item-container shadow-btn" href="/inquiry-general-person-info.html">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_personal_info.svg" />
                        <span>Thông tin cá nhân</span>
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
                <div className="content-card-link-item" tabIndex={0}>
                    <a className="content-card-link-item-container shadow-btn" href="/inquiry-general-periodic.html">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_periodic.svg" />
                        <span>Danh sách hóa đơn/lệnh chuyển tiền</span>
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
                <div className="content-card-link-item" routerlink="/main/inquiry/general/financial-overview" tabIndex={0}>
                    <a className="content-card-link-item-container shadow-btn" href="./inquiry-general-financial-overview.html">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_financial_overview.svg" />\
                        <span>Tổng quan tài chính</span>
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
                <div className="content-card-link-item" routerlink="/main/inquiry/general/ewallet" tabIndex={0}>
                    <a className="content-card-link-item-container shadow-btn" href="./inquiry-general-ewallet.html">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_wallet.svg" />
                        <span>Ví điện tử liên kết</span><i className="fas fa-chevron-right" />
                    </a>
                </div>
                <div className="content-card-link-item" routerlink="/main/inquiry/general/limit" tabIndex={0}>
                    <a className="content-card-link-item-container shadow-btn" href="inquiry-general-limit.html">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_limit.svg" />
                        <span>Thông tin hạn mức</span>
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
                <div className="content-card-link-item" routerlink="/main/inquiry/general/app" tabIndex={0}>
                    <a className="content-card-link-item-container shadow-btn" href="inquiry-general-app.html">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_app_used.svg" />
                        <span>Ứng dụng của TPBank</span>
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InquiryGeneralPage;