export const TransferCards = [
    {
        link: '/transfer/internal', title: 'Chuyển tiền trong ngân hàng',
        icon: '/assets/images/icons/transfer/internal.png', altIcon: 'internal'
    },
    {
        link: '/transfer/internal', title: 'Chuyển tiền qua thẻ ATM',
        icon: '/assets/images/icons/transfer/napas.png', altIcon: 'napas'
    },
    {
        link: '/transfer/stock', title: 'Chuyển tiền chứng khoán',
        icon: '/assets/images/icons/transfer/icons-stock.png', altIcon: 'internal'
    },
    {
        link: '/transfer/bath', title: 'Chuyển tiền theo danh sách',
        icon: '/assets/images/icons/transfer/batch.png', altIcon: 'batch'
    },
    {
        link: '/transfer/schedule', title: 'Chuyển tiền theo lịch',
        icon: '/assets/images/icons/transfer/schedule.png', altIcon: 'schedule'
    },
    {
        link: '#', title: 'Mẫu chuyển tiền',
        icon: '/assets/images/icons/transfer/form.png', altIcon: 'internal',
        other: {"data-toggle" : "modal", "data-target" : "#transfer-money"}
    }
];

export const BillCards = [
    {
        link: '/bill/bill-electric', title: 'Điện',
        icon: '/assets/images/icons/bill/electricity.png', altIcon: 'electricity'
    },
    {
        link: '/bill/bill-electric', title: 'Nước',
        icon: '/assets/images/icons/bill/water.png', altIcon: 'water'
    },
    {
        link: '/bill/bill-electric', title: 'Điện thoại cố định',
        icon: '/assets/images/icons/bill/landline-phone.png', altIcon: 'landline-phone'
    },
    {
        link: '/bill/bill-electric', title: 'Điện thoại di động trả sau',
        icon: '/assets/images/icons/bill/phone-bill.png', altIcon: 'phone-bill'
    },
    {
        link: '/bill/bill-electric', title: 'Cước Internet ADSL',
        icon: '/assets/images/icons/bill/adsl-internet.png', altIcon: 'adsl-internet'
    },
    {
        link: '/bill/bill-electric', title: 'Cước Truyền hình',
        icon: '/assets/images/icons/bill/cable-tv.png', altIcon: 'cable-tv'
    },
    {
        link: '/bill/bill-electric', title: 'Vé tàu',
        icon: '/assets/images/icons/bill/train-ticket.png', altIcon: 'train-ticket'
    },
    {
        link: '/bill/bill-electric', title: 'Vé máy bay trả sau',
        icon: '/assets/images/icons/bill/air-ticket.png', altIcon: 'air-ticket'
    },
    {
        link: '/bill/bill-electric', title: 'Bảo hiểm Sun Life',
        icon: '/assets/images/icons/bill/mask_group.svg', altIcon: 'mask_group'
    },
    {
        link: '/bill/bill-electric', title: 'Học phí',
        icon: '/assets/images/icons/bill/tuition.png', altIcon: 'tuition'
    },
    {
        link: '/bill/bill-electric', title: 'Viện phí',
        icon: '/assets/images/icons/bill/hospital-fee.png', altIcon: 'tuition'
    }
];

export const Savings = [
    {
        icon: '/assets/images/icons/saving/ic_piggy_2.svg', altIcon: 'ic_piggy_2',
        savingName: 'TK Điện Tử 10/02/2021', savingNumber: '02342321 06N',
        savingAmount: '2,500,000 VND', finalizationDate: 'Tất toán 17/03/2021',
        pathDetail: '/saving/saving-detail'
    },
    {
        icon: '/assets/images/icons/saving/ic_piggy_2.svg', altIcon: 'ic_piggy_2',
        savingName: 'TK Điện Tử 08/02/2021', savingNumber: '02234221 06M',
        savingAmount: '2,500,000 VND', finalizationDate: 'Tất toán 08/03/2021',
        pathDetail: '/saving/saving-detail'
    }
];

