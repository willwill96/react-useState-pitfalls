import React, { useState } from "react";

const Fido = {
  name: "Fido",
  breed: "Boxer",
  img: "/boxer.webp"
};
function MyComponent() {
  const [name, setName] = useState("");
  const [dog, setDog] = useState(Fido);

  const renameDog = () => {
    dog.name = name;
    setDog(dog);
  };

  return (
    <div style={{ padding: 20 }}>
      <img style={{ height: 300, width: 400 }} src={dog.img} />
      <div>Name: {dog.name}</div>
      <div>Breed: {dog.breed}</div>
      <input
        placeholder={`Type a new name for ${dog.name}`}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={renameDog}>Rename</button>
    </div>
  );
}
export default MyComponent;
