import './index.css';

function TransferInfoItemComponent({
    label, depositLimitPerDay, depositLimitPerTime
}) {
    return (
        <div className="limit-left-transfer-info-item" id="limit_information_fund_interbank247">
        <div className="border-customize" id="limit_information_fund_interbank247_child">
            <span className="label">{label}</span>
            <div className="limit-info">
                <span>{depositLimitPerDay} VND/lần</span>
                <span>{depositLimitPerTime} VND/ngày</span>
            </div>
        </div>
    </div>
    );
}

export default TransferInfoItemComponent;