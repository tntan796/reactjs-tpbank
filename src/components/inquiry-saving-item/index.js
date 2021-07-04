import './index.css';

function InquirySavingItem({
    icon, altIcon, name, accountNumber, money, settlement
}) {
    return (
        <div className="saving-item row pointer" tabIndex={0}>
            <div className="col-sm-2 oval">
                <img alt={altIcon} src={icon} />
            </div>
            <div className="center col-sm-9">
                <h6>{name}</h6>
                <div className="medium">
                    <h6 className="account-number">{accountNumber}</h6>
                    <div className="gr_curr">
                        <h6 className="curren">{money}
                            <span>VND</span>
                        </h6>
                    </div>
                </div>
                <p>Thu hoạch 
                    <span>{settlement}</span>
                </p>
            </div>
        </div>
    );
}

export default InquirySavingItem;