export const SavingPackages = [
    {
        icon : '/assets/images/icons/saving/ic_piggy_2.svg', altIcon : 'ic_piggy_2', packageName : 'Tiết kiệm Điện Tử',
        packagePeriod : 'Từ 1 tuần đến 36 tháng', interestRate : '6.45 %',
        path : ''
    },
    {
        icon : '/assets/images/icons/saving/ic_gold_2.svg', altIcon : 'ic_gold_2', packageName : 'Tiết kiệm Tài Lộc Điện Tử',
        packagePeriod : '4, 5, 7, 13 tháng', interestRate : '6.25 %',
        path : ''
    }
]

export const Loans = [
    {
        link: '#', title: 'Ứng tiền từ sổ tiết kiệm',
        icon: './assets/images/icons/loan/overdraft.svg', altIcon: 'overdraft'
    },
    {
        link: '#', title: 'Tra cứu khoản vay',
        icon: './assets/images/icons/loan/inquiry.svg', altIcon: 'inquiry'
    }
]

export const Gifts = [
    {
        icon: '/assets/images/icons/loyalty/gif.png', altIcon: 'gif',
        title: 'Voucher Grab trị giá 30.000 đồng', partner: 'Đối tác TPBank',
        point: '3,300', link: '/loyalty/gift'
    },
    {
        icon: '/assets/images/icons/loyalty/gif.png', altIcon: 'gif',
        title: 'Voucher Grab trị giá 50.000 đồng', partner: 'Đối tác TPBank',
        point: '5,500', link: '/loyalty/gift'
    },
    {
        icon: '/assets/images/icons/loyalty/gif.png', altIcon: 'gif',
        title : 'Voucher tại hệ thống Nhà hàng Lotteria trị giá 50k',
        partner: 'Đối tác TPBank', point: '5,500', link: '/loyalty/gift'
    }
]

export const Wallets = [
    {
        icon : "https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/1e61f265-d40f-437a-87e2-08eca11f0ebe?_=1571989230425",
        altIcon : "momo", provider : "Momo", fullname : "TANO", walletId : "096 79234234"
    },
    {
        icon : "https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/4764a2da-e492-431f-9735-a61ab859c224?_=1571989188844",
        altIcon : "AirPay", provider : "AirPay", fullname : "TANO", walletId : "096 79234234"
    },
    {
        icon : "https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/3e0f25cd-b027-4748-ada5-b1faa4223b0f?_=1591348045058",
        altIcon : "ZaloPay", provider : "ZaloPay", fullname : "TANO", walletId : "096 79234234"
    }
]

export const Inquiries = [
    {
        link: 'inquiry-account', title: 'Tài khoản',
        icon: 'https://ebank.tpb.vn/retail/vX/assets/images/card-links/bank.svg', altIcon: 'bank'
    },
    {
        link: 'inquiry-saving', title: 'Tiết kiệm',
        icon: 'https://ebank.tpb.vn/retail/vX/assets/images/card-links/saving.svg', altIcon: 'saving'
    },
    {
        link: 'inquiry-loan', title: 'Khoản vay',
        icon: 'https://ebank.tpb.vn/retail/vX/assets/images/card-links/loan.svg', altIcon: 'loan'
    },
    {
        link: 'inquiry-credit-card', title: 'Thẻ tín dụng',
        icon: 'https://ebank.tpb.vn/retail/vX/assets/images/card-links/card.svg', altIcon: 'card'
    },
    {
        link: 'inquiry-general', title: 'Thông Tin Tổng Hợp',
        icon: 'https://ebank.tpb.vn/retail/vX/assets/images/card-links/ic_in_ge_home.svg', altIcon: 'ic_in_ge_home'
    },
    {
        link: 'inquiry-vat', title: 'Hóa Đơn VAT',
        icon: 'https://ebank.tpb.vn/retail/vX/assets/images/card-links/ic_inquiry_vat.svg', altIcon: 'ic_inquiry_vat'
    },
]

