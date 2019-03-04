import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ greeting, name, handleChange }) => {
  return (
    < >
      <label htmlFor="greeting">
        Greeting:<br/>
        <input name="greeting"
          value={greeting}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label htmlFor="name">
        Name:<br/>
        <input name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Controls.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
  handleChange: PropTypes.func
};

export default Controls;
