import './index.css';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import GeneralDefaultPage from './default/index';
import FinancialOverviewPage from './financial-overview';
import PersonInfoPage from './person-info/index';

function InquiryGeneralPage() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}financial-overview`}> <FinancialOverviewPage /> </Route>
            <Route path={`${match.path}person-info`}> <PersonInfoPage /> </Route>
            <Route path={match.path} exact> <GeneralDefaultPage /> </Route>
        </Switch>
    );
}

export default InquiryGeneralPage;