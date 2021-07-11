import './index.css';
import ApplicationItemComponent from '../../../../components/application-item/index';
import { Applications } from '../../../../common/mock-data/main.mockdata';
function GeneralAppPage() {
    const applicationElms = Applications.map((app, index) => (
        <ApplicationItemComponent
            key = {index}
            icon = {app.icon}
            altIcon = {app.altIcon}
            appName = {app.appName}
        />
    ))
    return (
        <div className="content-wrap">
            <div className="application">
                {applicationElms}
            </div>
        </div>
    );
}

export default GeneralAppPage;