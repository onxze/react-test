import React from "react";
import PropTypes from "prop-types";

const Title = ({caption}) => (
    <h1>
      {caption}
    </h1>
);

Title.propTypes = {
    caption: PropTypes.string.isRequired
}

export default Title;
