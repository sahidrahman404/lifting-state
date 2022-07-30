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

function FavoriteAnimal({
  animal,
  onAnimalChange,
}: {
  animal: string;
  onAnimalChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  );
}
function Display({ name, animal }: { name: string; animal: string }) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>;
}

function App() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={(e) => {
          setAnimal(() => e.target.value);
        }}
      />
      <Display name={name} animal={animal} />
    </form>
  );
}

export default App;
