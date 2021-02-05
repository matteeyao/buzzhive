import React from 'react';

export default () => {
    return (
        <footer>
            <span className="c-search_autocomplete__footer_feedback">
                <span id="something-off-text-node">Not the results you expected? </span>
                <button id="give-feedback-text-node" tabIndex="-1" aria-labelledby="something-off-text-node give-feedback-text-node" className="c-link--button" type="button">Give feedback</button>
            </span>
        </footer>
    );
};
