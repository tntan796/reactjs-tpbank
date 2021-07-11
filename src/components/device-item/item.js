import './index.css';

function DeviceItemComponent({
    icon, altIcon, device, link, time, timeColor = ''
}) {
    return (
        <div>
            <div className="item">
                <img src={icon} alt={altIcon} />
                <div className="info">
                    <p>{device}</p>
                    <h4 style={{ color: timeColor }}>{time}</h4>
                </div>
                <span>{link}</span>
            </div>
            <div className="line" />
        </div>
    );
}

export default DeviceItemComponent;