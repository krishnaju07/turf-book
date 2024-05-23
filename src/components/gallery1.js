import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Alt: 'Turf ground image 2',
  image2Src:
    'https://images.unsplash.com/photo-1529160104159-7a5937a4a0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjQ1MzgxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Browse through images of our well-maintained turf ground where you can enjoy various sports activities.',
  heading1: 'Check out our turf ground gallery',
  image3Src:
    'https://images.unsplash.com/photo-1714176956995-e9185bb346da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjQ1MzgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjQ1MzgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Turf ground image 1',
  image3Alt: 'Turf ground image 3',
}

Gallery1.propTypes = {
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
}

export default Gallery1
