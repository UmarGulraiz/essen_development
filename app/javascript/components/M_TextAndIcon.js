// import React from 'react'
// const M_TextAndIcon = ({ icon, title}) => {
//   return (
//     <div style={{display: "flex"}}>
//       <img src={icon}></img>
//       <div class="m-text-title">{title}</div>
//     </div>
//   )
// }

// export default M_TextAndIcon


import React from 'react'
import A_Icon from './A_Icon'
import A_TextBody from './A_TextBody'

const M_TextAndIcon = ({ icon, text}) => {
  return (
    <div className="map-details-container m-icon-and-text">
      <A_Icon icon={icon} />
      <div className="map-detail m-text-title">
        <A_TextBody text={text}/>
      </div>
    </div>
  )
}

export default M_TextAndIcon
