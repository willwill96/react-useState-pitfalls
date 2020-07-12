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
function MyComponent() {
  let [dog, setDog] = useState(Fido);

  const toggleDog = () => {
    if (dog === Fido) {
      dog = Tucker;
    } else {
      dog = Fido;
    }
    console.log(dog);
    // setDog(dog === Fido ? Tucker : Fido);
  };

  return (
    <div style={{ padding: 20 }}>
      <img
        style={{ height: 300, width: 400 }}
        src={dog.img}
        onClick={toggleDog}
      />
      <div>Name: {dog.name}</div>
      <div>Breed: {dog.breed}</div>
    </div>
  );
}
export default MyComponent;
