import PropTypes from 'prop-types';
import styles from './input.module.css';
import classNames from 'classnames';

export default function InputField(props) {
    const { 
      name, 
      placeholder,
      type, 
      value, 
      onChange, 
      isEmpty, 
      message, 
      disabled,
      readOnly,
      autoComplete,
      rightIcon,
      maxLength,
      floatMode,
      floatLabel
    } = props;

    const customClassInputError = [styles.textfield, isEmpty ? styles['red-textfield'] : ''].filter(Boolean).join(' ');

    const customClassFloatMode = classNames(
      'border-b py-1 focus:outline-none focus:border-teal-400 focus:border-b-2 transition-colors peer',
      {
        'border-teal-400 border-b-2' : value
      }
    );

    const peerLabelClasses = classNames(
        'absolute left-0 top-1 text-gray-700 cursor-text peer-focus:text-sm peer-focus:text-teal-400 peer-focus:-top-4 transition-all',
        {
          'text-sm text-teal-400 -top-4' : value,
          'text-lg' : !value
        }
    );

    return (
      <div className="relative">
        <input
          id={name}
          className={floatMode ? customClassFloatMode : customClassInputError}
          name={name}
          onChange={onChange}
          placeholder={!floatMode ? placeholder : ''}
          type={type}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        {rightIcon &&
          <div className={styles['show-right-icon']}>
            <span>{rightIcon}</span>
          </div>
        }
        {isEmpty &&
          <div className='mt-1 text-xs text-red-600 font-semibold italic'>{message}</div>
        }
        {floatMode &&
          <label htmlFor={name} className={peerLabelClasses}>
            {floatLabel}
          </label>
        }
      </div>
    )
}

InputField.defaultProps = {
  name: '',
  placeholder: '',
  type: '',
  value: '',
  onChange: () => {},
  isEmpty: false,
  message: 'tidak boleh kosong',
  disabled: false,
  readOnly: false,
  autoComplete: 'off',
  rightIcon: null,
  maxLength: 255,
  floatMode: false,
  floatLabel: '',
};
  
InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  isEmpty: PropTypes.bool,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.string,
  rightIcon: PropTypes.element,
  maxLength: PropTypes.number,
  floatMode: PropTypes.bool,
  floatLabel: PropTypes.string
};