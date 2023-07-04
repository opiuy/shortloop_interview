import React from 'react'
import { commentData } from '../commets';


import Comment from './Comment';

function CommentList({ comments, indent = 0}) {    

    console.log(comments[0].Name)

    return (
      <div>
        {comments.map((comment, index) => (
          <div style={{ paddingLeft: indent }}>
            <Comment name={comment.Name} comment={comment.Comment} />
            {comment.CommentNested.length > 0 && (
              <CommentList comments={comment.CommentNested} indent={indent + 50} />
            )}
          </div>
        ))}
      </div>
    );
  }

const PrintNestedComments = () => {


    return (
        <div>
          <h1>Comments</h1>
          <CommentList comments={commentData} />
        </div>
      );
}

export default PrintNestedComments