export const InquirySavings = [
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_piggy.svg',
        altIcon : 'ic_piggy',
        name : 'TK Kỳ Hạn Điện Tử 07/09/20',
        accountNumber : '23423 04V',
        money : '2,538,692',
        settlement : '07/03/2021'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_piggy.svg',
        altIcon : 'ic_piggy',
        name : 'TK Điện Tử 08/02/2021',
        accountNumber : '23423 06K',
        money : '2,500,000',
        settlement : '08/03/2021'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_piggy.svg',
        altIcon : 'ic_piggy',
        name : 'TK Điện Tử 08/02/2021',
        accountNumber : '23423 06F',
        money : '2,500,000',
        settlement : '08/08/2021'
    }
]

export const CardLinkItems = [
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_personal_info.svg', altIcon: 'ic_personal_info',
        link: 'inquiry-general/person-info', title: 'Thông tin cá nhân'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_periodic.svg', altIcon: 'ic_periodic',
        link: 'inquiry-general/periodic', title: 'Danh sách hóa đơn/lệnh chuyển tiền'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_financial_overview.svg', altIcon: 'ic_financial_overview',
        link: 'inquiry-general/financial-overview', title: 'Tổng quan tài chính'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_wallet.svg', altIcon: 'ic_wallet',
        link: 'inquiry-general/ewallet', title: 'Ví điện tử liên kết'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_limit.svg', altIcon: 'ic_limit',
        link: 'inquiry-general/limit', title: 'Thông tin hạn mức'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_app_used.svg', altIcon: 'ic_app_used',
        link: 'inquiry-general/app', title: 'Ứng dụng của TPBank'
    }
]

export const Overviews = [
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_available_balances.svg', altIcon: 'ic_in_ge_available_balances',
        label: 'Số dư khả dụng TKTT', amount: '706,555'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_loan.svg', altIcon: 'ic_in_ge_loan',
        label: 'Khoản vay', amount: '0'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_total_saving.svg', altIcon: 'ic_in_ge_total_saving',
        label: 'Tổng tiết kiệm', amount: '60,492'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_debit.svg', altIcon: 'ic_in_ge_debit',
        label: 'Dư nợ thẻ tín dụng', amount: '0'
    }
]

export const EWallets = [
    {
        icon : 'https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/1e61f265-d40f-437a-87e2-08eca11f0ebe?_=1571989230425',
        altIcon : 'Momo', walletName : 'Momo', accountName : 'Tano',
        phone : '21347897312', accountNumber : '0123456', accountBalance : '706,555',
        depositLimitPerDay : '10,000,000', depositLimitPerTime : '5,000,000',
    },
    {
        icon : 'https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/4764a2da-e492-431f-9735-a61ab859c224?_=1571989188844',
        altIcon : 'AirPay', walletName : 'AirPay', accountName : 'Tano',
        phone : '21347897312', accountNumber : '0123456', accountBalance : '706,555',
        depositLimitPerDay : '10,000,000', depositLimitPerTime : '5,000,000',
    },
    {
        icon : 'https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/3e0f25cd-b027-4748-ada5-b1faa4223b0f?_=1591348045058',
        altIcon : 'ZaloPay', walletName : 'ZaloPay', accountName : 'Tano',
        phone : '21347897312', accountNumber : '0123456', accountBalance : '706,555',
        depositLimitPerDay : '10,000,000', depositLimitPerTime : '5,000,000',
    }
]

export const TransferInfos = [
    {
        label: 'Trong TPBank', depositLimitPerDay: '50,000,000', depositLimitPerTime: '100,000,000'
    },
    {
        label: 'Liên ngân hàng (nhanh 24/7)', depositLimitPerDay: '50,000,000', depositLimitPerTime: '100,000,000'
    },
    {
        label: 'Liên ngân hàng (thông thường)', depositLimitPerDay: '50,000,000', depositLimitPerTime: '100,000,000'
    },
    {
        label: 'Thanh toán hóa đơn', depositLimitPerDay: '50,000,000', depositLimitPerTime: '100,000,000'
    }
]

