import React from 'react';

export const Input = ({
  label,
  error,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  required = false,
  ...props
}) => {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label} {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        className="input-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};
