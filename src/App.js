import TextField from './components/TextField';
import DropdownField from './components/DropdownField';

function App() {

  const slots = [
    "head",
    "shoulders",
    "chest",
    "wrist",
    "hands",
    "waist",
    "legs",
    "feet",
    "neck",
    "back",
    "finger",
    "trinket",
    "mainhand",
    "offhand",
    "onehanded",
    "twohanded",
    "ammo",
    "ranged",
    "relic"
  ]

    const rarities = [
      {
        rarity: "common",
        color: "#fff"
      },
      {
        rarity: "uncommon",
        color: "#0f0"
      },
      {
        rarity: "rare",
        color: "#00b"
      },
      {
        rarity: "epic",
        color: "#90f"
      },
      {
        rarity: "legendary",
        color: "#f90"
      }
    ]

    return (
    <>
      <TextField />
      <DropdownField label="Slot" options={slots} />
      <DropdownField label="Rarity" options={rarities.map(option => option.rarity)} color={rarities.map(option => option.cor)}/>
    </>
  );
}

export default App;
