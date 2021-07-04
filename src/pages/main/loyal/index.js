import GiftItemComponent from '../../../components/gift-item/index';
import { Gifts } from '../../../common/mock-data/main.mockdata';
import './index.css';
function LoyalPage() {

    const giftElms = Gifts.map((gift, index) => (
        <GiftItemComponent
            key= {index}
            icon = {gift.icon}
            altIcon = {gift.altIcon}
            title = {gift.title}
            partner = {gift.partner}
            point = {gift.point}
            link = {gift.link}
        />
    ))

    return (
        <div className="content-wrap">
            <div>
                <div className="loyalty show-header-button">
                    <div className="button-right-header">
                        <div className="content">
                            <div style={{ cursor: 'pointer' }}>
                                <a className="txt-rule" rel="noreferrer" target="_blank" href="https://tpb.vn/wps/wcm/connect/7d8ed4b8-2383-4955-84b0-8d86cd0c5cd9/QUY+%C4%90%E1%BB%8ANH+V%E1%BB%80+C%C6%A0+CH%E1%BA%BE+T%C3%8DCH+%C4%90I%E1%BB%82M+%C4%90%E1%BB%94I+QU%C3%80+LOYALTY_2018+%28v4%29.pdf?MOD=AJPERES&CVID=muGzY7B&CVID=muGzY7B&CVID=moJ.bDw&CVID=moJ.bDw&CVID=moJ.bDw">Thể lệ</a>
                                <img alt="" className="icon-rule" src="/assets/images/icons/loyalty/icons-question-fill.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="point-info">
                        <div className="point-card">
                            <div className="point-detail">
                                <div className="title">Điểm thưởng sẵn có</div>
                                <div className="point">0 điểm</div>
                                <div className="expired_point">0 điểm sẽ hết hạn 31/12/2021</div>
                            </div>
                            <div className="point-image">
                                <div className="avatar">
                                    <div className="avatar-container" style={{ width: '45px', height: '45px' }}>
                                        <div className="avatar-content" style={{ textAlign: 'center', borderRadius: '100%', textTransform: 'uppercase', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(127, 140, 141)', fontSize: '18px', lineHeight: '45px', fontWeight: 500 }}>
                                            TT </div>
                                    </div>
                                </div>
                                <div className="rank">CLASSIC</div>
                            </div>
                        </div>
                    </div>
                    <div className="gift-info">
                        <div className="tab-section">
                            <div className="nav-tab-button search active">
                                <span>Danh sách quà tặng</span>
                            </div>
                            <div className="nav-tab-button detail">
                                <span>Lịch sử đổi quà</span>
                            </div>
                        </div>
                        <div>
                            <div className="list-gift-card">
                                <div className="category-section">
                                    <div className="option active">
                                        <div className="selection-card-image">
                                            <img alt="" className="img-default" src="/assets/images/icons/loyalty/ic_gift_active.svg" />
                                            <img alt="" className="img-hide" src="/assets/images/icons/loyalty/ic_gift_active.svg" />
                                        </div>
                                        <div className="selection-card-title">
                                            <span>Tất cả</span>
                                        </div>
                                    </div>
                                    <div className="option">
                                        <div className="selection-card-image">
                                            <img alt="" className="img-default" src="/assets/images/icons/loyalty/ic_shopping.svg" />
                                            <img alt="" className="img-hide" src="/assets/images/icons/loyalty/ic_shopping_active.svg" />
                                        </div>
                                        <div className="selection-card-title">
                                            <span>Mua sắm</span>
                                        </div>
                                    </div>
                                    <div className="option">
                                        <div className="selection-card-image">
                                            <img alt="" className="img-default" src="/assets/images/icons/loyalty/ic_cuisine.svg" />
                                            <img alt="" className="img-hide" src="/assets/images/icons/loyalty/ic_cuisine_active.svg" />
                                        </div>
                                        <div className="selection-card-title">
                                            <span>Ẩm thực</span>
                                        </div>
                                    </div>
                                    <div className="option">
                                        <div className="selection-card-image">
                                            <img alt="" className="img-default" src="/assets/images/icons/loyalty/ic_utility.svg" />
                                            <img alt="" className="img-hide" src="/assets/images/icons/loyalty/ic_utility_active.svg" />
                                        </div>
                                        <div className="selection-card-title">
                                            <span>Tiện ích</span>
                                        </div>
                                    </div>
                                    <div className="option">
                                        <div className="selection-card-image">
                                            <img alt="" className="img-default" src="/assets/images/icons/loyalty/ic_service.svg" />
                                            <img alt="" className="img-hide" src="/assets/images/icons/loyalty/ic_service_active.svg" />
                                        </div>
                                        <div className="selection-card-title">
                                            <span>Dịch vụ</span>
                                        </div>
                                    </div>
                                    <div className="option">
                                        <div className="selection-card-image">
                                            <img alt="" className="img-default" src="/assets/images/icons/loyalty/ic_travel.svg" />
                                            <img alt="" className="img-hide" src="/assets/images/icons/loyalty/ic_travel_active.svg" />
                                        </div>
                                        <div className="selection-card-title">
                                            <span>Du lịch</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-section">
                                    <div className="total_item col-md-4">Có <span>10</span> kết quả
                                    </div>
                                    <div className="select-dropdown col-md-8 ng-untouched ng-valid ng-dirty">
                                        <div className="filter-point">
                                            <select-container formcontrolname="filter" className="ng-untouched ng-valid ng-dirty">
                                                <div className="select-container">
                                                    <div className="select-container__wrap-top">
                                                        <span className="select-container__item-selected">Toàn bộ quà</span>
                                                        <img alt="" className="select-container__icon" src="/assets/images/icons/loyalty/chevron-right-solid.svg" width="8px" />
                                                    </div>
                                                    <div className="select-container__wrap-items select-container__wrap-items--height">
                                                        <div className="select-container__select-option">
                                                            Toàn bộ quà
                                                        </div>
                                                        <div className="select-container__select-option">
                                                            Quà đủ điểm nhận
                                                        </div>
                                                    </div>
                                                </div>
                                            </select-container>
                                        </div>
                                        <div className="sort-point">
                                            <select-container formcontrolname="sort" className="ng-untouched ng-pristine ng-valid">
                                                <div className="select-container">
                                                    <div className="select-container__wrap-top">
                                                        <span className="select-container__item-selected">Từ thấp đến
                                                            cao</span>
                                                        <img alt="" className="select-container__icon" src="/assets/images/icons/loyalty/chevron-right-solid.svg" width="8px" />
                                                    </div>
                                                    <div className="select-container__wrap-items select-container__wrap-items--height">
                                                        <div className="select-container__select-option">
                                                            Từ thấp đến cao
                                                        </div>
                                                        <div className="select-container__select-option">
                                                            Từ cao đến thấp
                                                        </div>
                                                    </div>
                                                </div>
                                            </select-container>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-gift-section row " infinite-scroll>
                                    {giftElms}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoyalPage;