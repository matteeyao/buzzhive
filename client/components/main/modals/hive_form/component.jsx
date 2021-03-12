import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import debounce from "lodash/debounce";
import { withRouter } from 'react-router-dom';

class HiveForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            is_private: false,
            ref_link: "",
            error: "",
            charLimit: 40,
            charRemaining: 40,
        }
        this.mounted = true;

        this.handleClose = this.handleClose.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.props.closeModal;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    handleClose(e) {
        e.preventDefault();
        this.closeModal();
    }

    invalidName(name) {
        const pos = name.search(/^[\w-_\[\]]*$/);
        if ((pos !== -1) || (name.toLowerCase() !== name)) {
            return true;
        } else {
            return false;
        }
    }

    printErrors(name) {
        if ( this.mounted ) {
            name = name || this.state.name;
            let err;
            
            if ( !this.invalidName(name) ) {
                err = "Special characters or uppercase letters are not permitted for hive names.";
            } else if ( name.length === 0 ) {
                err = "Don’t forget to name your hive.";
            } else { err = "" };

            this.setState({ error: err }, () => this.render());
        }
    }

    handleInput(field) {
        return e => {
            const {charLimit} = this.state;
            if (field === "name") {
                const value = e.currentTarget.value;                
                this.setState({
                    [field]: value,
                    charRemaining: charLimit - value.length,
                }, () => {
                    if (!this.debounce) {
                        this.debounce = debounce( () => {
                            if ( this.mounted ) {
                                this.printErrors(this.state.name)
                            }
                        }, 700 );
                    };
                    this.debounce();
                    // console.log(this.state);
                });
            } else {
                this.setState({
                    [field]: e.currentTarget.value,
                }/*, () => console.log(this.state) */);
            };
        };
    }

    refreshPage() {
        window.location.reload(false);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, description, is_private, ref_link } = this.state;
        const hive = { name, description, is_private, ref_link };
        // console.log(hiveFormData);
        this.props.createHive(hive)
            .then((res) => this.props.history.push(`/hives/${res.data.hive.id}`))
            .then(() => this.closeModal());
    }

    render(){
        const isValid = (this.state.error === "") && !!(this.state.name.length);

        return (
            <aside className="modal-container" onClick={this.props.closeModal}>
                <figure className={`create-channel-form`} onClick={e => e.stopPropagation()}>
                    <section className="head">
                        <h2>Create a{this.state.is_private ? " Private" : ""} Hive</h2>
                        <button onClick={ () => this.props.closeModal() } >
                            <figure className="x" >
                                <span>
                                    x
                                </span>
                            </figure>
                        </button>
                    </section>
                    <p>
                        Hives allow you communicate with friends or groups. Seperate hives cover different topics - for instance, #savethebees.
                    </p>
                    <form onSubmit={ this.handleSubmit }>
                        <label htmlFor="name">Name <span className="opt">(required)</span> <br/>
                            <FontAwesomeIcon icon={ this.state.is_private ? "lock" : "hashtag" } />
                            <input type="text" id="channel-name"
                                onChange={ this.handleInput('name') }
                                value={ this.state.name }
                                placeholder="e.g. savethebees" />
                            <div className="counter">
                                { this.state.charRemaining }
                            </div>
                            <br/>
                            <span className="subline error">{ this.state.error ? this.state.error : this.props.errors[0] }</span>
                        </label>

                        <label htmlFor="description">Description <span className="opt">(required)</span> <br/>
                            <input type="text"
                                onChange={ this.handleInput("description") }
                                value={ this.state.topic } />
                                <br/>
                                <span className="subline">What's this channel about?</span>
                        </label>

                        <label htmlFor="reference-link">Reference Link <span className="opt">(optional)</span> <br/>
                            <input type="text"
                                onChange={ this.handleInput("ref_link") }
                                value={ this.state.ref_link } />
                                <br/>
                                <span className="subline">Any external resource for newcomers?</span>
                        </label>                      

                        <label htmlFor="private" className="private">
                            <p>
                                <strong>Make private</strong> <br/>
                                { !this.state.is_private ? (
                                    <>
                                        When a channel is set to private, it can only be viewed or joined by invitation.
                                    </>
                                ) : (
                                    <>
                                        <span>This can't be undone.</span> A private channel cannot be made public later on.
                                    </>
                                )}
                            </p>

                            <label className="slide-box">
                                <input type="checkbox" id="private"
                                    onClick={ () => this.setState({ is_private: !this.state.is_private }) } />
                                <span className="slider"></span>
                            </label>

                        </label>


                        <button 
                            disabled={!isValid}
                            className={ isValid ? "valid" : "not-valid"} >
                            Create
                        </button>
                    </form>
                </figure>
            </aside>
        )
    }
}

export default withRouter(HiveForm);