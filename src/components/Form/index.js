import DropdownField from "../DropdownField"
import SubmitButton from "../SubmitButton"
import TextField from "../TextField"
import "./Form.css"

const Form = ({slots, rarities}) => {
    return(

            <form className="creation-form">
                <h1>Item Registration</h1>
                <h2>Fill in the forms with the data of the item you want to register:</h2>
                <TextField />
                <DropdownField label="Slot" options={slots} />
                <DropdownField label="Rarity" options={rarities.map(option => option.rarity)} color={rarities.map(option => option.cor)}/>
                <SubmitButton text="Submit"/>
            </form>

    )
}

export default Form