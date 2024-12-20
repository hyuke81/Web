import PropTypes from 'prop-types';

const Input = ({ type, value, onChange, className, defaultValue, placeholder }) => {
    return (
        <input
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue} 
        placeholder={placeholder}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    defaultValue: PropTypes.string
};

export default Input;

