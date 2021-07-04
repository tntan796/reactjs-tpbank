import './index.css';
import { Link } from "react-router-dom";
import { BillCards } from '../../../common/mock-data/main.mockdata';
import CartItemComponent from '../../../components/card-item/index';
function BillPage() {
    const cardsElm = BillCards.map((card, index) => (
        <CartItemComponent
            key={index}
            link={card.link}
            title={card.title}
            icon={card.icon}
            other={card.other}
            altIcon={card.altIcon}>
        </CartItemComponent>
    ));
    return (
        <div className="content-wrap">
            <div className="search-area">
                <div className="app-navigation-tab">
                    <div className="tab-main">
                        <div className="nav-tab">
                            <Link to="/bill" className="nav-tab-button active" tabIndex={0}>Thanh toán hoá đơn </Link>
                            <Link to="/bill/bill-recurring" className="nav-tab-button" style={{ display: 'flex' }} tabIndex={0}>Lệnh định kỳ</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4" />
            <div className="container-bill">
                <div style={{ width: '50%', marginBottom: '20px' }}>
                    <div className="search-input">
                        <input className="form-control" type="text" placeholder="Tìm kiếm dịch vụ" />
                    </div>
                </div>
                <div className="list-card-link">
                    {cardsElm}
                </div>
                <div style={{ background: '#E6E9EE', width: '100%', height: '3px', marginBottom: '30px' }}>
                </div>
            </div>
        </div>
    );
}

export default BillPage;