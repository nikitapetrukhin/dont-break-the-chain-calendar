import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
import { useEffect, useState } from "react";

const Shop = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [src, setSrc] = useState("");
  const [items, setItems] = useState([]);

  //Дополнительная проверка
  useEffect(() => {
    console.log(items);
  }, [items]);

  // Чтобы блокировать релоад страницы, как и при работе с формами в ванилла-JS, используется
  // метод event.preventDefault() по событию submit.
  function handleFormSubmit(e) {
    e.preventDefault();

    //Запрет на добавление товара, если заполнены не все поля
    if (name.trim() !== "" || desc.trim() !== "" || src.trim() !== "") {
      setItems([...items, { id: crypto.randomUUID(), name, desc, src }]);
      setName("");
      setDesc("");
      setSrc("");
    } else {
      alert("Please fill in all the gaps!");
    }
  }

  function handleItemDelete(key) {
    const newItems = items.filter((item) => key !== item.id);
    setItems(newItems);
  }

  return (
    <div className="ui-container">
      {items.length === 0 ? (
        <p style={{ color: "red" }}>Add first item!</p>
      ) : (
        <AddItem items={items} onItemDelete={handleItemDelete} /> // Stateless component
      )}
      <ItemsList name={name} desc={desc} src={src} onFormSubmit={handleFormSubmit} onSetName={setName} onSetDesc={setDesc} onSetSrc={setSrc}/>
    </div>
  );
};

export default Shop;