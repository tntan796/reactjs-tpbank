import { Link } from 'react-router-dom';
import './index.css';
import WalletItemComponent from '../../../components/wallet-item/index';
import { Wallets } from '../../../common/mock-data/main.mockdata';

function WalletPage() {

    const walletItems = Wallets.map((wallet, index) => (
        <WalletItemComponent
            key = {index}
            icon = {wallet.icon}
            altIcon = {wallet.altIcon}
            provider = {wallet.provider}
            fullname = {wallet.fullname}
            walletId = {wallet.walletId}
        />
    ));

    return (
        <div className="content-wrap">
            <div className="tab-main">
                <div className="nav-tab">
                    <div className="nav-tab-button active" routerlinkactive="active" tabIndex={0}>Danh sách ví </div>
                    <div className="nav-tab-button" routerlinkactive="active" tabIndex={0}>Chuyển tiền tới ví bất kỳ </div>
                </div>
            </div>
            <div className="ewallet-home-content">
                <div className="my-wallet-list">
                    <Link className="wallet-item shadow-btn" tabIndex={0} to="/wallet/add-link">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_add-circular-button.svg" />
                        <div className="wallet-desc">
                            <div>Thêm liên kết ví</div>
                        </div>
                    </Link>
                    {walletItems}
                </div>
            </div>
        </div>
    );
}

export default WalletPage;