import { useState} from "react";
import Popup from "./PoppupEdit";
import "./Body.css";

export default function Body() {
  const [listItens, setListItens] = useState([]);
  const [listItemName, setListItemName] = useState('');
  const [itemVisible, setItemVisible] = useState(false);
  const [itemValueP, setItemValueP] = useState();
  const [editingIndex, setEditingIndex] = useState(-1); // Novo estado para rastrear o índice de edição

  const handleListItem = () => {
    if (listItemName.trim() !== '') {
      const updatedList = [...listItens, listItemName]; // Crie uma nova lista com a nova tarefa
      setListItens(updatedList);
      setListItemName(''); // Limpe o campo de entrada
    }
  };

  const handleEditItem = (index) => {
    setItemVisible(true);
    setItemValueP(listItens[index]);
    setEditingIndex(index);
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...listItens];
    updatedList.splice(index, 1);
    setListItens(updatedList);
  };

  const handleConfirmed = (el) => {
    const target = el.target.parentNode.parentNode;
    if (target.classList.contains("list-itens")) {
      target.classList.toggle("confirmed");
    }
  };

  const test0 = () => {
    return listItens.map((el, key) => {
      return (
        <div key={key} className="list-body">
          <div className="list-itens">
            <div className="limiter-p">
              {editingIndex === key ? (
                <p>{itemValueP}</p>
              ) : (
                <p>{el}</p>
              )}
            </div>
            <div className="list-btns">
              <span
                className="btn-done material-symbols-outlined"
                onClick={(e) => {
                  handleConfirmed(e);
                }}
              >
                done
              </span>
              <span
                className="btn-delete material-symbols-outlined"
                onClick={() => {
                  handleRemoveItem(key);
                }}
              >
                delete
              </span>
              <span
                className="btn-edit material-symbols-outlined"
                onClick={() => {
                  handleEditItem(key);
                }}
              >
                edit
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <main>
        <section>
          <h1>To-Do List</h1>
          <div className="div-add-item">
            <form onSubmit={(event)=>event.preventDefault()}>
              <input
                placeholder="Digite sua tarefa aqui.."
                name="input-list"
                type="text"
                onChange={(e) => {
                  setListItemName(e.target.value);
                }}
                value={listItemName}
              />
              <button onClick={() => { handleListItem(); }}>Enviar</button>
            </form>
          </div>
        </section>
        {test0()}
        {itemVisible === true ? (
          <Popup
            valueP={itemValueP}
            altereValueP={setItemValueP}
            closeX={setItemVisible}
          />
        ) : null}
      </main>
    </>
  );
}
