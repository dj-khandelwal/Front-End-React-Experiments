function getSubmission(to, from, subject, message) {
    
    let submission = {
        to: to,
        from: from,
        subject: subject,
        message: message
    };
    
    return submission;   
  }

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