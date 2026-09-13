function InputText ({campo, type, placeholder, onChange, value}){
    return(
        <div className="mb-3 input-group input-group-lg">
            <label htmlFor={campo} className="form-label">{`${campo}: `}</label>
            <input type={type} name={campo} id={campo} placeholder={placeholder} onChange={onChange} value={value} required/>
        </div>
    );

}
export default InputText;