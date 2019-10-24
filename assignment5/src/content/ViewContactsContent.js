import React from 'react';
import '../stylesheet.css';
import {Comment, insertToMemory, getComments} from '../script.js'
import CommentBlock from '../CommentBlock.js';

class ViewContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          comment: {name: "", 
                    message: "",
                    validationError: ""
                  },
          page: this.props.showMe.id,
          cList: ""
                }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          comment: {name: "", 
                    message: "",
                    validationError: ""
                  },
          page: this.props.showMe.id,
          cList: this.getCommentsForPage()
                };
      }
    getCommentsForPage() {
      let commentList = getComments(this.props.showMe.id);
      console.log("HELLO: " + this.state.page + " | \n");
      console.log(commentList); 
      console.log("\n-------------------------------------------\n");
      return commentList;
        // let commentDiv = document.getElementById("comments-display");
        // for (let i = 0; i < commentList.length; i++) {
        //   let commentBlock = document.createElement("div");
        //   commentBlock.innerHTML = commentList[i].name + ": " + commentList[i].message;
        //   commentBlock.className = "comment-block";
        //commentDiv.appendChild(commentBlock);
        // }
    }
    handleChange(event) {
        let temp = event.target.value;
        if (event.target.id === 'comment') {
          this.setState(state => ({comment: {
            name: this.state.comment.name,
            message: temp,
            validationError: ""
          }}));
        } else if (event.target.id === 'commenter-name') {
          this.setState(state => ({comment: {
            name: temp,
            message: this.state.comment.message,
            validationError: ""
          }}));
        }
    }

    handleSubmit(event) {
      
        let nameValue = this.state.comment.name;
        let messageValue = this.state.comment.message;
        let hasError = false;
        let msgString = "";

        if (nameValue == null || nameValue.length == 0) {
          msgString = msgString + 'Please provide: Name';
          hasError = true;
        }
    
        if (messageValue == null || messageValue.length == 0) {
          if (msgString === "") {
            msgString = msgString + 'Please provide: Message';
            } else {
              msgString = msgString + ', and Message';
            }
            hasError = true;
        }
        if (hasError) {
          msgString = '<p>' + msgString + '.</p>';
          this.setState(state => ({comment: {
            name: this.state.comment.name,
            message: this.state.comment.message,
            validationError: msgString
          }}));
        } else {
          msgString = "Your message has been sent!";
          let commentEntry = new Comment(this.state.comment.name, this.state.comment.message);
          let id = this.props.showMe.id;
          insertToMemory(commentEntry, id);
          this.setState(state => ({comment: {
            name: "",
            message: "",
            validationError: msgString
          }, cList: this.getCommentsForPage() 
        }));
        }
        event.preventDefault();
    }
    render() {
      let jsxEl = this.state.cList.map ((e) => 
        <CommentBlock name = {e.from} subject = {e.subject} message = {e.message}/>
      );
      return (
            <div class = "grid-content">
                <article >
                <div id = "comments-display"> Comments: {jsxEl}</div>
                </article>
                    
            </div>
        );
    }
}

export default ViewContacts;