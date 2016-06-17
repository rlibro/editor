import './less/editor.less';

import React from 'react';
import ReactDOM from 'react-dom';
import RlibroEditor from './src/RlibroEditor';

ReactDOM.render(<RlibroEditor width={800} height={400} />, document.getElementById('wrap_editor'));