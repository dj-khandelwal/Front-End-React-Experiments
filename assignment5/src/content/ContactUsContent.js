import React from 'react';
import {getSubmission, insertToMemory} from '../script.js'

class ContactUsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {email: "", 
                subject: "",
                message: "",
                validationError: ""
              }};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    let temp = event.target.value;
    if (event.target.id === 'msg') {
      this.setState(state => ({contact: {
        email: this.state.contact.email,
        subject: this.state.contact.subject,
        message: temp,
        validationError: ""
      }}));
    } else if (event.target.id === 'subject') {
      this.setState(state => ({contact: {
        email: this.state.contact.email,
        subject: temp,
        message: this.state.contact.message,
        validationError: ""
      }}));
    } else if (event.target.id === 'mail') {
      this.setState(state => ({contact: {
        email: temp,
        subject: this.state.contact.subject,
        message: this.state.contact.message,
        validationError: ""
      }}));
    }
  }
  
  handleSubmit(event) {

    let emailValue = this.state.contact.email;
    let subjectValue = this.state.contact.subject;
    let messageValue = this.state.contact.message;
    let hasError = false;
    let msgString = "";

    if (emailValue == null || emailValue.length == 0) {
      msgString = msgString + 'Please provide: Email';
      hasError = true;
    }

    if (subjectValue == null || subjectValue.length == 0) {
      if (msgString === "") {
      msgString = msgString + 'Please provide: Subject';
      } else {
        msgString = msgString + ', Subject';
      }
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
      this.setState(state => ({contact: {
        email: this.state.contact.email,
        subject: this.state.contact.subject,
        message: this.state.contact.message,
        validationError: msgString
      }}));
    } else {
      msgString = "Your message has been sent!";
      let submission = getSubmission("hello@thebloghouse.com", this.state.contact.email, this.state.contact.subject, this.state.contact.message);
      let id = "ContactUs";
      insertToMemory(submission, id);
      this.setState(state => ({contact: {
        email: "",
        subject: "",
        message: "",
        validationError: msgString
      }})); 
    }
    event.preventDefault();
  } 
  
  render() { 
    return (
      <article class = "grid-content">
        <h1>Connect with us!</h1>
        
        <form id = "contact-form" onSubmit={this.handleSubmit}>   
          <div id = "form-validation-message">{this.state.contact.validationError}</div>
          <table cellspacing="10" cellpadding="0">
              <tr>
                <td><label for="mail">From (E-mail ID):</label></td>
                <td><input type="email" id="mail" name="from" value={this.state.contact.email} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td><label for="subject">Subject:</label></td>
                <td><input type="text" id="subject" name="subject" value={this.state.contact.subject} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td><label for="msg">Message:</label></td>
                <td><textarea id="msg" name="message" value={this.state.contact.message} onChange={this.handleChange}></textarea></td>
              </tr>
          </table>
          <div class="button">
            <button type="submit">Send your message</button>
          </div>
        </form>
      </article>
    );
  }
}
export default ContactUsContent;