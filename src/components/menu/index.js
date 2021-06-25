function MenuComponent() {
    return(
        <div className="left" id="main-menu">
            <div className="main-logo">
              <a href="https://tpb.vn" target="_blank">
                <img src="./assets/images/main/logo.png" />
              </a>
            </div>
            <div className="menu">
              <div className="menu-group">
                <a className="menu-item parent active" href="/index.html">
                  <div className="menu-icon">
                    <img src="./assets/images/main/home-active.png" />
                  </div>
                  <div className="menu-name">Trang chủ</div>
                  <i className="fas fa-chevron-up" />
                </a>
                <div className="menu-item-list active">
                  <a className="menu-item active" href="/transfer.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Chuyển khoản</div>
                  </a>
                  <a className="menu-item" href="/bill.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Hoá đơn</div>
                  </a>
                  <a className="menu-item" href="/mobile.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Nạp tiền điện thoại</div>
                  </a>
                  <a className="menu-item" href="/saving.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Tiết kiệm</div>
                  </a>
                  <a className="menu-item" href="/card.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Quản lý thẻ</div>
                  </a>
                  <a className="menu-item" href="/loan.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Khoản vay</div>
                  </a>
                  <a className="menu-item" href="/loyalty.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Khách hàng thân thiết</div>
                  </a>
                  <a className="menu-item" href="/wallet.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Ví điện tử</div>
                  </a>
                  <a className="menu-item" href="/retail/vX/main/overseas-study">
                    <div className="menu-icon" />
                    <div className="menu-name">Chuyển Tiền Du Học</div>
                  </a>
                </div>
              </div>
              <div className="menu-group">
                <a className="menu-item parent" href="/inquiry.html">
                  <div className="menu-icon">
                    <img src="./assets/images/main/inquiry-inactive.png" />
                  </div>
                  <div className="menu-name">Tra cứu</div>
                  <i className="fas fa-chevron-down" />
                </a>
                <div className="menu-item-list">
                  <a className="menu-item" href="/inquiry-account.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Tài khoản</div>
                  </a>
                  <a className="menu-item" href="/inquiry-saving.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Tiết kiệm</div>
                  </a>
                  <a className="menu-item" href="/retail/vX/main/inquiry/loan">
                    <div className="menu-icon" />
                    <div className="menu-name">Khoản vay</div>
                  </a>
                  <a className="menu-item" href="/inquiry-credit-card.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Thẻ tín dụng</div>
                  </a>
                  <a className="menu-item" href="/inquiry-transfer.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Lệnh chuyển tiền</div>
                  </a>
                  <a className="menu-item" href="/inquiry-general.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Thông Tin Tổng Hợp</div>
                  </a>
                  <a className="menu-item" href="/inquiry-vat.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Hóa Đơn VAT</div>
                  </a>
                </div>
              </div>
              <div className="menu-group">
                <a className="menu-item parent" href="/retail/vX/main/setting">
                  <div className="menu-icon">
                    <img src="./assets/images/main/setting-inactive.png" />
                  </div>
                  <div className="menu-name">Cài Đặt</div>
                  <i className="fas fa-chevron-down" />
                </a>
                <div className="menu-item-list">
                  <a className="menu-item" href="/setting-upgrade.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Nâng cấp tài khoản</div>
                  </a>
                  <a className="menu-item" href="/setting-user.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Thông tin tài khoản</div>
                  </a>
                  <a className="menu-item" href="/setting-change-password.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Đổi mật khẩu</div>
                  </a>
                  <a className="menu-item" href="/setting-auth-method.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Phương thức xác thực GD</div>
                  </a>
                  <a className="menu-item" href="/setting-default.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Tài khoản liên kết với SĐT</div>
                  </a>
                  <a className="menu-item" href="/setting-device-management.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Quản lý thiết bị</div>
                  </a>
                  <a className="menu-item" href="/setting-faq.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Câu hỏi thường gặp</div>
                  </a>
                  <a className="menu-item" href="/setting-support.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Liên hệ hỗ trợ</div>
                  </a>
                  <a className="menu-item" href="/setting-referring.html">
                    <div className="menu-icon" />
                    <div className="menu-name">Giới thiệu bạn bè</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="menu-logo">
              <img src="./assets/images/main/ic_menu_overlay.png" />
            </div>
          </div>
    );
}

export default MenuComponent;