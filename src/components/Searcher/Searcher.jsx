import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/thunk/posts-thunk";
import "./Searcher.css";

function Searcher() {
  const [searchInp, setSearchInp] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearchInp(e.target.value);
  };

  const onSearch = () => {
    dispatch(search(searchInp));
  };

  return (
    <div onChange={onChange} className="searcher d-flex">
      <input
        type="text"
        className="form-control me-2  searcher--inp"
        placeholder="Введите поисковый запрос"
      />
      <button className="btn btn-success searcher--btn" onClick={onSearch}>
        search
      </button>
    </div>
  );
}

export default Searcher;
