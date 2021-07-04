import { Loans } from '../../../common/mock-data/main.mockdata';
import './index.css';
import CartItemComponent from '../../../components/card-item/index';

function LoanPage() {
    const loanElms = Loans.map((loan, index) => (
        <CartItemComponent
            key={index}
            link={loan.link}
            title={loan.title}
            icon={loan.icon}
            other={loan.other}
            altIcon={loan.altIcon}>
        </CartItemComponent>
    ))

    return (
        <div className="content-wrap">
            <div className="list-card-link">
              {loanElms}
            </div>
        </div>
    );
}

export default LoanPage;