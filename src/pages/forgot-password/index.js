import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function ForgotPasswordPage() {
    const [isShowTypeDocument, setisShowTypeDocument] = useState(false)
    return (
        <div className="reset-password-container">
            <div className="reset-password">
                <div className="reset-header">
                    <div className="logo-header">
                        <div className="header-non-login">
                            <div className="bg-header">
                                <a href="https://tpb.vn" target="_blank" rel="noreferrer">
                                    <img src="/assets/images/forgot-password/logo.svg" alt="logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 breadscrumb">
                        <div className="breadscrumb-wrapper">
                            <div className="breadscrumb">
                                <Link className="back-btn" to="/login">
                                    <img src="/assets/images/forgot-password/back.png" alt="back"/>
                                    Trở về trang trước
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reset-content">
                    <div className="header-page">Khôi phục mật khẩu</div>
                    <div className="col-sm-8 content-page">
                        <div className="enter-ic">
                            <div className="title"> Nhập số CMND/CCCD/Hộ chiếu </div>
                            <div className="group-input">
                                <div className="input-type select-container">
                                    <div className="select-container">
                                        <div className="select-container__wrap-top" onClick = {() => setisShowTypeDocument(!isShowTypeDocument)}>
                                            <span className="select-container__placeholder">Loại giấy tờ</span>
                                            <img className={isShowTypeDocument ? "select-container__icon rotate-icon" : "select-container__icon"}
                                            src="/assets/images/forgot-password/chevron-right-solid.svg" width="8px" alt="container__icon" />
                                        </div>
                                        <div className= {isShowTypeDocument ? "select-container__wrap-items active" : "select-container__wrap-items"}>
                                            <div className="select-container__select-option">
                                                <div className="text">CMND 9/12 Số</div>
                                            </div>
                                            <div className="select-container__select-option">
                                                <div className="text">CCCD 12 Số</div>
                                            </div>
                                            <div className="select-container__select-option">
                                                <div className="text">Hộ Chiếu</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input input-ic">
                                    <input className="input-ic-1" type="text" placeholder="Số CMND/CCCD/Hộ Chiếu" />
                                </div>
                            </div>
                            <div className="btn-action">
                                <button className="btn btn-primary btn-next">Tiếp tục</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="footer">
                <div>
                    <div className="footer-1">
                        <div className="phone-col">
                            <div className="call-center-text">Tổng đài hỗ trợ</div>
                            <div className="phone-1">
                                <a href="!#">23423423</a>
                                <span className="c247">24/7</span>
                            </div>
                            <div>
                                <a href="!#">(024) 37 683683</a>
                            </div>
                        </div>
                        <div className="footer-column-2">
                            <div>
                                <a href="!#">Câu hỏi thường gặp</a>
                            </div>
                            <div className="mt-1">
                                <a href="!#" target="_blank" rel="noreferrer">Điều khoản sử dụng</a>
                            </div>
                            <div className="mt-1">
                                <a href="!#" target="_blank" rel="noreferrer">Bảo mật thông tin
                                    khách hàng</a>
                            </div>
                        </div>
                        <div className="footer-column-3">
                            <div>
                                <a href="!#" target="_blank" rel="noreferrer">Tìm điểm giao dịch</a>
                            </div>
                            <div className="mt-1">
                                <a href="!#" target="_blank" rel="noreferrer">Tìm kiếm vị trí
                                    livebank</a>
                            </div>
                        </div>
                        <div className="app-store-col">
                            <div className="download-desc">Tải và cài đặt ứng dụng TPBank eBank lên thiết bị di động</div>
                            <a href="!#" target="_blank" rel="noreferrer">
                                <img src="/assets/images/forgot-password/download-ios.svg" alt="download-ios"/>
                            </a>
                            <a className="ml-4" href="!#" target="_blank">
                                <img src="/assets/images/forgot-password/download-android.svg" alt="download-android"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-2">
                        <div className="copyright-text"> © 2019 Ngân hàng TMCP Tiên Phong (TPBank) | www.tpb.vn </div>
                        <div className="social text-right">
                            <a href="!#" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-square" />
                            </a>
                            <a className="ml-3" href="!#" target="_blank" rel="noreferrer">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="ml-3" href="!#" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;