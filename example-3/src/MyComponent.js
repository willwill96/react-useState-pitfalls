import React, { useState } from "react";

const Fido = {
  name: "Fido",
  breed: "Boxer",
  img: "/boxer.webp"
};

const Tucker = {
  name: "Tucker",
  breed: "Golden Retriever",
  img: "/Tucker.jpg"
};

function ParentComponent() {
  const [dog, setDog] = useState(Fido);
  return (
    <div>
      <ChildComponent dog={dog} />
      <button
        onClick={() => {
          if (dog === Tucker) {
            setDog(Fido);
          } else {
            setDog(Tucker);
          }
        }}
      >
        Toggle Dog
      </button>
    </div>
  );
}

function ChildComponent(props) {
  const [name, setName] = useState("");
  const [dog, setDog] = useState(props.dog);

  const renameDog = () => {
    setDog({ ...dog, name });
  };

  return (
    <div>
      <img
        style={{ height: 300, width: 400 }}
        src={dog.img}
        onClick={renameDog}
      />
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
export default ParentComponent;
