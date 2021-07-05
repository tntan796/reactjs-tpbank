import './index.css';
import EWalletItemComponent from '../../../../components/e-wallet-item/index';
import { EWallets } from '../../../../common/mock-data/main.mockdata';

function EWalletPage() {
    const ewalletElms = EWallets.map((ewallet, index) => (
        <EWalletItemComponent
              icon = {ewallet.icon}
              altIcon = {ewallet.altIcon}
              walletName = {ewallet.walletName}
              accountName = {ewallet.accountName}
              phone = {ewallet.phone}
              accountNumber = {ewallet.accountNumber}
              accountBalance = {ewallet.accountBalance}
              depositLimitPerDay = {ewallet.depositLimitPerDay}
              depositLimitPerTime = {ewallet.depositLimitPerTime}
              key = {index}
        />
    ))
    return (
        <div className="content-wrap">
            <div className="ewallet">
                {ewalletElms}
            </div>
        </div>
    );
}

export default EWalletPage;

