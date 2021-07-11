import { useState } from 'react';
import './index.css';

function EWalletItemComponent({
    icon, altIcon, walletName, accountName, phone,
    accountNumber, accountBalance, depositLimitPerDay, depositLimitPerTime
}) {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div className="ewallet-item">
            <div className="ewallet-item-info">
                <img alt={altIcon} src= {icon} />
                <div className="ewallet-item-info-user">
                    <span className="txt-16 txt-bold txt-color-normal">{walletName}</span>
                    <span className="txt-20 txt-bold txt-color-normal">{accountName}</span>
                    <div className="action-expand">
                        <span className="txt-14 txt-bold txt-color-normal">{phone}</span>
                        <span className="txt-color-action" onClick = {() => setShowDetail(!showDetail)}>Chi tiết &nbsp;
                            <i className="fas fa-chevron-down" />
                        </span>
                    </div>
                </div>
            </div>
            <div className={showDetail ? "ewallet-item-detail show-info" : "ewallet-item-detail hide-info"}> 
                <div className="ewallet-item-detail-account">
                    <div className="row-item">
                        <span className="txt-label">Tài khoản liên kết</span>
                        <span className="txt-16 txt-bold txt-color-normal">{accountName}</span>
                    </div>
                    <div className="row-item">
                        <span className="txt-label">Số tài khoản</span>
                        <span className="txt-16 txt-bold txt-color-normal">{accountNumber}</span>
                    </div>
                    <div className="row-item">
                        <span className="txt-label">Số dư tài khoản</span>
                        <span className="txt-16 txt-bold txt-color-normal">{accountBalance} VND</span>
                    </div>
                </div>
                <div className="ewallet-item-detail-limit">
                    <div className="row-item">
                        <span className="txt-label">Hạn mức nạp tiền</span>
                        <div className="row-item-amount">
                            <span className="txt-16 txt-bold txt-color-normal">{depositLimitPerDay} VND/ngày</span>
                            <span className="txt-16 txt-bold txt-color-normal">{depositLimitPerTime} VND/lần</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EWalletItemComponent;