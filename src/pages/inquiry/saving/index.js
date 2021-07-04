import './index.css';
import InquirySavingItem from '../../../components/inquiry-saving-item/index';
import { InquirySavings } from '../../../common/mock-data/main.mockdata';

function InquirySavingPage() {
    const savingElms = InquirySavings.map((saving, index) => (
        <InquirySavingItem
            key = {index}
            icon = {saving.icon}
            altIcon = {saving.altIcon}
            name = {saving.name}
            accountNumber = {saving.accountNumber}
            money = {saving.money}
            settlement = {saving.settlement}
        />
    ));

    return (
        <div className="content row">
            <div className="content-left">
                <div className="total-vnd card borderBottom">
                    <h4 className="title">Tổng tiết kiệm VND</h4>
                    <h4 className="amount">660,492 <span>VND</span></h4>
                </div>
            </div>
            <div className="content-right">
                <div className="scroll-content">
                    <div className="account-saving">
                        <div className="title-saving pointer">
                            <h4>Tiết Kiệm Kỳ Hạn Điện Tử
                                <span>(83)</span>
                            </h4>
                            <img alt="down" className="icon-down scaleHydro" src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Arrow_Down.svg" />
                        </div>
                        <div className="has-conntent-saving">
                            {savingElms}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquirySavingPage;