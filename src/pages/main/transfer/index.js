function TransferPage() {
    return (
        <div class="page-body">
            <div class="left">
                <div class="content-wrap">
                    <div class="list-card-link">
                        <div class="card-link-wrapper card-customize shadow-btn">
                            <a class="card-link" style="position: relative" href="/transfer-internal.html">
                                <div class="card-img">
                                    <img src="./assets/images/icons/transfer/internal.png"/>
                                        </div>
                                    <div class="card-name card-color">Chuyển tiền trong ngân hàng</div>
                                    </a>
                                </div>
                            <div class="card-link-wrapper card-customize shadow-btn">
                                <a class="card-link" style="position: relative" href="/transfer-internal.html">
                                    <div class="card-img">
                                        <img src="./assets/images/icons/transfer/interbank.png"/>
                                        </div>
                                        <div class="card-name card-color">Chuyển tiền liên ngân hàng</div>
                                    </a>
                                </div>
                                <div class="card-link-wrapper card-customize shadow-btn">
                                    <a class="card-link" style="position: relative" href="/transfer-internal.html">
                                        <div class="card-img">
                                            <img src="./assets/images/icons/transfer/napas.png"/>
                                        </div>
                                            <div class="card-name card-color">Chuyển tiền qua thẻ ATM</div>
                                    </a>
                                </div>
                                    <div class="card-link-wrapper card-customize shadow-btn">
                                        <a href="/transfer-stock.html" class="card-link" style="position: relative">
                                            <div class="card-img">
                                                <img src="./assets/images/icons/transfer/icons-stock.png"/>
                                        </div>
                                                <div class="card-name card-color">Chuyển tiền chứng khoán</div>
                                    </a>
                                </div>
                                        <div class="card-link-wrapper card-customize shadow-btn">
                                            <a class="card-link" style="position: relative" href="/transfer-bath.html">
                                                <div class="card-img">
                                                    <img src="./assets/images/icons/transfer/batch.png"/>
                                        </div>
                                                    <div class="card-name card-color">Chuyển tiền theo danh sách</div>
                                    </a>
                                </div>
                                            <div class="card-link-wrapper card-customize shadow-btn">
                                                <a class="card-link" style="position: relative" href="transfer-schedule.html">
                                                    <div class="card-img">
                                                        <img src="./assets/images/icons/transfer/schedule.png"/>
                                        </div>
                                                        <div class="card-name card-color">Chuyển tiền theo lịch</div>
                                    </a>
                                </div>
                                                <div class="card-link-wrapper card-customize shadow-btn">
                                                    <a class="card-link" style="position: relative" href="javascript:void(0);" data-toggle="modal"
                                                        data-target="#transfer-money">
                                                        <div class="card-img">
                                                            <img src="./assets/images/icons/transfer/form.png"/>
                                        </div>
                                                            <div class="card-name card-color">Mẫu chuyển tiền</div>
                                    </a>
                                </div>
                                                </div>

                                                <div class="transfer-detail">
                                                    <div class="list-mobile list-mobile-hidden text-link"> Xem danh bạ <span>
                                                        <i class="icon-right"></i>
                                                    </span>
                                                    </div>
                                                    <div class="transfer-body">
                                                        <div class="empty-favorites text-center">
                                                            <span class="title">Danh sách chuyển tiền ưa thích</span>
                                                            <img class="mt-3" src="./assets/images/icons/transfer/contact-list.png"/>
                                                                <span class="text-center mt-2 content">Danh sách còn trống.
                                                                    <span class="content-action hover-action" data-toggle="modal"
                                                                        data-target="#app-favorites">Bấm vào đây </span> để thêm tài
                                                                    khoản thường xuyên sử dụng giao dịch</span>
                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="modal fade" id="app-favorites" tabindex="-1" role="dialog"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Danh bạ chuyển tiền</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="favorite-container">
                                                                <div class="favorite-body-responsive">
                                                                    <div class="favorite-body favorite-padding">
                                                                        <div class="favorite-tabs favorite-actived">
                                                                            <span class="favorite-key"> Trong TPBank </span>
                                                                        </div>
                                                                        <div class="favorite-tabs">
                                                                            <span class="favorite-key"> Liên Ngân Hàng </span>
                                                                        </div>
                                                                        <div class="favorite-tabs">
                                                                            <span class="favorite-key"> Thẻ ATM</span>
                                                                        </div>
                                                                        <div class="favorite-tabs">
                                                                            <span class="favorite-key"> Chứng Khoán </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="favorite-content">
                                                                    <div class="favorite-padding">
                                                                        <div class="searching-container ng-untouched ng-pristine ng-valid">
                                                                            <img class="searching-icon"
                                                                                src="./assets/images/icons/transfer/ic_search.svg"/>
                                                                                <input class="searching-input ng-untouched ng-pristine ng-valid"
                                                                                    formcontrolname="object" placeholder="Tìm kiếm"/>
                                                </div>
                                            </div>
                                                                            <div class="favorite-scroll">
                                                                                <div class="favorite-detail">
                                                                                    <div class="favorite-name favorite-margin-bottom">
                                                                                        <span class="favorite-text-bold favorite-text-size">B</span>
                                                                                        <img class="favorite-icon"
                                                                                            src="./assets/images/icons/transfer/icons-star.svg"/>
                                                    </div>
                                                                                        <div class="favorite-account">
                                                                                            <span class="favorite-text-size">23425</span>
                                                                                            <img class="favorite-icon"
                                                                                                src="./assets/images/icons/transfer/icons-trash.svg"/>
                                                    </div>
                                                                                        </div>
                                                                                        <div class="favorite-detail">
                                                                                            <div class="favorite-name favorite-margin-bottom">
                                                                                                <span class="favorite-text-bold favorite-text-size">A</span>
                                                                                                <img class="favorite-icon"
                                                                                                    src="./assets/images/icons/transfer/icons-star.svg"/>
                                                    </div>
                                                                                                <div class="favorite-account"><span
                                                                                                    class="favorite-text-size">234234</span>
                                                                                                    <img class="favorite-icon"
                                                                                                        src="./assets/images/icons/transfer/icons-trash.svg"/>
                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <img class="icon-add" routerlink="/main/transfer/contact/create"
                                                                                            src="./assets/images/icons/transfer/ic_add-fund-transfer.svg" tabindex="0"/>
                                    </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div class="modal fade" id="transfer-money" tabindex="-1" role="dialog"
                                                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                            <div class="modal-dialog" role="document">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h5 class="modal-title" id="exampleModalLabel">Mẫu chuyển tiền</h5>
                                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                            <span aria-hidden="true">&times;</span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        <div class="template-container">
                                                                                            <div class="template-content">
                                                                                                <div class="template-padding">
                                                                                                    <div class="searching-container ng-untouched ng-pristine ng-valid">
                                                                                                        <img class="searching-icon" src="assets/images/icons/transfer/ic_search.svg"/>
                                                                                                            <input class="searching-input ng-untouched ng-pristine ng-valid"
                                                                                                                formcontrolname="object" placeholder="Tìm kiếm"/>
                                                </div>
                                            </div>
                                                                                                        <div class="template-scroll">
                                                                                                            <div class="template-detail">
                                                                                                                <div class="template-name template-margin-bottom">
                                                                                                                    <span class="template-text-bold template-text-size">Liem</span>
                                                                                                                    <i class="far fa-heart favorite-inactive"></i>
                                                                                                                </div>
                                                                                                                <div class="template-text-normal template-margin-bottom">
                                                                                                                    <span class="template-text-bold template-text-size">TRUONG THANH
                                                                                                                        LIEM</span>
                                                                                                                </div>
                                                                                                                <div class="template-text-normal template-margin-bottom">
                                                                                                                    <span class="template-text-size">4321 0001 0868 70</span>
                                                                                                                </div>
                                                                                                                <div class="template-text-normal template-margin-bottom">
                                                                                                                    <span class="template-text-size">BIDV</span>
                                                                                                                </div>
                                                                                                                <div class="template-action">
                                                                                                                    <span class="template-text-size action-name">Dùng mẫu <i
                                                                                                                        class="icon-right"></i>
                                                                                                                    </span>
                                                                                                                    <img class="template-icon" src="assets/images/icons/transfer/icons-trash.svg">
                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="template-detail">
                                                                                                                    <div class="template-name template-margin-bottom">
                                                                                                                        <span class="template-text-bold template-text-size">Taan
                                                                                                                            VbBank</span>
                                                                                                                        <i class="far fa-heart favorite-inactive"></i>
                                                                                                                    </div>
                                                                                                                    <div class="template-text-normal template-margin-bottom">
                                                                                                                        <span class="template-text-bold template-text-size">TRAN NGOC
                                                                                                                            TAN</span>
                                                                                                                    </div>
                                                                                                                    <div class="template-text-normal template-margin-bottom">
                                                                                                                        <span class="template-text-size">2013 9038 9</span>
                                                                                                                    </div>
                                                                                                                    <div class="template-text-normal template-margin-bottom">
                                                                                                                        <span class="template-text-size">VPBank</span>
                                                                                                                    </div>
                                                                                                                    <div class="template-action">
                                                                                                                        <span class="template-text-size action-name">Dùng mẫu
                                                                                                                            <i class="icon-right"></i>
                                                                                                                        </span>
                                                                                                                        <img class="template-icon" src="assets/images/icons/transfer/icons-trash.svg"/>
                                                    </div>
                                                                                                                    </div>
                                                                                                                    <div class="template-detail">
                                                                                                                        <div class="template-name template-margin-bottom">
                                                                                                                            <span class="template-text-bold template-text-size">Tien dong
                                                                                                                                hoc</span>
                                                                                                                            <i class="far fa-heart favorite-inactive"></i>
                                                                                                                        </div>
                                                                                                                        <div class="template-text-normal template-margin-bottom">
                                                                                                                            <span class="template-text-bold template-text-size">TRAN VAN
                                                                                                                                THAI</span>
                                                                                                                        </div>
                                                                                                                        <div class="template-text-normal template-margin-bottom">
                                                                                                                            <span class="template-text-size">2221 0003 6093 88</span>
                                                                                                                        </div>
                                                                                                                        <div class="template-text-normal template-margin-bottom">
                                                                                                                            <span class="template-text-size">BIDV</span>
                                                                                                                        </div>
                                                                                                                        <div class="template-action">
                                                                                                                            <span class="template-text-size action-name">Dùng mẫu
                                                                                                                                <i class="icon-right"></i>
                                                                                                                            </span>
                                                                                                                            <img class="template-icon" src="assets/images/icons/transfer/icons-trash.svg"/>
                                                    </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>



                                                                                            <div class="right">
                                                                                                <div class="quick-links">
                                                                                                    <div class="title"> Tiện ích nhanh </div>
                                                                                                    <div class="body">
                                                                                                        <a routerlink="/main/transfer/internal" href="/retail/vX/main/transfer/internal">Chuyển
                                                                                                            tiền trong ngân hàng
                                                                                                            <i class="fas fa-chevron-right"></i>
                                                                                                        </a>
                                                                                                        <a routerlink="/main/transfer/interbank"
                                                                                                            href="/retail/vX/main/transfer/interbank">Chuyển tiền liên ngân hàng
                                                                                                            <i class="fas fa-chevron-right"></i>
                                                                                                        </a>
                                                                                                        <a routerlink="/main/bill" href="/retail/vX/main/bill">Thanh toán hoá đơn
                                                                                                            <i class="fas fa-chevron-right"></i>
                                                                                                        </a>
                                                                                                        <a routerlink="/main/inquiry/credit-card" href="/retail/vX/main/inquiry/credit-card">Tra
                                                                                                            cứu thẻ tín dụng
                                                                                                            <i class="fas fa-chevron-right"></i>
                                                                                                        </a>
                                                                                                        <a routerlink="/main/mobile" href="/retail/vX/main/mobile">Nạp tiền điện thoại
                                                                                                            <i class="fas fa-chevron-right"></i>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="mt-4">
                                                                                                    <div
                                                                                                        class="banner-swiper-container swiper-container swiper-container-initialized swiper-container-horizontal">
                                                                                                        <div class="swiper-wrapper"
                                                                                                            style="transition-duration: 0ms; transform: translate3d(-300px, 0px, 0px);">
                                                                                                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next"
                                                                                                                data-swiper-slide-index="1" style="width: 270px; margin-right: 30px;">
                                                                                                                <a target="_blank" href="#">
                                                                                                                    <img alt="" class="w-100" style="border-radius: 5px; height: 100%;"
                                                                                                                        src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/86a4d975-712f-49f0-9ae0-bded776fc4d7"/>
                                                                                                                        </a>

                                    </div>
                                                                                                                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0"
                                                                                                                    style="width: 270px; margin-right: 30px;">
                                                                                                                    <a target="_blank" href="#">
                                                                                                                        <img alt="" class="w-100" style="border-radius: 5px; height: 100%;"
                                                                                                                            src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/acdd6d66-7b82-4265-95ee-c6d4021e9c28"/>
                                                                                                                            </a>
                                    </div>
                                                                                                                    <div class="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                                                                                        data-swiper-slide-index="1" style="width: 270px; margin-right: 30px;">
                                                                                                                        <a target="_blank" href="#">
                                                                                                                            <img alt="" class="w-100" style="border-radius: 5px; height: 100%;"
                                                                                                                                src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/86a4d975-712f-49f0-9ae0-bded776fc4d7"></a>

                                    </div>
                                                                                                                        <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0"
                                                                                                                            style="width: 270px; margin-right: 30px;">
                                                                                                                            <a target="_blank" href="#">
                                                                                                                                <img alt="" class="w-100" style="border-radius: 5px; height: 100%;"
                                                                                                                                    src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/acdd6d66-7b82-4265-95ee-c6d4021e9c28"></a>
                                    </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            class="swiper-pagination button-pag swiper-pagination-clickable swiper-pagination-bullets">
                                                                                                                            <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                                                                                                                                role="button" aria-label="Go to slide 1"></span>
                                                                                                                            <span class="swiper-pagination-bullet" tabindex="0" role="button"
                                                                                                                                aria-label="Go to slide 2"></span>
                                                                                                                        </div>
                                                                                                                        <div class="button-area">
                                                                                                                            <div class="btn-slider swiper-button-next" tabindex="0" role="button"
                                                                                                                                aria-label="Next slide">
                                                                                                                                <div class="circle right"></div>
                                                                                                                            </div>
                                                                                                                            <div class="btn-slider swiper-button-prev" tabindex="0" role="button"
                                                                                                                                aria-label="Previous slide">
                                                                                                                                <div class="circle left"></div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        );
}

                                                                                                        export default TransferPage;