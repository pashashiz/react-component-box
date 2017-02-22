import React from 'react';
import {render} from 'react-dom';
import CommentBox from './CommentBox.jsx';

render(<CommentBox url="/api/comments" pollInterval={2000} />, document.getElementById('content'));
