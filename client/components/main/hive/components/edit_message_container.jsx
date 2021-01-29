import React from 'react';
import { connect } from 'react-redux';
import { requestReport, updateReport } from '../../actions/report_actions';
import ReportForm from './report_form';

class EditMessageForm extends React.Component {
    componenetDidMount() { // mispelled as comomponenetDidMount
        this.props.requestReport(this.props.match.params.reportId);
    }

    render() {
        // DO NOT MODIFY THIS FUNCTION
        const { action, formType, report } = this.props;

        // Hint: The report will not exist on the first render - what do we need to 
        // do to get it?
        if (!report) return null;
        return (
            <ReportForm
                action={action}
                formType={formType}
                report={report} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        report: state.reports[ownProps.match.params.reportId],
        formType: 'Edit Message',
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        action: (report) => dispatch(updateReport(report)),
        requestReport: (reportId) => dispatch(requestReport(reportId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMessageForm);