import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

const Todo = (props) => {
  const [showModal, setModal] = useState(false);

  function deleteHandler() {
    setModal(true);
  }

  function closeModalHandler() {
    setModal(false);
  }

  return (
    <div className="Card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {showModal && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {showModal && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
};

export default Todo;
