import "./SubmitButton.css"

const SubmitButton = (props) => {
    return (
        <button className="create-button">
            {props.children}
        </button>
    )
}

export default SubmitButton