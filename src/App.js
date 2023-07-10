import Form from './components/Form';
import Header from './components/Header';

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
    <div className='app'>
      <Header />
      <section className='page'>
        <Form slots={slots} rarities={rarities}/>
      </section>
    </div>
  );
}

export default App;
