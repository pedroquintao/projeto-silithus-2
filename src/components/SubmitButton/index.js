import "./SubmitButton.css"

const SubmitButton = (props) => {
    return (
        <button className="create-button">
            {props.text}
        </button>
    )
}

export default SubmitButton