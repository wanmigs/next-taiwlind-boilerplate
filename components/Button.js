import React from 'react'

function Button({ onClick, className = ``, children, ...rest }) {
  return (
    <button
      className={`btn outline-none ${className}`}
      onClick={onClick}
      {...rest}
      >
      {children}
    </button>
  );
}
export default React.memo(Button); // ✅ Uses shallow comparison
