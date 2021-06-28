import './App.css';
import MenuComponent from "./components/menu/index";
import FooterComponent from "./components/footer/index";
import HeaderComponent from "./components/header/index";
import LoadingCompnent from "./components/loading/index";
import QuickLinkComponent from "./components/quick-link/index";
import TransferPage from "./pages/main/transfer/index";
import BillPage from "./pages/main/bill/index";
import AddBillRecurringPage from "./pages/main/bill-recurring/add-bill-recurring/index";
import BillElectricDetailPage from "./pages/main/bill/bill-electric-detail/index";
import BillRecurringPage from "./pages/main/bill-recurring/index";
import BillElectricPage from "./pages/main/bill/bill-electric/index";
import ChangeCardPinPage from "./pages/main/card/change-card-pin/index";
import CardPage from "./pages/main/card/index";
import LoanPage from "./pages/main/loan/index";
import LoyalPage from "./pages/main/loyal/index";
import LoyalGiftPage from "./pages/main/loyal/loyal-gift/index";
import MobilePage from "./pages/main/mobile/index";
import WalletPage from "./pages/main/wallet/index";
import AddLinkPage from "./pages/main/wallet/index";
import SavingPage from "./pages/main/saving/index";
import SavingAutorollSettingPage from "./pages/main/saving/autoroll-setting/index";
import SavingDetailPage from "./pages/main/saving/saving-detail/index";
import SavingCreatePackagePage from "./pages/main/saving/create-package/index";
import ChangePackageNamePage from "./pages/main/saving/change-package-name/index";
import NotFoundPage from "./pages/not-found/index";
import OverseasStudyPage from "./pages/main/overseas-study/index";
import InquiryAccount from "./pages/inquiry/account/index";
import InquiryCreditCard from "./pages/inquiry/credit-card/index";
import InquiryGeneral from "./pages/inquiry/general/index";
import InquiryLoan from "./pages/inquiry/loan/index";
import InquirySavingPage from "./pages/inquiry/saving/index";
import InquiryTransferPage from "./pages/inquiry/transfer/index";
import InquiryVatPage from "./pages/inquiry/vat/index";
import SettingAuthMethodPage from "./pages/setting/auth-method/index";
import SettingChangePasswordPage from "./pages/setting/change-password/index";
import SettingDefaultAccountPage from "./pages/setting/default-account/index";
import SettingDeviceManagementPage from "./pages/setting/device-management/index";
import SettingFaqPage from "./pages/setting/faq/index";
import SettingReferringPage from "./pages/setting/referring/index";
import SettingSupportPage from "./pages/setting/support/index";
import SettingUpgradePage from "./pages/setting/upgrade/index";
import SettingUserPage from "./pages/setting/user/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function generateRouter() {
//   const routes = [
//     { path: 'transfer', component: <TransferPage /> },
//     { path: 'bill', component: <BillPage /> },
//   ];
//   return (
//     <Switch>
//       {routes.map(route => (
//         <Route path={`/${route.path}`}> {route.copmonent} </Route>
//       ))}
//     </Switch>
//   );
// }


function App() {
  return (
    <Router>
      <div className="main-container" onDragStart={() => false} onDrop={() => false}>
        <MenuComponent/>
        <div className="right">
          <div className="main-head-body">
            <HeaderComponent/>
            <div className="page-body">
              <div className="left">
              <Switch>
                  <Route path="/transfer"> <TransferPage/> </Route>
                  <Route path="/bill/add-bill-recurring"> <AddBillRecurringPage/> </Route>
                  <Route path="/bill/bill-electric"> <BillElectricPage/> </Route>
                  <Route path="/bill/bill-recurring"> <BillRecurringPage/> </Route>
                  <Route path="/bill/bill-electric-detail"> <BillElectricDetailPage/> </Route>
                  <Route path="/bill"> <BillPage/> </Route>
                  <Route path="/mobile"> <MobilePage/> </Route>
                  <Route path="/saving/autoroll-setting"> <SavingAutorollSettingPage/> </Route>
                  <Route path="/saving/change-package-name"> <ChangePackageNamePage/> </Route>
                  <Route path="/saving/saving-detail"> <SavingDetailPage/> </Route>
                  <Route path="/saving/create-package"> <SavingCreatePackagePage/> </Route>
                  <Route path="/saving"> <SavingPage/> </Route>
                  <Route path="/card/change-card-pin"> <ChangeCardPinPage/> </Route>
                  <Route path="/card"> <CardPage/> </Route>
                  <Route path="/loan"> <LoanPage/> </Route>
                  <Route path="/loyalty/gift"> <LoyalGiftPage/> </Route>
                  <Route path="/loyalty"> <LoyalPage/> </Route>
                  <Route path="/wallet/add-link"> <AddLinkPage/> </Route>
                  <Route path="/wallet"> <WalletPage/> </Route>
                  <Route path="/overseas-study"> <OverseasStudyPage/> </Route>
                  <Route path="/inquiry-account"> <InquiryAccount/> </Route>
                  <Route path="/inquiry-saving"> <InquirySavingPage/> </Route>
                  <Route path="/inquiry-loan"> <InquiryLoan/> </Route>
                  <Route path="/inquiry-credit-card"> <InquiryCreditCard/> </Route>
                  <Route path="/inquiry-transfer"> <InquiryTransferPage/> </Route>
                  <Route path="/inquiry-general"> <InquiryGeneral/> </Route>
                  <Route path="/inquiry-vat"> <InquiryVatPage/> </Route>
                  <Route path="/setting-upgrade"> <SettingUpgradePage/> </Route>
                  <Route path="/setting-user"> <SettingUserPage/> </Route>
                  <Route path="/setting-change-password"> <SettingChangePasswordPage/> </Route>
                  <Route path="/setting-auth-method"> <SettingAuthMethodPage/> </Route>
                  <Route path="/setting-default"> <SettingDefaultAccountPage/> </Route>
                  <Route path="/setting-device-management"> <SettingDeviceManagementPage/> </Route>
                  <Route path="/setting-faq"> <SettingFaqPage/> </Route>
                  <Route path="/setting-support"> <SettingSupportPage/> </Route>
                  <Route path="/setting-referring"> <SettingReferringPage/> </Route>
                  <Route path="/" exact> <TransferPage/> </Route>
                  <Route> <NotFoundPage/> </Route>
                </Switch>
              </div>
              <div className="right">
                <QuickLinkComponent></QuickLinkComponent>
              </div>
            </div>
          </div>
          <FooterComponent/>
        </div>
      </div>
      <LoadingCompnent/>
    </Router>
  );
}

export default App;
