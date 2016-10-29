import React from 'react';
import Components from '../Components';

class SbGrid extends React.Component {
  render() {
    return (
      <div className="uk-grid">
        {this.props.content.body.map((blok) =>
          React.createElement(Components[blok.component], {key: blok._uid, content: blok})
        )}
      </div>
    )
  }
}

export default SbGrid;