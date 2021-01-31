import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            demoUsername: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    componentDidMount() {
        const fetchRequestOption = {
            method: 'GET',
        };

        fetch(`/api/users/${parseInt(Math.random() * 10 + 1)}`, fetchRequestOption)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        demoUsername: result.username
                    })
                },
                (error) => {
                    this.setState({
                        // isLoaded: true,
                        error
                    });
                }
            );
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
            .then(() => this.props.history.push('/hives/1'));
        // debugger
    }

    demo(e) {
        e.preventDefault()
        const data = this.state.demoUsername.split(' ')[1].split('');
        const usernameField = document.getElementById('username_field');
        function keystroke(i = 0) {
            if (i < data.length) {
                usernameField.value += data[i];
                setTimeout(keystroke, 200, ++i);
            }
            // debugger
        };
        keystroke();

        const passwordField = document.getElementById('password_field');
        const pwData = 'demopw'.split('');
        function pwKeystroke(j = 0) {
            if (j < pwData.length) {
                passwordField.value += pwData[j];
                setTimeout(pwKeystroke, 200, ++j);
            }
        };
        pwKeystroke();

        setTimeout(() => {
            const userInfo = {
                username: this.state.demoUsername,
                password: 'demopw'
            };
            this.props.processForm(userInfo)
                .then(() => this.props.history.push('/hives/1'));
        }, 3000);
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
        const signupForm = this.props.formType === 'Create an Account' ? (
            <div>
                <label data-qa-formtext="true">
                    <input 
                        type="text"
                        value={this.state.fname}
                        onChange={this.update('fname')}
                        className="c-input_text c-input_text--large p-get_started_email_form__input"
                        placeholder="First Name"
                    />
                </label>
                <label data-qa-formtext="true">
                    <input type="text"
                        value={this.state.lname}
                        onChange={this.update('lname')}
                        className="c-input_text c-input_text--large p-get_started_email_form__input"
                        placeholder="Last Name"
                    />
                </label>
                <label data-qa-formtext="true">
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="c-input_text c-input_text--large p-get_started_email_form__input" 
                        id="signup_email" 
                        placeholder="Email"
                    />
                </label>
            </div>
        ) : "";

        const demoLogin = this.props.formType === 'Sign In with Username' ? (
            <button className="c-button c-button--outline c-button--large p-get_started_email_form__button p-get_started_aubergine_button" id="demo_btn" data-style="expand-right" data-qa="submit_button" onClick={this.demo}>Demo</button>
        ) : "";

        return (
            <div id="get_started_app_root" data-qa="page_contents" className="get-started-app-root" data-reactroot="">
                <header className="p-refreshed_page__header">
                    <div className="left-col"></div>
                    <div className="center-col"><a target="_self" className="c-link" href="/" rel="noopener noreferrer"><img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack" /></a></div>
                    <div className="right-col">
                        <div className="p-refreshed_page__header_sidelink">New to buzzhive?<br />
                            <div target="_self" className="c-link bold" rel="noopener noreferrer">{this.props.navLink}</div>
                        </div>
                    </div>
                </header>
                <form onSubmit={this.handleSubmit} className="p-refreshed_page">
                    <h1 className="p-refreshed_page__heading">Sign in to buzzhive</h1>
                    <div className="p-refreshed_page__sub_heading">Continue with the Google account or username you use to sign in.</div>
                    <div className="p-get_started_signin">
                        <div className="p-google_form">
                            <button className="c-button c-button--primary c-button--large c-third_party_auth c-google_login full_width" id="google_login_button" data-qa="base_google_login_button" type="button">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="c-third_party_auth__icon">
                                <g>
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                </g>
                            </svg>
                            <span className="c-google_login__label">Continue with Google</span>
                            </button>
                        </div>
                        <div className="c-horizontal_content_rule margin_bottom_150 margin_top_100">
                            <hr className="c-horizontal_content_rule__leftrule" />
                            <div className="c-horizontal_content_rule__content"><strong className="sk_light_gray_always">OR</strong></div>
                            <hr className="c-horizontal_content_rule__rightrule" />
                        </div>
                        {this.renderErrors()}
                        <div data-qa-formtext="true">
                            <div className="p-get_started_email_form">
                                {signupForm}
                                <label data-qa-formtext="true">
                                    <input 
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="c-input_text c-input_text--large p-get_started_email_form__input" 
                                        id="username_field" 
                                        placeholder="Username"
                                    />
                                </label>
                                <label data-qa-formtext="true">
                                    <input 
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="c-input_text c-input_text--large p-get_started_email_form__input"
                                        id="password_field"
                                        placeholder="Password"
                                    />
                                </label>
                            </div>
                            <input className="c-button c-button--outline c-button--large p-get_started_email_form__button p-get_started_aubergine_button" id="submit_btn" data-style="expand-right" data-qa="submit_button"  type="submit" value={this.props.formType} />
                        </div>
                    </div>
                    <div className="p-get_started_signin">
                        {demoLogin}
                        <div className="p-get_started_signin__manual"><i className="c-icon p-get_started_signin__icon c-icon--sparkles" type="sparkles" aria-hidden="true"></i><span className="padding_left_75">Don't feel like creating an account? Feel free to run a demo or go ahead and <a target="_self" className="c-link bold" rel="noopener noreferrer" href="/#/signup">sign up instead</a>.</span></div>
                    </div>
                </form>
                <footer className="p-refreshed_page__footer">
                    <a target="_blank" className="c-link c-button-unstyled p-refreshed_page__footer_link p-refreshed_page__footer_link--main" rel="noopener noreferrer">Privacy &amp; Terms</a>
                    <a target="_blank" className="c-link c-button-unstyled p-refreshed_page__footer_link p-refreshed_page__footer_link--main" rel="noopener noreferrer">Contact Us</a>
                    <div className="" aria-haspopup="true"><a target="_blank" className="c-link c-button-unstyled p-refreshed_page__footer_link p-refreshed_page__footer_link--main" rel="noopener noreferrer"><i className="c-icon margin_right_25 c-icon--globe c-icon--inherit" type="globe" aria-hidden="true"></i>Change region<i className="c-icon c-icon--chevron-medium-down c-icon--inherit" type="chevron-medium-down" aria-hidden="true"></i></a></div>
                </footer>
            </div>
        );
    }
}

export default SessionForm;
