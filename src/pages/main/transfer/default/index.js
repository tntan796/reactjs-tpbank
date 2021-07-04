import { TransferCards } from '../../../../common/mock-data/main.mockdata';
import CartItemComponent from '../../../../components/card-item/index';
import './index.css';
function TransferDefaultPage() {
    const cards = TransferCards;
    const cartListElm = cards.map((card, index) => (
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
            <div className="list-card-link">
                { cartListElm }
            </div>
            <div className="transfer-detail">
                <div className="list-mobile list-mobile-hidden text-link"> Xem danh bạ <span>
                    <i className="icon-right" />
                </span>
                </div>
                <div className="transfer-body">
                    <div className="empty-favorites text-center">
                        <span className="title">Danh sách chuyển tiền ưa thích</span>
                        <img alt="contact-list" className="mt-3" src="/assets/images/icons/transfer/contact-list.png" />
                        <span className="text-center mt-2 content">Danh sách còn trống.
                            <span className="content-action hover-action" data-toggle="modal" data-target="#app-favorites">Bấm vào đây </span> để thêm tài
                            khoản thường xuyên sử dụng giao dịch</span>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="app-favorites" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Danh bạ chuyển tiền</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="favorite-container">
                                <div className="favorite-body-responsive">
                                    <div className="favorite-body favorite-padding">
                                        <div className="favorite-tabs favorite-actived">
                                            <span className="favorite-key"> Trong TPBank </span>
                                        </div>
                                        <div className="favorite-tabs">
                                            <span className="favorite-key"> Liên Ngân Hàng </span>
                                        </div>
                                        <div className="favorite-tabs">
                                            <span className="favorite-key"> Thẻ ATM</span>
                                        </div>
                                        <div className="favorite-tabs">
                                            <span className="favorite-key"> Chứng Khoán </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="favorite-content">
                                    <div className="favorite-padding">
                                        <div className="searching-container ng-untouched ng-pristine ng-valid">
                                            <img alt="" className="searching-icon" src="/assets/images/icons/transfer/ic_search.svg" />
                                            <input className="searching-input ng-untouched ng-pristine ng-valid" formcontrolname="object" placeholder="Tìm kiếm" />
                                        </div>
                                    </div>
                                    <div className="favorite-scroll">
                                        <div className="favorite-detail">
                                            <div className="favorite-name favorite-margin-bottom">
                                                <span className="favorite-text-bold favorite-text-size">B</span>
                                                <img alt="" className="favorite-icon" src="/assets/images/icons/transfer/icons-star.svg" />
                                            </div>
                                            <div className="favorite-account">
                                                <span className="favorite-text-size">23425</span>
                                                <img alt="" className="favorite-icon" src="/assets/images/icons/transfer/icons-trash.svg" />
                                            </div>
                                        </div>
                                        <div className="favorite-detail">
                                            <div className="favorite-name favorite-margin-bottom">
                                                <span className="favorite-text-bold favorite-text-size">A</span>
                                                <img alt="" className="favorite-icon" src="/assets/images/icons/transfer/icons-star.svg" />
                                            </div>
                                            <div className="favorite-account"><span className="favorite-text-size">234234</span>
                                                <img alt="" className="favorite-icon" src="/assets/images/icons/transfer/icons-trash.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img alt="" className="icon-add" routerlink="/main/transfer/contact/create" src="/assets/images/icons/transfer/ic_add-fund-transfer.svg" tabIndex={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="transfer-money" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Mẫu chuyển tiền</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="template-container">
                                <div className="template-content">
                                    <div className="template-padding">
                                        <div className="searching-container ng-untouched ng-pristine ng-valid">
                                            <img alt="" className="searching-icon" src="/assets/images/icons/transfer/ic_search.svg" />
                                            <input className="searching-input ng-untouched ng-pristine ng-valid" formcontrolname="object" placeholder="Tìm kiếm" />
                                        </div>
                                    </div>
                                    <div className="template-scroll">
                                        <div className="template-detail">
                                            <div className="template-name template-margin-bottom">
                                                <span className="template-text-bold template-text-size">Liem</span>
                                                <i className="far fa-heart favorite-inactive" />
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-bold template-text-size">TRUONG THANH
                                                    LIEM</span>
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-size">4321 0001 0868 70</span>
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-size">BIDV</span>
                                            </div>
                                            <div className="template-action">
                                                <span className="template-text-size action-name">Dùng mẫu <i className="icon-right" />
                                                </span>
                                                <img alt="" className="template-icon" src="/assets/images/icons/transfer/icons-trash.svg" />
                                            </div>
                                        </div>
                                        <div className="template-detail">
                                            <div className="template-name template-margin-bottom">
                                                <span className="template-text-bold template-text-size">Taan
                                                    VbBank</span>
                                                <i className="far fa-heart favorite-inactive" />
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-bold template-text-size">TRAN NGOC
                                                    TAN</span>
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-size">2013 9038 9</span>
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-size">VPBank</span>
                                            </div>
                                            <div className="template-action">
                                                <span className="template-text-size action-name">Dùng mẫu
                                                    <i className="icon-right" />
                                                </span>
                                                <img alt="" className="template-icon" src="/assets/images/icons/transfer/icons-trash.svg" />
                                            </div>
                                        </div>
                                        <div className="template-detail">
                                            <div className="template-name template-margin-bottom">
                                                <span className="template-text-bold template-text-size">Tien dong
                                                    hoc</span>
                                                <i className="far fa-heart favorite-inactive" />
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-bold template-text-size">TRAN VAN
                                                    THAI</span>
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-size">2221 0003 6093 88</span>
                                            </div>
                                            <div className="template-text-normal template-margin-bottom">
                                                <span className="template-text-size">BIDV</span>
                                            </div>
                                            <div className="template-action">
                                                <span className="template-text-size action-name">Dùng mẫu
                                                    <i className="icon-right" />
                                                </span>
                                                <img alt="" className="template-icon" src="/assets/images/icons/transfer/icons-trash.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferDefaultPage;