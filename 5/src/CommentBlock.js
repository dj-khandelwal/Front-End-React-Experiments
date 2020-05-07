import React from 'react';

class CommentBlock extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
        <div class = "comment-block">{this.props.name + ": " + this.props.message}</div>

    );
  }
}

export default CommentBlock;