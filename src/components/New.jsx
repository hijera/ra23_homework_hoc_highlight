import React from 'react';
import PropTypes from 'prop-types';

New.propTypes = {

};

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

export default New;