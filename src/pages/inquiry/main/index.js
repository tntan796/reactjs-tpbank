import { Link } from 'react-router-dom';
import './index.css';

import './index.css';
import { Inquiries} from '../../../common/mock-data/main.mockdata';
import CartItemComponent from '../../../components/card-item/index';
function InquiryMainPage() {
    const inquiriesElm = Inquiries.map((inquiry, index) => (
        <CartItemComponent
            key={index}
            link={inquiry.link}
            title={inquiry.title}
            icon={inquiry.icon}
            other={inquiry.other}
            altIcon={inquiry.altIcon}>
        </CartItemComponent>
    ));

    return (
        <div className="content-wrap">
            <div className="list-card-link">
                {inquiriesElm}
            </div>
        </div>
    );
}

export default InquiryMainPage;