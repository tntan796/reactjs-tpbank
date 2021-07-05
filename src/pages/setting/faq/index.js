import './index.css';
import FaqItemComponent from '../../../components/faq-item/index';
import { Faqs } from '../../../common/mock-data/main.mockdata';

function SettingFaqPage() {
    const faqElms = Faqs.map((faq, index) => (
        <FaqItemComponent
            key = {index}
            question = {faq.question}
            answer = {faq.answer}
        />
    ))
    return (
        <div className="content-wrap">
            <div className="faq-content">
                {faqElms}
            </div>
        </div>
    );
}

export default SettingFaqPage;