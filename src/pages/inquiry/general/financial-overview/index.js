import './index.css';
import OverviewItemComponent from '../../../../components/overview-item/index';
import { Overviews } from '../../../../common/mock-data/main.mockdata';

function FinancialOverviewPage() {

    const overviewElms = Overviews.map((overview, index) => (
        <OverviewItemComponent
            key = {index}
            icon = {overview.icon}
            altIcon = {overview.altIcon}
            label = {overview.label}
            amount = {overview.amount}
        />
    ))

    return (
        <div className="content-wrap">
            <div className="overview">
                {overviewElms}
            </div>
        </div>
    );
}

export default FinancialOverviewPage;