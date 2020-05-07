import React from 'react';

const ContactUsContent = (props) => {
  return (<article class = "grid-content">
  <h1>Connect with us!</h1>
  
  <form id = "contact-form" method = "post">   
    <div id = "form-validation-message"></div>
    <table cellspacing="10" cellpadding="0">
        <tr>
          <td><label for="mail">From (E-mail ID):</label></td>
          <td><input type="email" id="mail" name="from" /></td>
        </tr>
        <tr>
          <td><label for="subject">Subject:</label></td>
          <td><input type="text" id="subject" name="subject" /></td>
        </tr>
        <tr>
          <td><label for="msg">Message:</label></td>
          <td><textarea id="msg" name="message"></textarea></td>
        </tr>
    </table>
    <div class="button">
      <button type="submit">Send your message</button>
    </div>
  </form>
</article>);
}

export default ContactUsContent;