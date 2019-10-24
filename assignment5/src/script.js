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
  console.log(submission);
  console.log(id);
  if (id === "ContactUs") {
    let contactSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    contactSubmissions.push(submission);
    localStorage.setItem("contactSubmissions", JSON.stringify(contactSubmissions));
  } else if (id === "Experiments") {
    let expComments = JSON.parse(localStorage.getItem("expComments") || "[]");
    expComments = addComment(expComments, submission);
    localStorage.setItem("expComments", JSON.stringify(expComments));
  } else if (id === "MindfulFocus") {
    let focusComments = JSON.parse(localStorage.getItem("focusComments") || "[]");
    focusComments = addComment(focusComments, submission);
    localStorage.setItem("focusComments", JSON.stringify(focusComments));
  } else if (id === "SenseOfDirection") {
    let dirComments = JSON.parse(localStorage.getItem("dirComments") || "[]");
    dirComments = addComment(dirComments, submission);
    localStorage.setItem("dirComments", JSON.stringify(dirComments));
  } else if (id === "GoodWriter") {
    let writerComments = JSON.parse(localStorage.getItem("writerComments") || "[]");
    writerComments = addComment(writerComments, submission);
    localStorage.setItem("writerComments", JSON.stringify(writerComments));
  } else if (id === "ProductivitySystems") {
    let prodComments = JSON.parse(localStorage.getItem("prodComments") || "[]");
    prodComments = addComment(prodComments, submission);
    localStorage.setItem("prodComments", JSON.stringify(prodComments));
  }
}

let commentDiv = document.getElementById("comments-display");
if (commentDiv != null) {
  let id = "";
  if (document.getElementById("8experimentsinmotivation") != null) {
    id = "Experiments";
  } else if (document.getElementById("amindfulshiftoffocus") != null) {
    id = "MindfulFocus";
  } else if (document.getElementById("howtodevelopanawesomesenseofdirection") != null) {
    id = "SenseOfDirection";
  } else if (document.getElementById("trainingtobeagoodwriter") != null) {
    id = "GoodWriter";
  } else if (document.getElementById("whatproductivitysystemswontsolve") != null) {
    id = "ProductivitySystems";
  }
  let commentList = getComments(id);
  for (let i = 0; i < commentList.length; i++) {
    let commentBlock = document.createElement("div");
    commentBlock.innerHTML = commentList[i].name + ": " + commentList[i].message;
    commentBlock.className = "comment-block";
    commentDiv.appendChild(commentBlock);
  }
}

function getComments(id) {
  if (id === "Experiments") {
    let expComments = JSON.parse(localStorage.getItem("expComments") || "[]");
    return expComments;
  } else if (id === "MindfulFocus") {
    let focusComments = JSON.parse(localStorage.getItem("focusComments") || "[]");
    return focusComments;
  } else if (id === "SenseOfDirection") {
    let dirComments = JSON.parse(localStorage.getItem("dirComments") || "[]");
    return dirComments;
  } else if (id === "GoodWriter") {
    let writerComments = JSON.parse(localStorage.getItem("writerComments") || "[]");
    return writerComments;
  } else if (id === "ProductivitySystems") {
    let prodComments = JSON.parse(localStorage.getItem("prodComments") || "[]");
    return prodComments;
  } else if (id === "ViewContacts") {
    let contacts = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    return contacts;
  }
}

export {Comment, getSubmission, insertToMemory, getComments};
