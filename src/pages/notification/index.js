import './index.css';
import NotificationItemComponent from '../../components/notification-item/index';
import { Notifications } from '../../common/mock-data/main.mockdata';

function NotificationPage() {
    const notificationElms = Notifications.map((notification, index) => (
        <NotificationItemComponent
            key={index}
            message={notification.message}
            date={notification.date}
        />
    ))
    return (
        <div>
            <div className="content-wrap">
                <div className="notification-page">
                    <div className="tab-list">
                        <div className="tab active"> Biến Động Số Dư
                        </div>
                        <div className="tab"> Ưu đãi
                            <span className="have-new-icon" />
                        </div>
                        <div className="tab"> Chung
                            <div className="have-new-icon number"> 22 </div>
                        </div>
                    </div>
                    <div className="list">
                        {notificationElms}
                    </div>
                    <img className="btn-check-all" src="./assets/images/icons/check-all.svg" alt="check-all" />
                </div>
            </div>
            <div className="d-none">
                <div className="mx-auto" style={{ width: '496px' }}>
                    <div className="preview d-none" style={{ height: '673px', overflow: 'hidden' }}>
                        <div>
                            <img src="/assets/images/icons/bao-lixi.svg" alt="bao-lixi" />
                        </div>
                        <div className="lottieContainer d-none">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationPage;