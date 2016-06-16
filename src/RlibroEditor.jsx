import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { render } from '../src/markdown'
import _ from 'lodash';

export default class RlibroEditor extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      preview: 0,
      html: ''
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  // shouldComponentUpdate(nextProps, nextState) {
  // }

  componentWillUnmount() {
  }

  render() {
    const { html, preview } = this.state;

    let klassName = 'r-editor'
    if( preview === 1 ) {
      klassName += '  preview-on position-top'
    } 

    if( preview === 2 ) {
      klassName += '  preview-on position-right';
    }

    return <div className={klassName}>
      <div className="r-header">
        <div className="r-help">
          <a href="https://guides.github.com/features/mastering-markdown/" target="_blank" data-ga-click="Markdown Toolbar, click, help">
            <svg aria-hidden="true" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16">
              <path d="M14.85 3H1.15C0.52 3 0 3.52 0 4.15v7.69C0 12.48 0.52 13 1.15 13h13.69c0.64 0 1.15-0.52 1.15-1.15V4.15C16 3.52 15.48 3 14.85 3zM9 11L7 11V8l-1.5 1.92L4 8v3H2V5h2l1.5 2 1.5-2 2 0V11zM11.99 11.5L9.5 8h1.5V5h2v3h1.5L11.99 11.5z"></path>
            </svg>
            Styling with Markdown is supported
          </a>
        </div>
        <div className="r-toolbar">
          <a className="btn">Clear</a>
          <a className="btn" onClick={this.handleTogglePreview}>Preview</a>
        </div>
      </div>

      <div className="r-wrap">
        <div className="r-preview" dangerouslySetInnerHTML={{__html: html}}></div>

        <div className="r-split-bar" />

        <div className="r-content">
          <textarea ref="textarea" onChange={this.handleChange} />
        </div>
      </div>
    </div>
  }

  handleChange =(e)=>{
    this.setState({
      html: render(e.target.value) 
    })
  };

  handleTogglePreview = (e) => {

    let { preview } = this.state;

    preview++;

    if( preview > 2 ) {
      preview = 0;
    } 

    this.setState({ preview: preview })

  };

};