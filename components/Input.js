function Input({ value, onChange, className = ``,  ...rest }) {
  return (
    <input
      className={`border bg-gray-100 border-gray-400 focus:border-primary shadow appearance-none rounded-lg px-3 py-2 outline-none ${className}`}
      defaultValue={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Input;
