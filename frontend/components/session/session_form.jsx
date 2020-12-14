import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/client'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signupForm = this.props.formType === 'signup' ? (
            <div>
                <br />
                <label>First Name:
                    <input type="text"
                        value={this.state.fname}
                        onChange={this.update('fname')}
                        className="signup-input"
                    />
                </label>
                <br />
                <label>Last Name:
                    <input type="text"
                        value={this.state.lname}
                        onChange={this.update('lname')}
                        className="signup-input"
                    />
                </label>
                <br />
                <label>Email:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="signup-input"
                    />
                </label>
            </div>
        ) : "";

        return (
            <div className="session-form">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1>Welcome to buzzhive!</h1>
                    <h3>Please {this.props.formType} or {this.props.navLink}</h3>
                    {this.renderErrors()}
                    <div className="login-form">
                        {signupForm}
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
