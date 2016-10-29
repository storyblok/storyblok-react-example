import React from 'react';
import ReactDOM from 'react-dom';
import SbRoot from './SbRoot';

window.storyblok.init({
  accessToken: 'INSERT_TOKEN'
})

ReactDOM.render(
  <SbRoot slug='INSERT_SLUG' space='INSERT_SPACE_ID' version='draft'></SbRoot>,
  document.getElementById('root')
)