export const Applications = [
    {
        icon: '/assets/images/icons/inquiry/app_ebank_tpbank.svg',
        altIcon: 'app_ebank_tpbank',
        appName: 'eBank TPBank'
    },
    {
        icon: '/assets/images/icons/inquiry/app_used_savy.svg',
        altIcon: 'app_ebank_tpbank',
        appName: 'Savy'
    },
    {
        icon: '/assets/images/icons/inquiry/app_used_quickpay.svg',
        altIcon: 'app_used_quickpay',
        appName: 'QuickPay'
    }
]

export const SettingCardItems = [
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Profile.svg',
        altIcon : 'Icons_Profile',
        titleCard : 'Nâng cấp tài khoản',
        type: '',
        link: '/setting/setting-upgrade'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/setting/unlock.svg',
        altIcon : 'unlock',
        titleCard : 'Đổi mật khẩu',
        type: 'personal',
        link: '/setting/setting-change-password'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/setting/shield.svg',
        altIcon : 'shield',
        titleCard : 'Phương thức xác thực giao dịch',
        type: 'personal',
        link: '/setting/setting-auth-method'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Badge.svg',
        altIcon : 'Icons_Badge',
        titleCard : 'Thông tin tài khoản',
        type: 'personal',
        link: '/setting/setting-user'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Default_Account.svg',
        altIcon : 'Icons_Default_Account',
        titleCard : 'Tài khoản liên kết với số điện thoại',
        type: 'personal',
        link: '/setting/setting-default'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Manage_Device.svg',
        altIcon : 'Icons_Manage_Device',
        titleCard : 'Quản lý thiết bị',
        type: 'personal',
        link: '/setting/setting-device-management'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_SMS_Banking.svg',
        altIcon : 'Icons_SMS_Banking',
        titleCard : 'SMS Banking',
        type: 'personal',
        link: '#'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Question _ Outline.svg',
        altIcon : 'Icons_Question',
        titleCard : 'Câu hỏi thường gặp',
        type: 'common',
        link: '/setting/setting-faq'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Phone_Calling.svg',
        altIcon : 'Icons_Phone_Calling',
        titleCard : 'Liên hệ hỗ trợ',
        type: 'common',
        link: '/setting/setting-support'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Share.svg',
        altIcon : 'Icons_Share',
        titleCard : 'Giới thiệu bạn bè',
        type: 'common',
        link: '/setting/setting-referring'
    }
]

export const Devices = [
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_web.svg',
        altIcon : 'ic_device_web',
        device : 'Chrome',
        link : 'Huỷ liên kết',
        time : 'Đang đăng nhập',
        timeColor : '#17C37B'
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_web.svg',
        altIcon : 'ic_device_web',
        device : 'Chrome',
        link : 'Huỷ liên kết',
        time : 'Đăng nhập lần cuối 21:37 02/03/2021',
        timeColor : ''
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_mobile.svg',
        altIcon : 'ic_device_mobile',
        device : 'Chrome',
        link : 'Huỷ liên kết',
        time : 'Đăng nhập lần cuối 23:21 26/02/2021',
        timeColor : ''
    },
    {
        icon : 'https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_mobile.svg',
        altIcon : 'ic_device_mobile',
        device : 'MI 8',
        link : 'Huỷ liên kết',
        time : 'Đăng nhập lần cuối 08:39 30/11/2020',
        timeColor : ''
    }
]

