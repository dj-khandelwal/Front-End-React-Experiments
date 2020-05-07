class Comment {
  constructor(name, message) {
    this.name = name;
    this.message = message;
  }

  setName(name) {
      this.name = name;
  }

  getName() {
      return this.name;
  }

  setMessage(message) {
      this.message = message;
  }

  getMessage() {
      return this.message;
  }

}
let contactForm = document.getElementById("contact-form");
if (contactForm != null) {
  contactForm.addEventListener("submit", function(event) {

    let inputs = document.getElementById("contact-form").elements;
    let emailElement = inputs.namedItem("from");
    let subjectElement = inputs.namedItem("subject");
    let userMessageElement = inputs.namedItem("message");
    let hasError = false;
    let msgString = "";

    if (emailElement.value == null || emailElement.value.length == 0) {
      msgString = msgString + 'Please provide: Email';
      hasError = true;
    }

    if (subjectElement.value == null || subjectElement.value.length == 0) {
      if (msgString === "") {
      msgString = msgString + 'Please provide: Subject';
      } else {
        msgString = msgString + ', Subject';
      }
      hasError = true;
    }

    if (userMessageElement.value == null || userMessageElement.value.length == 0) {
      if (msgString === "") {
        msgString = msgString + 'Please provide: Message';
        } else {
          msgString = msgString + ', and Message';
        }
        hasError = true;
    }
    if (hasError) {
      msgString = '<p>' + msgString + '.</p>';
    } else {
      msgString = "<p>Your message has been sent</p>";
      let submission = getSubmission("hello@thebloghouse.com", emailElement.value, subjectElement.value, userMessageElement.value);
      let id = "contactForm";
      insertToMemory(submission, id);
    }
    document.getElementById("form-validation-message").innerHTML = msgString;
    emailElement.value = "";
    subjectElement.value = "";
    userMessageElement.value = "";

    /* This stops the usual function of "submit" which is to send data
    to another server */
    event.preventDefault();
  })
}

let commentForm = document.getElementById("comment-form");
if (commentForm != null) {
  commentForm.addEventListener("submit", function(event) {
    let inputs = document.getElementById("comment-form").elements;
    let nameElement = inputs.namedItem("name");
    let commentElement = inputs.namedItem("message");
    let hasError = false;
    let msgString = "";
    if (nameElement.value == null || nameElement.value.length == 0) {
      msgString = msgString + 'Please provide: Your name';
      hasError = true;
    }

    if (commentElement.value == null || commentElement.value.length == 0) {
      if (msgString === "") {
      msgString = msgString + 'Please provide: Your Comment';
      } else {
        msgString = msgString + ', Your comment';
      }
      hasError = true;
    }

    if (hasError) {
      msgString = '<p>' + msgString + '.</p>';
      document.getElementById("comment-form-validation-message").innerHTML = msgString;
    } else {
      msgString = "<p>Your comment has been posted!</p>";
      let commentEntry = new Comment(nameElement.value, commentElement.value);
      let id = "";
      if (document.getElementById("8experimentsinmotivation") != null) {
        id = "8experiments";
      } else if (document.getElementById("amindfulshiftoffocus") != null) {
        id = "amindfulshiftoffocus";
      } else if (document.getElementById("howtodevelopanawesomesenseofdirection") != null) {
        id = "howtodevelopanawesomesenseofdirection";
      } else if (document.getElementById("trainingtobeagoodwriter") != null) {
        id = "trainingtobeagoodwriter";
      } else if (document.getElementById("whatproductivitysystemswontsolve") != null) {
        id = "whatproductivitysystemswontsolve";
      }
      insertToMemory(commentEntry, id);
    }
    document.getElementById("form-validation-message").innerHTML = msgString;
    nameElement.value = "";
    commentElement.value = "";
    document.location.reload()
    /* This stops the usual function of "submit" which is to send data
    to another server */
    event.preventDefault();
  })
}

let commentDiv = document.getElementById("comments-display");
if (commentDiv != null) {
  if (document.getElementById("8experimentsinmotivation") != null) {
    id = "8experiments";
  } else if (document.getElementById("amindfulshiftoffocus") != null) {
    id = "amindfulshiftoffocus";
  } else if (document.getElementById("howtodevelopanawesomesenseofdirection") != null) {
    id = "howtodevelopanawesomesenseofdirection";
  } else if (document.getElementById("trainingtobeagoodwriter") != null) {
    id = "trainingtobeagoodwriter";
  } else if (document.getElementById("whatproductivitysystemswontsolve") != null) {
    id = "whatproductivitysystemswontsolve";
  }
  let commentList = getComments(id);
  for (let i = 0; i < commentList.length; i++) {
    let commentBlock = document.createElement("div");
    commentBlock.innerHTML = commentList[i].name + ": " + commentList[i].message;
    commentBlock.className = "comment-block";
    commentDiv.appendChild(commentBlock);
  }
}


  function addComment(list_of_comments, comment) {
    
    list_of_comments.push(comment);
    
    return list_of_comments;   
  }

  function getSubmission(to, from, subject, message) {
    
    let submission = {
        to: to,
        from: from,
        subject: subject,
        message: message
    };
    
    return submission;   
  }

function insertToMemory(submission, id) {
  if (id === "contactForm") {
    contactSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    contactSubmissions.push(submission);
    localStorage.setItem("contactSubmissions", JSON.stringify(contactSubmissions));
  } else if (id === "8experiments") {
    expComments = JSON.parse(localStorage.getItem("expComments") || "[]");
    expComments = addComment(expComments, submission);
    localStorage.setItem("expComments", JSON.stringify(expComments));
  } else if (id === "amindfulshiftoffocus") {
    focusComments = JSON.parse(localStorage.getItem("focusComments") || "[]");
    focusComments = addComment(focusComments, submission);
    localStorage.setItem("focusComments", JSON.stringify(focusComments));
  } else if (id === "howtodevelopanawesomesenseofdirection") {
    dirComments = JSON.parse(localStorage.getItem("dirComments") || "[]");
    dirComments = addComment(dirComments, submission);
    localStorage.setItem("dirComments", JSON.stringify(dirComments));
  } else if (id === "trainingtobeagoodwriter") {
    writerComments = JSON.parse(localStorage.getItem("writerComments") || "[]");
    writerComments = addComment(writerComments, submission);
    localStorage.setItem("writerComments", JSON.stringify(writerComments));
  } else if (id === "whatproductivitysystemswontsolve") {
    prodComments = JSON.parse(localStorage.getItem("prodComments") || "[]");
    prodComments = addComment(prodComments, submission);
    localStorage.setItem("prodComments", JSON.stringify(prodComments));
  }
}

function getComments(id) {
  if (id === "8experiments") {
    expComments = JSON.parse(localStorage.getItem("expComments") || "[]");
    return expComments;
  } else if (id === "amindfulshiftoffocus") {
    focusComments = JSON.parse(localStorage.getItem("focusComments") || "[]");
    return focusComments;
  } else if (id === "howtodevelopanawesomesenseofdirection") {
    dirComments = JSON.parse(localStorage.getItem("dirComments") || "[]");
    return dirComments;
  } else if (id === "trainingtobeagoodwriter") {
    writerComments = JSON.parse(localStorage.getItem("writerComments") || "[]");
    return writerComments;
  } else if (id === "whatproductivitysystemswontsolve") {
    prodComments = JSON.parse(localStorage.getItem("prodComments") || "[]");
    return prodComments;
  }
}
