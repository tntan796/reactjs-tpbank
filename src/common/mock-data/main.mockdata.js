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