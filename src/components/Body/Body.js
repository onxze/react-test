import React from "react";
import PropTypes from "prop-types";

const Body = ({text}) => (
    <div dangerouslySetInnerHTML={{__html: text }}></div>
);

Body.propTypes = {
    text: PropTypes.string.isRequired
}

export default Body;
