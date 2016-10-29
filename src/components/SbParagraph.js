import React from 'react';
import SbEditable from 'storyblok-react';

class SbParagraph extends React.Component {
  render() {
    return (
      <SbEditable content={this.props.content}>
        <p>
          {this.props.content.text}
        </p>
      </SbEditable>
    )
  }
}

export default SbParagraph;