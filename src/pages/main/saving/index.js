import './index.css';
import { Link } from 'react-router-dom';
import SavingItemComponent from '../../../components/saving-item/index';
import { Savings } from '../../../common/mock-data/main.mockdata';

function SavingPage() {

    const savingElms = Savings.map((saving, index) => (
        <SavingItemComponent
            key={index}
            icon = {saving.icon}
            altIcon = {saving.altIcon}
            savingName = {saving.savingName}
            savingNumber = {saving.savingNumber}
            savingAmount = {saving.savingAmount}
            finalizationDate = {saving.finalizationDate}
            pathDetail = {saving.pathDetail}/>
    ));

    return (
        <div className="content-wrap">
            <div className="saving-home">
                <div className="saving-home-normal">
                    <div className="saving-action-inquiry">
                        <div className="icon-inquiry">
                            <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/images/menu/inquiry-active.svg" />
                        </div>
                        <div className="content">
                            <span className="title">Tra cứu gói tiết kiệm tại Quầy, LiveBank, Savy?</span>
                            <Link className="action-link" to="/inquiry/inquiry-saving" tabIndex={0}>
                                <span className="mr-2">Bấm vào đây</span>
                                <i className="fas fa-chevron-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="list-saving">
                        <div className="image-cover" style={{backgroundImage: "url('/assets/images/icons/saving/saving-home-cover-2.4ee69270ca6f9bfa026c.png')"}}>
                            <span>Tiết kiệm càng nhiều, lợi ích càng nhiều!</span>
                            <div className="create-package">
                                <Link  to="/saving/create-package">
                                    <i className="fas fa-plus mr-2" />
                                    <span>Tạo Gói Tiết Kiệm</span>
                                </Link>
                            </div>
                        </div>
                        <div className="title">Gói Tiết kiệm Điện tử đã có ({Savings.length})</div>
                        {savingElms}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavingPage;