import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  heading1: 'FAQs',
  action1: 'Contact',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq1Answer:
    'You can easily book a slot on the turf ground by selecting your preferred date and time on our website and completing the online payment process.',
  faq4Question: 'Can I cancel or reschedule my booking?',
  faq3Answer:
    'Yes, we only accept online payments for booking slots on the turf ground to ensure a seamless and secure transaction process.',
  faq3Question: 'Is online payment the only option available for booking?',
  faq4Answer:
    'Yes, you can cancel or reschedule your booking by contacting our customer support team at least 24 hours before your scheduled slot.',
  faq5Question: 'Are there any additional charges apart from the hourly rate?',
  heading2: 'Still have a question?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq5Answer:
    'No, there are no additional charges apart from the hourly rate of 1000rs for booking a slot on the turf ground.',
  faq2Question: 'What is the rate for booking a slot on the turf ground?',
  faq2Answer:
    'The rate for booking a slot on the turf ground is 1000rs per hour.',
  faq1Question: 'How can I book a slot on the turf ground?',
}

FAQ1.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq4Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq1Question: PropTypes.string,
}

export default FAQ1
