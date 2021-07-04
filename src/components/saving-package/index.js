import './index.css';
import { Link } from 'react-router-dom';

function SavingPackageComponent({
    icon, altIcon, packageName, packagePeriod, interestRate, path
}) {
    return (
        <div className="card-select-package">
            <div className="icon-package">
                <img alt={altIcon} src={icon} />
            </div>
            <div className="package-info">
                <div className="package-name">{packageName}</div>
                <div className="package-period">
                    <span className="txt-color-2">Kỳ hạn:</span>
                    <span>{packagePeriod}</span>
                </div>
                <div className="package-interest-rate">
                    <div className="interest-rate">
                        <span className="txt-color-2">Lãi suất cao nhất: </span>
                        <span>{interestRate}</span>
                    </div>
                    <Link className="action" path={path}>Chọn
                        <i className="fas fa-chevron-right ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SavingPackageComponent;