import './index.css';

function TransactionItemComponent({
    day, dayOfWeek, month, detailRecord, moneyTransfer, type
}) {
    return (
        <div className="container-transaction">
            <div className="date-content">
                <div className="date-left">{day}</div>
                <div className="date-right">
                    <p className="day-bold">{dayOfWeek}</p>
                    <p>{month}</p>
                </div>
            </div>
            <div className="transaction-main">
                <div className="credit-name resize">
                    <span className="detail-record resize"> Tới: {detailRecord}
                    </span>
                    <span className="money-transfer resize">- {moneyTransfer} VND</span>
                </div>
                <div className="transaction-type">
                    <div className="item-detail">
                        <span><i className="image-type external" /> </span>
                        <span className="text-type">{type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionItemComponent;