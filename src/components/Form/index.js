import DropdownField from "../DropdownField"
import SubmitButton from "../SubmitButton"
import TextField from "../TextField"
import "./Form.css"

const Form = ({slots, rarities}) => {
    return(
        <section className="creation-form">
            <form>
                <div className="title">
                    <h1>Item Creation</h1>
                    <h2>Fill in the forms with the data of the item you want to create:</h2>
                </div>
                <div className="fields">
                    <TextField />
                    <DropdownField label="Slot" options={slots} />
                    <DropdownField label="Rarity" options={rarities.map(option => option.rarity)} color={rarities.map(option => option.cor)}/>
                </div>
                <div className="buttons">
                    <SubmitButton text="Create"/>
                </div>
            </form>
        </section>

    )
}

export default Form