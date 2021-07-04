import './index.css';
import { Link } from 'react-router-dom';
function GiftItemComponent({
    icon, altIcon, title, partner, point, link
}) {
    return (
        <div className="gift-card col-md-6">
            <div className="gift-info">
                <div className="gift-image">
                    <img alt={altIcon} src={icon} />
                </div>
                <div className="gift-detail">
                    <div className="title">{title}</div>
                    <div className="partner">{partner}</div>
                    <div className="wrap-button">
                        <div className="point">{point}
                            <span className="point-txt">điểm</span>
                        </div>
                        <Link className="exchange-gift" to={link}>
                            <span className="text-link text-link-size">
                                Đổi quà
                                <img alt="" className="common-image" src="/assets/images/icons/loyalty/right.svg" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="gift-card-border" />
        </div>
    );
}

export default GiftItemComponent;