export const Transactions = [
    {
        day: '24',
        dayOfWeek: 'Thứ 4',
        month: 'Tháng 2/2021',
        detailRecord: 'NGUYEN THI THU HANG',
        moneyTransfer: '500,000',
        type: 'Chuyển tiền liên ngân hàng'
    },
    {
        day: '12',
        dayOfWeek: 'Thứ 6',
        month: 'Tháng 2/2021',
        detailRecord: 'NGUYEN TIEN DOAN',
        moneyTransfer: '100,000',
        type: 'Chuyển tiền trong ngân hàng'
    },
    {
        day: '12',
        dayOfWeek: 'Thứ 6',
        month: 'Tháng 2/2021',
        detailRecord: 'NGUYEN TIEN DOAN',
        moneyTransfer: '100,000',
        type: 'Chuyển tiền trong ngân hàng'
    }
]

export const Notifications = [
    {
        message: `(TPBank): 25/06/21;14:16
        TK: xxxx5921501
        PS:+1.000.000VND
        SD: 1.005.324VND
        SD KHA DUNG: 1.005.324VND
        ND: anh manh gui tien`,
        date: `25/06 14:28`
    },
    {
        message: `(TPBank):23/06/21;17:21
        TK: xxxx5921501
        PS: -1.000.000VND
        SD: 5.283VND
        SD KHA DUNG: 5.283VND
        ND: RUT TIEN TAI ATM`,
        date: `23/06 17:21`
    },
    {
        message: `(TPBank): 22/06/21;17:42
        TK: xxxx5921501
        PS:-3.565.000VND
        SD: 1.005.283VND
        SD KHA DUNG: 1.005.283VND
        ND: TRAN NGOC TAN chuyen tien`,
        date: `22/06 17:43`
    }
]

