import Item from "./Item";

const AddItem = (props) => {
  return (
    props.items.map((item) => (
      <div key={item.id}>
        <Item info={item} />
        <button onClick={() => props.onItemDelete(item.id)}>Delete</button>
      </div>
    ))
  );
}

export default AddItem;