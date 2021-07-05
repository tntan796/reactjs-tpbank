import { Link } from 'react-router-dom';
import './index.css';

function LoginPage() {
    return (
        <div className="login-page">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <a href="https://tpb.vn" target="_blank">
                            <img className="login-logo" src="/assets/images/login/logo.svg" />
                        </a>
                    </div>
                    <div className="right">
                        <a href="#">
                            <img src="/assets/images/login/ic_support.svg" />
                            <div>23423423</div>
                        </a>
                        <a href="#" target="_blank" className="ml-5">
                            <img src="/assets/images/login/ic_search_location.svg" />
                            <div>Tìm điểm giao dịch</div>
                        </a>
                        <a href="https://tpb.vn/cong-cu-tinh-toan/ty-gia-ngoai-te" target="_blank" className="ml-5">
                            <img src="/assets/images/login/ic_scale.svg" />
                            <div>Tra cứu tỷ giá</div>
                        </a>
                        <a href="./login-en.html" className="ml-5">
                            <img className="lang-icon" src="/assets/images/login/flag-en.png" />
                        </a>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="welcome">Chào mừng đến eBank!</div>
                    <div className="mt-4 username-container">
                        <input autofocus className="form-control ng-pristine ng-valid ng-touched" maxLength={50} spellCheck="false" type="text" placeholder="Tên đăng nhập" />
                        <div className="tooltip-wrapper" tpbtooltip>
                            <i className="fas fa-info-circle tooltip-trigger" />
                        </div>
                    </div>
                    <div className="mt-3 password-container">
                        <input className="form-control input-password ng-untouched ng-pristine ng-valid" maxLength={32} spellCheck="false" type="password" placeholder="Mật khẩu" />
                        <img src="/assets/images/login/ic_eye.svg" className="show-password" />
                        <img src="/assets/images/login/ic_un-eye.svg" /></div>
                    <div className="mt-3 text-center">
                        <Link className="forget-password" to="/forgot-password">Quên mật khẩu?</Link>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary btn-login">Đăng Nhập</button>
                    </div>
                    <div className="mt-4 text-center">
                        {/* <a class="login-with-other-account" href="./login.html">Đăng nhập bằng tài khoản khác</a> */}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="left">
                        © 2019 Ngân hàng TMCP Tiên Phong (TPBank) | www.tpb.vn
                    </div>
                    <div className="right">
                        <a href="#">Câu hỏi thường gặp</a>
                        <a className="ml-4" href="#">Điều khoản sử dụng</a>
                        <a className="ml-4" href="#">
                            <img src="/assets/images/login/download-ios-dark.svg" alt="" />
                        </a>
                        <a className="ml-4" href="#">
                            <img src="/assets/images/login/download-android-dark.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default LoginPage;