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
      errorMessage,
      disabled,
      readOnly,
      autoComplete,
      leftIcon,
      rightIcon,
      maxLength,
      floatMode,
      floatLabel,
      onInvalid,
      onInput
    } = props;

    const customClassInputError = classNames(
      [styles.textfield, errorMessage ? styles['red-textfield'] : ''].filter(Boolean).join(' '),
      {
        'pl-10' : leftIcon,
        'pr-10' : rightIcon
      }
    );

    const customClassFloatMode = classNames(
      'border-b py-1 focus:outline-none focus:border-teal-400 focus:border-b-2 transition-colors peer',
      {
        'border-teal-400 border-b-2' : value,
        'border-red-400 border-b-2' : errorMessage,
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
      <>
        <div className="relative">
          {leftIcon &&
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </span>
          }
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
            onInvalid={onInvalid}
            onInput={onInput}
          />
          {rightIcon &&
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              {rightIcon}
            </span>
          }
          {floatMode &&
            <label htmlFor={name} className={peerLabelClasses}>
              {floatLabel}
            </label>
          }
        </div>
        {errorMessage &&
          <div className='mt-1 text-xs text-red-500 font-bold italic'>{errorMessage}</div>
        }
      </>
    )
}

InputField.defaultProps = {
  name: '',
  placeholder: '',
  type: '',
  value: '',
  onChange: () => {},
  errorMessage: '',
  disabled: false,
  readOnly: false,
  autoComplete: 'off',
  leftIcon: null,
  rightIcon: null,
  maxLength: 255,
  floatMode: false,
  floatLabel: '',
  onInvalid: () => {},
  onInput: () => {}
};
  
InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  maxLength: PropTypes.number,
  floatMode: PropTypes.bool,
  floatLabel: PropTypes.string,
  onInvalid: PropTypes.func,
  onInput: PropTypes.func
};