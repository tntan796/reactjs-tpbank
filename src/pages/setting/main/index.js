import './index.css';
import SettingCardItemComponent from '../../../components/setting-card-item/index';
import { SettingCardItems } from '../../../common/mock-data/main.mockdata';
function MainPage() {
    const settingCardElms = SettingCardItems.filter(item => item.type === '')
        .map((item, index) => (
            <SettingCardItemComponent
                key={index}
                link={item.link}
                icon={item.icon}
                altIcon={item.altIcon}
                titleCard={item.titleCard}
            />
        ));
    const personalSettingCardElms = SettingCardItems.filter(item => item.type === 'personal')
        .map((item, index) => (
            <SettingCardItemComponent
                key={index}
                icon={item.icon}
                altIcon={item.altIcon}
                titleCard={item.titleCard}
                link={item.link}
            />
        ));
    const commonSettingCardElms = SettingCardItems.filter(item => item.type === 'common')
        .map((item, index) => (
            <SettingCardItemComponent
                key={index}
                icon={item.icon}
                altIcon={item.altIcon}
                titleCard={item.titleCard}
                link={item.link}
            />
        ));


    return (
        <div className="content-wrap">
            <div className="setting">
                <div className="setting__wrap-item-top">
                    <div className="setting__wrap-card">
                        {settingCardElms}
                    </div><span className="setting__part-title">Cá nhân</span>
                    <div className="setting__wrap-card">
                        {personalSettingCardElms}
                    </div>
                </div>
                <div className="setting__wrap-item-center">
                    <span className="setting__part-title title-card">Chung</span>
                    <div className="setting__wrap-card">
                        {commonSettingCardElms}
                    </div>
                </div>
                <div className="setting__wrap-item-bottom">
                    <span className="setting__part-title">Ứng Dụng</span>
                    <div className="setting__wrap-card">
                        <div className="setting__card-setting setting__card-setting-style-1">
                            <div className="card-setting-container shadow-btn">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_World.svg" alt="Icons_World" />
                                <div className="card-setting-container__content">
                                    <form className="setting__wrap-lanuage ng-untouched ng-pristine ng-valid" noValidate>
                                        <div className="setting__language-title title-card">Ngôn ngữ
                                        </div>
                                        <div className="setting__language-item">
                                            <span>Tiếng Việt</span>
                                            <label className="wrap-input-radio">
                                                <input formcontrolname="language" type="radio" defaultValue="vi" className="ng-untouched ng-pristine ng-valid" />
                                                <span className="new-radio-button radio-checked" />
                                            </label>
                                        </div>
                                        <div className="setting__language-item">
                                            <span>Tiếng Anh</span>
                                            <label className="wrap-input-radio">
                                                <input formcontrolname="language" type="radio" defaultValue="en" className="ng-untouched ng-pristine ng-valid" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;