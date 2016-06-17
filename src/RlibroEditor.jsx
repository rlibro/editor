import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { render } from '../src/markdown'
import _ from 'lodash';

const PREWVIEW_NONE = 0, PREWVIEW_TOP=1, PREWVIEW_RIGHT = 2, SPLITBAR = 8, HEADER = 40;
const code = '```';
const placeholder = `# 제일 큰 제목  H1
## 두번재 제목
### 세번째 제목
#### 네번째 제목
##### 다섯번째 제목
###### 여섯번째 제목

## 리스트 
- 리스트 1
- 리스트 2
 - 하위 리스트 1
 - 하위 리스트 2

## 링크 
- 이렇게 거는 방법이 있어 [이건 지도](http://naver.com) 
- [이렇게 거는 방법도 있지][1]
 
[1]:http://rlibro.com

## 지도 삽입
일단 저걸 눌러!

## 자동 저장 
이거 자동 저장 되는거 아니?

## 코드 삽입
${code}
혹시 코드를 넣을 일이 있나? 
${code}
## 인용구 
> 인용은 이렇게 하는거야!
이게 됐지?

## 그밖에`;

export default class RlibroEditor extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      preview: PREWVIEW_RIGHT,
      text: placeholder
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

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
  }

  render() {
    const { text, preview } = this.state;
    const html = render(text); 
    const { width, height } = this.props;

    let klassName = 'r-editor';
    if( preview === PREWVIEW_TOP ) {
      klassName += '  preview-on position-top';
    } 

    if( preview === PREWVIEW_RIGHT ) {
      klassName += '  preview-on position-right';
    }

    let style = {}, wrapStyle = {};     
    if( width ) {
      style.width = `${width}px`;
    }
    if( height ) {
      style.height = `${height}px`;
      wrapStyle.height = `${ height - HEADER }px`;
    }


    return <div className={klassName} style={style}>
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
          <button className="btn" onClick={this.handleClear}>Clear</button>
          <button className="btn" onClick={this.handleTogglePreview}>Preview</button>
        </div>
      </div>

      <div className="r-wrap" style={wrapStyle}>
        {this.renderPreview()}
        {this.renderSplitBar()}
        {this.renderContent()}
        
      </div>
    </div>
  }

  renderPreview = () => {
    const { preview, text } = this.state;
    const html = render(text); 

    let { width, height } = this.props;
    let style = {}

    height = height - HEADER;

    if( preview === PREWVIEW_TOP ){
      if( width ) {
        style.width = `${width}px`;
      }
      if( height ) {
        style.height = `${height/2 - (SPLITBAR/2)}px`;
      }
    }

    if( preview === PREWVIEW_RIGHT ){
      if( width ) {
        style.width = `${width/2 - (SPLITBAR/2)}px`;
      }
      if( height ) {
        style.height = `${height}px`;
      }
    }


    return <div className="r-preview" style={style} dangerouslySetInnerHTML={{__html: html}}></div>
  };

  renderSplitBar = () => {
    const { preview } = this.state;
    const { width, height } = this.props;

    let style = {}
    if( preview === PREWVIEW_TOP ){
      style.left = width/2 - 2;
      if( height ) {
        style.height = '4px';
      }
    }

    if( preview === PREWVIEW_RIGHT ){
      style.left = width/2 - 2;
      style.width = '4px';
      if( height ) {
        style.height = `${height-HEADER}px`;
      }
    }
    return <div className="r-split-bar" style={style} />
  };

  renderContent = () => {
    const { text, preview } = this.state;
    
    let { width, height } = this.props;
    let style = {}
    
    height = height - HEADER;

    if( preview === PREWVIEW_NONE ){
      if( width ) {
        style.width = `${width-2}px`;
      }
      if( height ) {
        style.height = `${height-6}px`;
      }
    }

    if( preview === PREWVIEW_TOP ){
      if( width ) {
        style.width = `${width-2}px`;
      }
      if( height ) {
        style.height = `${height/2-SPLITBAR-(SPLITBAR/2)}px`;
      }
    }

    if( preview === PREWVIEW_RIGHT ){
      if( width ) {
        style.width = `${width/2- (SPLITBAR/2) - 2}px`;
      }
      if( height ) {
        style.height = `${height-6}px`;
      }
    }

    return (
      <div className="r-content">
        <textarea style={style} ref="textarea" onChange={this.handleChange} value={text} />
      </div>
    );
  };

  handleChange =(e)=>{
    this.setState({
      text: e.target.value
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

  handleClear = (e) => {
    this.setState({ text:'', html: ''})
  }

};