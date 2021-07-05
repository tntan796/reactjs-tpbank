import { Link } from 'react-router-dom';
import './index.css';

function SettingCardItemComponent({
    icon, altIcon, titleCard, link
}) {
    return (
        <Link className="setting__card-setting" to={link}>
            <div className="card-setting-container shadow-btn">
                <img src={icon} alt={altIcon} />
                <div className="card-setting-container__content">
                    <div className="title-card">{titleCard}</div>
                </div>
                <i className="card-setting-container__icon-right fas fa-chevron-right" />
            </div>
        </Link>
    );
}

export default SettingCardItemComponent;