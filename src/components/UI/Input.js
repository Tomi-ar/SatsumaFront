import './forms.modules.css'

const Input = (props) => {
  return (
    <div className='search-input'>
      <label className='search-input-item' htmlFor={props.id}>{props.label}</label>
      <input
        className="serch-input-box"
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default Input;