import './index.css';
import DeviceItemComponent from '../../../components/device-item/item';
import { Devices } from '../../../common/mock-data/main.mockdata';

function SettingDeviceManagementPage() {
    const deviceActiveElms = Devices.filter(t => t.timeColor !== '')
        .map((device, index) => (
            <DeviceItemComponent
                key={index}
                icon={device.icon}
                altIcon={device.altIcon}
                device={device.device}
                link={device.link}
                time={device.time}
                timeColor={device.timeColor}
            />
        ))
    const deviceElms = Devices.filter(t => t.timeColor === '')
        .map((device, index) => (
            <DeviceItemComponent
                key={index}
                icon={device.icon}
                altIcon={device.altIcon}
                device={device.device}
                link={device.link}
                time={device.time}
                timeColor={device.timeColor}
            />
        ))
    return (
        <div className="content-wrap">
            <div className="device-content">
                <div className="title">
                    <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_lock.svg" alt="ic_device_lock" />
                    <p>Các thiết bị quý khách từng sử dụng để đăng nhập vào ebank</p>
                </div>
                <div className="device-items">
                    {deviceActiveElms}
                    <p className="otherDeviceTitle">Thiết bị khác</p>
                    {deviceElms}
                </div>
            </div>
        </div>
    );
}

export default SettingDeviceManagementPage;