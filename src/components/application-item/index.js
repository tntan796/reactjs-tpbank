import './index.css';

function ApplicationItemComponent({
    icon, altIcon, appName
}) {
    return (
        <div className="application-item">
            <img alt={altIcon} src={icon} />
            <span className="app-name"> {appName} </span>
        </div>
    );
}

export default ApplicationItemComponent;