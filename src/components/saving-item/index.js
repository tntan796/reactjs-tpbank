import { Link } from 'react-router-dom';
import './index.css';

function SavingItemComponent({
    icon, altIcon, savingName, savingNumber, savingAmount, finalizationDate, pathDetail
}) {
    return (
        <div className="card-saving-item">
            <div className="icon-saving">
                <img alt={altIcon} src={icon} />
            </div>
            <div className="saving-info">
                <div className="saving-name">{savingName}</div>
                <div className="saving-number">{savingNumber}</div>
                <div className="saving-amount">
                    <b>{savingAmount}</b>
                </div>
                <div className="saving-finalization">
                    <div className="finalization-date"> {finalizationDate} </div>
                    <Link className="action" to={pathDetail}>Xem chi tiết
                        <i className="fas fa-chevron-right ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SavingItemComponent;