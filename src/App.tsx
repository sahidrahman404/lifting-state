import { ChangeEventHandler, useState } from "react";

function Name({
  name,
  onNameChange,
}: {
  name: string;
  onNameChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal() {
  // 💣 delete this, it's now managed by the App
  const [animal, setAnimal] = useState("");
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={(event) => setAnimal(event.target.value)}
      />
    </div>
  );
}
// 🐨 uncomment this
// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

// 💣 remove this component in favor of the new one
function Display({ name }: { name: string }) {
  return <div>{`Hey ${name}, you favorite animal`}</div>;
}

function App() {
  // 🐨 add a useState for the animal
  const [name, setName] = useState("");
  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal />
      {/* 🐨 pass the animal prop here */}
      <Display name={name} />
    </form>
  );
}

export default App;
