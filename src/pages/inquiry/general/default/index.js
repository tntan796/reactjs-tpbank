import './index.css';
import ContentCardLinkItemComponent from '../../../../components/content-card-link-item/index';
import { CardLinkItems } from '../../../../common/mock-data/main.mockdata';

function GeneralDefaultPage() {
    const cardLinkItemElms = CardLinkItems.map((item, index) => (
        <ContentCardLinkItemComponent
            key = {index}
            icon = {item.icon}
            altIcon = {item.altIcon}
            link = {item.link}
            title = {item.title}
        />
    ))
    return (
        <div className="content-wrap">
            <div className="search-input">
                <input className="form-control" type="text" placeholder="Tìm kiếm thông tin" />
            </div>
            <hr />
            <div className="content-card-link">
                {cardLinkItemElms}
            </div>
        </div>
    );
}

export default GeneralDefaultPage;