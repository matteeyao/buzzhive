import { connect } from "react-redux"
import { closeModal } from '../../../../actions/modal_actions';
import About from "./component"

const mapDispatchToProps = dispatch => (
    {
        closeModal: () => dispatch(closeModal()),
    }
)

export default connect(null, mapDispatchToProps)(About)