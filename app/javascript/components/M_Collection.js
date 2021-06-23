import React from 'react'

const M_Collection = ({ collection }) => {
  return (
    <div className="collection-frame">
      <div className="frame-image-block" style={{backgroundImage: `url(${collection.image.url})`}}>
        <div className="collection-name">{collection.name}</div>
      </div>
    </div>
  )
}

export default M_Collection
