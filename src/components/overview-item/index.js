import './index.css';

function OverviewItemComponent({
    icon, altIcon, label, amount
}) {
    return (
        <div className="overview-item" id="financial_overview_loan">
            <img alt={altIcon} src={icon} />
            <div className="overview-item-info">
                <span className="lable">{label}</span>
                <span className="amount">{amount} VND</span>
            </div>
        </div>
    );
}

export default OverviewItemComponent;