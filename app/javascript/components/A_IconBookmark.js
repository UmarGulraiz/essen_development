import React from "react"
import PropTypes from "prop-types"
import IconBookmark from 'images/IconBookmark.svg'


// class A_IconBookmark extends React.Component {
//   render (src) {
//     return (
//       <div>
//         <img src={IconBookmark} {this.props.class}/>
//       </div>
//     );
//   }
// }

// export default A_IconBookmark



// import React from 'react'

const A_IconBookmark = (props) => {
  return (
    <div>
      <img
        src={IconBookmark}
      />
    </div>
  )
}

export default A_IconBookmark