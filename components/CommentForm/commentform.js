import React from 'react';
import ReactDOM from 'react-dom';

export default class CommentForm extends React.Component {
    getInitialState() {
        return {
            author: '',
            text: '',
        }
    }
    handleAuthorChange(e) {
        this.setState({
            text:e.target.value
        });
    }
    handleTextChange(e) {
        this.setState({
            text:e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if(!text||!author) {
            return ;
        }
        this.props.onCommentSubmit({
            author: author,
            text:text
        });
        this.setState({
            author: '',
            text: ''
        });
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
            </form>
        );
    }
}