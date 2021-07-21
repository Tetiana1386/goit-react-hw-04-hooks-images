import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onLoadMore }) {
  return (
    <div className="Button_wrapper">
      <button type="button" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
