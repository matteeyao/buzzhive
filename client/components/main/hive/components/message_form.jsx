import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.message;
        this.baseState = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        // App.cable.subscriptions.subscriptions[0].speak({
        //     message: this.state.body
        // });
        this.props.action(this.state);
        this.setState(this.baseState);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder={`Message #${this.state.msgeable_id}`}>
                </textarea>
                <input type="submit" value={this.props.formType} />
            </form>
        );
    };
}

export default MessageForm;
