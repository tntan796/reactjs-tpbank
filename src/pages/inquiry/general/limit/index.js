import './index.css';
import TransferInfoItemComponent from '../../../../components/transfer-info-item/index';
import { TransferInfos } from '../../../../common/mock-data/main.mockdata';
import { useState } from 'react';
function LimitPage() {
    const [isShowInfo, setIsShowInfo] = useState(false)
    const transferInfoElms = TransferInfos.map((transfer, index) => (
        <TransferInfoItemComponent
            key = {index}
            label = {transfer.label}
            depositLimitPerDay = {transfer.depositLimitPerDay}
            depositLimitPerTime = {transfer.depositLimitPerTime}
        />
    ))
    return (
        <div className="content-wrap">
            <div className="limit">
                <div className="limit-left">
                    <div className="limit-left-transfer"><span className="limit-title">HẠN MỨC CHUYỂN TIỀN</span>
                        <div className="limit-left-transfer-info">
                            {transferInfoElms}
                        </div>
                    </div>
                    <div className="limit-left-topup">
                        <span className="limit-title">HẠN MỨC NẠP TIỀN</span>
                        <div className="limit-left-topup-info mb-0">
                            <div className="limit-left-topup-info-item" id="limit_information_funtopup_account">
                                <div className="border-customize" id="limit_information_funtopup_account_child">
                                    <span className="label">Vào tài khoản</span>
                                    <div className="topup-info">
                                        <span>10,000,000 VND/lần</span>
                                        <span>30,000,000 VND/ngày</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="limit-right">
                    <div className="limit-right-napas">
                        <span className="limit-title">HẠN MỨC GIAO DỊCH THẺ</span>
                        <div className="limit-right-napas-list">
                            <div className="card-item">
                                <div className="card-item-container">
                                    <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_atm.svg" />
                                    <span>Thẻ ATM (1)</span>
                                    <i onClick = { () => setIsShowInfo(!isShowInfo)} className={isShowInfo ? "fas fa-chevron-up" : "fas fa-chevron-down" }/>
                                </div>
                                <div className={isShowInfo ? "card-item-detail show-info" : "card-item-detail hide-info"}>
                                    <div className="card-item-detail-info">
                                        <span className="card-no">SỐ THẺ: 9704 23** **** 0461</span>
                                        <div className="card-item-detail-info-limit">
                                            <div className="card-item-detail-info-limit-row">
                                                <span className="label">Hạn mức rút tiền</span>
                                                <div className="limit-amount">
                                                    <span>5,000,000 VND/lần</span>
                                                    <span>20,000,000 VND/ngày</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LimitPage;