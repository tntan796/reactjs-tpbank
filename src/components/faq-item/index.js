import { useState } from 'react';
import './index.css';

function FaqItemComponent({
    question, answer
}) {
    const [isExpand, setisExpand] = useState(false)
    return (
        <div className= {isExpand ? "faq-item expand" : "faq-item"}>
            <div className="question" onClick={() => setisExpand(!isExpand)}> {question} </div>
            <div className="answer" dangerouslySetInnerHTML={{ __html: answer}}>
            </div>
        </div>
    );
}

export default FaqItemComponent;