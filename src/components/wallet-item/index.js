import './index.css';

function WalletItemComponent({
    icon, altIcon, provider, fullname, walletId
}) {
    return (
        <div className="wallet-item shadow-btn">
            <img alt={altIcon} src={icon} />
            <div className="wallet-desc">
                <div className="provider">{provider}</div>
                <div className="fullname">{fullname}</div>
                <div className="wallet-id">{walletId}</div>
            </div>
        </div>
    );
}

export default WalletItemComponent;