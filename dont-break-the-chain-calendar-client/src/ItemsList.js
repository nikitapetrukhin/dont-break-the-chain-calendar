
const ItemsList = (props) => {
  return (
    <form className="ui-container" onSubmit={props.onFormSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={props.name}
          onChange={(e) => props.onSetName(e.target.value)}
          className="ui-textfield"
        />

        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          id="desc"
          value={props.desc}
          onChange={(e) => props.onSetDesc(e.target.value)}
          className="ui-textfield"
        />

        <label htmlFor="src">Picture: </label>
        <input
          type="url"
          id="src"
          value={props.src}
          onChange={(e) => props.onSetSrc(e.target.value)}
          className="ui-textfield"
          placeholder="link: https://..."
        />

        <input type="submit" value="Add" className="ui-button-add" />
    </form>
  );
}

export default ItemsList;