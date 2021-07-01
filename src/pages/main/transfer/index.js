import { Switch, Route, useRouteMatch} from 'react-router-dom';
import './index.css';
import TransferInternalPage from './internal/index';
import TransferDefaultPage from './default/index';
import TransferStockPage from './stock/index';
import TransferSchedulePage from './schedule/index';
function TransferPage() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/schedule`}> <TransferSchedulePage /> </Route>
            <Route path={`${match.path}/stock`}> <TransferStockPage /> </Route>
            <Route path={`${match.path}/internal`}> <TransferInternalPage /> </Route>
            <Route path={match.path} exact> <TransferDefaultPage /> </Route>
        </Switch>
    );
}

export default TransferPage;