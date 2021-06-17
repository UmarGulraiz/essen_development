import React from 'react'

const Frame_M_Collection = ({ frame }) => {
  return (
    <div className="collection-frame">
      <div className="frame-image-block">
        <img src={frame.image} className="frame-image"/>
      </div>
    </div>
  )
}

export default Frame_M_Collection
