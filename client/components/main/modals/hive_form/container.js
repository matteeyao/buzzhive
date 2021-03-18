import { connect } from "react-redux"
import { closeModal } from '../../../../actions/modal_actions';
import { createHive } from "../../../../actions/hive_actions"
import Component from "./component"

const mapStateToProps = ({ errors: { hive } }) => {
    return {
        errors: hive
    }
}

const mapDispatchToProps = dispatch => (
    {
        createHive: hive => dispatch(createHive(hive)),
        closeModal: () => dispatch(closeModal()),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)