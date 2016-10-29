import React from 'react';
import Components from './Components';

class SbRoot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content: {body: []}}

    this.getStory('draft')

    window.storyblok.on('change', () => {
      this.getStory('draft')
    })
  }

  getStory(version) {
    window.storyblok.get({slug: this.props.slug, space: this.props.space, version: this.props.version}, (data) => {
      this.setState({content: data.story.content});

      if (version === 'draft') {
        window.storyblok.enterEditmode()
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.content.body.map((blok) =>
          React.createElement(Components[blok.component], {key: blok._uid, content: blok})
        )}
      </div>
    )
  }
}

export default SbRoot;