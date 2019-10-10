import React from 'react';
import './stylesheet.css';

class GridComments extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <section class = "grid-comments">
                <h1 id = "comment-section-h1"> Comments:</h1>
                <form id = "comment-form" method = "post">
                    <div id = "comment-form-validation-message"></div>
                    <table cellspacing="10" cellpadding="0">
                        <tr>
                        <td><label for="commenter-name">Your Name:</label></td>
                        <td><input type="text" id="commenter-name" name="name" /></td>
                        </tr>
                        <tr>
                        <td><label for="comment">Comment:</label></td>
                        <td><textarea id="comment" name="message"></textarea></td>
                        </tr>
                    </table>
                    <div class="button">
                        <button type="submit">Submit comment</button>
                    </div>
                </form>
                <div id = "comments-display"> Comments: </div>
            </section>
        );
    }
}

export default GridComments;