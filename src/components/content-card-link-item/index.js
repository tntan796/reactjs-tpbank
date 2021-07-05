import './index.css';
import { Link } from 'react-router-dom';

function ContentCardLinkItemComponent({
    icon, altIcon, link, title
}) {
    return (
        <div className="content-card-link-item" tabIndex={0}>
            <Link className="content-card-link-item-container shadow-btn" to={link}>
                <img alt={altIcon} src={icon} />
                <span>{title}</span>
                <i className="fas fa-chevron-right" />
            </Link>
        </div>
    );
}

export default ContentCardLinkItemComponent;