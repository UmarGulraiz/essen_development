import React from 'react'

const Frame_M_Collection = ({ collection }) => {
  return (
    <div className="collection-frame">
      <div className="frame-image-block">
        <img src={collection.image.url} className="frame-image" />
        <div>{collection.name}</div>
      </div>
    </div>
  )
}

export default Frame_M_Collection
