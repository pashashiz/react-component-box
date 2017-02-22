import React from 'react';
import {render} from 'react-dom';
import CommentBox from './CommentBox.jsx';

let data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

render(<CommentBox data={data}/>, document.getElementById('content'));
