import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (

		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
			<i className="fas fa-question-circle"></i> &nbsp;{faq.question}
			</div>
			<div className="faq-answer">
			<i className="fas fa-arrow-circle-right"></i>&nbsp;{faq.answer}
			</div>
		</div>
   
	)
}

export default FAQ