export const Faqs = [
    {
        question: '1. Dịch vụ TPBank eBank có những tính năng gì?',
        answer: `<div className="answer">
        <p> Quý khách có thể sử dụng TPBank eBank để giao dịch với Ngân hàng
            24/7, mọi lúc mọi nơi (cả trong và ngoài nước), bao gồm các dịch vụ: </p>
        <ul>
            <li>Tra cứu thông tin, xem và in sao kê tài khoản</li>
            <li>Mở tiết kiệm trực tuyến, tra cứu, thay đổi thông tin và tất
                toán</li>
            <li>Tra cứu thông tin khoản vay, ứng sổ tiết kiệm</li>
            <li>Giao dịch chuyển tiền</li>
            <li>Thanh toán hóa đơn</li>
            <li>Tra cứu thông tin, thanh toán dư nợ thẻ, khoá và mở khóa thẻ.
            </li>
        </ul>
    </div>`
    },
    {
        question: '2. Truy cập TPBank eBank như thế nào?',
        answer: ` <p> Quý khách có thể thực hiện giao dịch trên eBank sử dụng mạng
        Internet thông qua 2 kênh truy cập sau: </p>
        <ul>
            <li>Website: <a href="https://ebank.tpb.vn">https://ebank.tpb.vn</a></li>
            <li>Ứng dụng di động TPBank Mobile: Tải ứng dụng tại <a href="https://itunes.apple.com/vn/app/tpbank-mobile/id450464147?mt=8">iOS</a>&nbsp;<a href="https://play.google.com/store/apps/details?id=com.tpb.mb.gprsandroid&hl=en">Android</a>
            </li>
        </ul>`
    },
    {
        question: '3. Đăng ký và nâng cấp tài khoản TPBank eBank như thế nào?',
        answer: `<p> Quý khách có thể đăng ký sử dụng eBank bằng một trong các cách sau
        đây: </p>
        <ul>
            <li>
                <p> Mang CMND/CCCD/Hộ chiếu tới điểm giao dịch gần nhất của
                    TPBank <a href="https://tpb.vn/lien-he/tim-diem-giao-dich">tại đây</a> để được hỗ trợ
                    hoàn thiện thủ tục. </p>
            </li>
            <li>
                <p> Chọn “Đăng ký” trên màn hình chính của ứng dụng điện thoại
                    và hoàn thiện thủ tục theo các bước được hướng dẫn. </p>
                <p> TPBank eBank có các loại tài khoản tương ứng với các hạn
                    mức giao dịch khác nhau. Loại tài khoản của Quý khách được xác định dựa trên
                    trạng thái hoàn thiện thông tin với ngân hàng. Nếu Quý khách đã có tài khoản
                    eBank nhưng chưa hoàn thiện xác thực thông tin, vui lòng tới các điểm giao dịch
                    của TPBank để được hỗ trợ và nâng cấp tài khoản. </p>
            </li>
        </ul>
        <p> TPBank eBank có 3 cấp tài khoản tương ứng với các hạn mức giao
            dịch khác nhau. Nếu Quý khách đã có tài khoản eBank (cấp 1 hoặc cấp 2) và muốn nâng cấp
            tài khoản, vui lòng tới các điểm giao dịch của TPBank để được hỗ trợ thêm. </p>`
    },
    {
        question: '4. TPBank eBank có an toàn và bảo mật không?',
        answer: `<p> TPBank eBank kết hợp nhiều lớp bảo mật để đảm bảo an toàn thông
        tin cho Quý khách trong quá trình sử dụng: </p>
        <ul>
            <li> Sử dụng kết hợp giữa lớp bảo mật tĩnh (Tên và mật khẩu đăng
                nhập) và lớp bảo mật động (các phương thức xác thực khác như OTP, eToken) </li>
            <li> Thiết lập hạn mức giao dịch tối đa cho một lần và một ngày
                giao dịch tương ứng với từng cấp tài khoản, phương thức xác thực và loại giao dịch.
            </li>
            <li> Thực hiện cảnh báo tới số điện thoại và email của Quý khách
                trước mỗi giao dịch đáng ngờ, yêu cầu thay đổi thông tin cá nhân hay đăng nhập từ
                một thiết bị lạ. </li>
        </ul>`
    },
    {
        question: '5. Các phương thức xác thực trên dịch vụ eBank là gì?',
        answer: ` <p> Quý khách sẽ được lựa chọn sử dụng một trong các phương thức xác
        thực giao dịch sau đây: </p>
    <ul>
        <li>
            <p> Mã PIN Giao dịch | Touch ID | Face ID: xác thực các giao
                dịch giá trị dưới 1,000,000 VND </p>
            <p> - Mã PIN Giao dịch sẽ được Quý khách thiết lập ngay trên
                ứng dụng eBank, cho phép xác thực nhanh các giao dịch giá trị thấp. </p>
            <p> - Tính năng Touch ID | Face ID sử dụng cảm biến vân tay
                trên điện thoại di động và máy tính bảng, giúp đăng nhập cũng như xác thực giao
                dịch thay cho mật khẩu/mã PIN một cách tiện lợi và dễ dàng. </p>
        </li>
        <li>
            <p> SMS OTP | eToken | Hard Token: xác thực các giao dịch giá
                trị từ 1,000,000 VND trở lên. </p>
            <p> - OTP-SMS: Mã OTP sẽ được gửi tới Quý khách thông qua tin
                nhắn đến số điện thoại đã đăng ký với TPBank cho mỗi giao dịch được thực hiện.
            </p>
            <p> - eToken: Quý khách có thể nhận mã eToken thông qua ứng
                dụng di động TPBank eToken. Mã eToken được đăng ký và sử dụng hoàn toàn miễn
                phí, mang tính bảo mật cao và có thể xác thực giao dịch ngay cả khi ở nước
                ngoài. Để đăng ký eToken, Quý khách vui lòng truy cập ứng dụng TPBank eBank và
                chọn Cài đặt Phương thức bảo mật. </p>
            <p> - Hard Token: Là một thiết bị nhỏ gọn như chiếc USB có thể
                mang đi mọi nơi, cung cấp mã xác thực mỗi khi Quý khách thực hiện một giao dịch
            </p>
        </li>
    </ul>`
    },
    {
        question: '6. Hạn mức giao dịch là gì?',
        answer: ` <ul style={{ listStyleType: 'lower-alpha' }}>
        <li>
            <p> Hạn mức theo loại tài khoản </p>
            <p> TPBank eBank quy định các hạn mức giao dịch khác nhau
                tương ứng với từng loại tài khoản. Loại tài khoản của Quý khách được xác định
                dựa trên trạng thái hoàn thiện thông tin với ngân hàng. </p>
            <p> Đối với tài khoản đã hoàn thiện thông tin (cấp tài khoản
                cao nhất), Quý khách sẽ được giao dịch với hạn mức tối đa tương ứng với Phương
                thức bảo mật được sử dụng và Loại giao dịch đang thực hiện. </p>
        </li>
        <li>
            <p> Hạn mức theo phương thức xác thực </p>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td />
                            <td>Hạn mức theo lần</td>
                            <td>Hạn mức theo ngày</td>
                        </tr>
                        <tr>
                            <td>SMS OTP</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                        <tr>
                            <td>eToken</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                        <tr>
                            <td>eToken nâng cao</td>
                            <td>300,000,000</td>
                            <td>1,500,000,000</td>
                        </tr>
                        <tr>
                            <td>Hard Token</td>
                            <td>100,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
        <li>
            <p> Hạn mức theo loại giao dịch </p>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td />
                            <td>Hạn mức theo lần</td>
                            <td>Hạn mức theo ngày</td>
                        </tr>
                        <tr>
                            <td>Chuyển tiền trong TPBank</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                        <tr>
                            <td>Chuyển tiền liên ngân hàng</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                        <tr>
                            <td>Thanh toán hóa đơn</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                        <tr>
                            <td>Chuyển tiền chứng khoán</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                        <tr>
                            <td>Chuyển khoản quốc tế</td>
                            <td>50,000,000</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Nạp tiền</td>
                            <td>50,000,000</td>
                            <td>100,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    </ul>`
    },
    {
        question: '7. Dịch vụ eBank thu những phí gì?',
        answer: `  <p> TPBank eBank miễn phí hoàn toàn cho Quý khách đối với những giao
        dịch sau: </p>
    <ul>
        <li> Đăng ký dịch vụ TPBank eBank </li>
        <li> Chuyển tiền trong TPBank và chuyển tiền liên ngân hàng </li>
        <li> Nạp tiền vào tài khoản TPBank từ các ngân hàng nội địa </li>
    </ul>
    <p> Quý khách vui lòng tham khảo chi tiết biểu phí dịch vụ <a href="https://tpb.vn/wps/wcm/connect/71613539-d820-4f65-aaf6-ebb53c372ab1/bieu+phi+eBank-+up+web.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-71613539-d820-4f65-aaf6-ebb53c372ab1-miIhWeM">tại
        đây</a>. </p>`
    },
    {
        question: '8. Làm thế nào để yêu cầu hỗ trợ tra soát và khiếu nại',
        answer: `<p> Trong trường hợp gặp khó khăn trong quá trình sử dụng TPBank eBank
        hoặc cần tra soát giao dịch không thành công, Quý khách vui lòng liên hệ với TPBank
        thông qua: </p>
    <ul>
        <li> Điểm giao dịch của TPBank gần nhất tại đây </li>
        <li> Liên hệ tới Hotline 1900 585885 </li>
        <li> Gửi email tới địa chỉ <a href="mailto:dichvu_khachhang@tpb.com.vn">dichvu_khachhang@tpb.com.vn</a></li>
    </ul>
    <p> TPBank cam kết sẽ hỗ trợ Quý khách trong thời gian sớm nhất có
        thể, trong vòng từ 3-15 ngày làm việc phụ thuộc vào thời gian xử lý của các đối
        tác/trung gian thanh toán. </p>`
    }
]