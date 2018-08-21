import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
    <span>
    <h1>{value}</h1>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
          <option value={option} key={option}>
              {option}
          </option>)
      }
    </select>
  </span>
)

Picker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string,
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Picker