import DropdownField from "../DropdownField"
import SubmitButton from "../SubmitButton"
import TextField from "../TextField"
import "./Form.css"

const Form = ({slots, rarities}) => {
    return(
        <section>
            <form>
                <TextField />
                <DropdownField label="Slot" options={slots} />
                <DropdownField label="Rarity" options={rarities.map(option => option.rarity)} color={rarities.map(option => option.cor)}/>
                <SubmitButton text="Submit"/>
            </form>
        </section>
    )
}

export default Form