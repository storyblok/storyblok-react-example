import React from 'react';
import SbEditable from 'storyblok-react';
import Components from '../Components';

class SbColumn extends React.Component {
  render() {
    return (
      <SbEditable content={this.props.content}>
        <div className="uk-width-1-2">
          {this.props.content.body.map((blok) =>
            React.createElement(Components[blok.component], {key: blok._uid, content: blok})
          )}
        </div>
      </SbEditable>
    )
  }
}

export default SbColumn;