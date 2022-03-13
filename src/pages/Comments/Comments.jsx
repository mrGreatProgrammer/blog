import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../../components/Comment/Comment";
import Loader from "../../components/Loader/Loader";
import ModalWarning from "../../components/ui/ModalWarning/ModalWarning";
import { getComments } from "../../redux/thunk/comments-thunk";
import "./Comments.css";

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const [warningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    dispatch(getComments(1));
  });

  const showWarning = () => {
    setWarningVisible(true);
  };

  const hideWarning = () => {
    setWarningVisible(false);
  };

  return (
    <div className="comments">
      {!comments.length && <p>Комментарии отсутствуют у этого поста</p>}
      {comments.map((c) => (
        <Comment
          key={c.id}
          id={c.id}
          userName={c.userName}
          text={c.text}
          email={c.email}
        />
      ))}
      <div className="comments__caontainer--inp">
        <textarea
          className="comments--inp"
          disabled
          placeholder="Введите комментарий"
        ></textarea>
        {warningVisible && <ModalWarning hideWarning={hideWarning} />}
        <button
          onClick={showWarning}
          className="btn btn-primary send__comment--btn"
        >
          отправить
        </button>
      </div>
    </div>
  );
}

export default Comments;
