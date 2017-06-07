import React from 'react'
import SVGInline from 'react-svg-inline'
import myImage from './images/approach_circle_nl.svg'

class ClickableSvg extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SVGInline svg={myImage}/>
      </div>
    )
  }

}

export default ClickableSvg
