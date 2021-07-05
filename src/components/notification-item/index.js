import './index.css';

function NotificationItemComponent({
    message, date
}) {
    return (
        <div className="item notification-list-item read-noti">
            <div className="message">{message}</div>
            <div className="date">{date}</div>
            <i className="fas fa-trash btn-delete" />
        </div>
    );
}

export default NotificationItemComponent;