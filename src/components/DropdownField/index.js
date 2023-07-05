import "./DropdownField.css"

const DropdownField = (props) => {
    return (
        <div key={props.label} className="dropdown-field">
            <label >{props.label}</label>
            <select required>
              {props.options.map(option => <option className={option} key={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default DropdownField