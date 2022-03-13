import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/thunk/posts-thunk";
import "./Filter.css";

function Filter() {
  const [filterValue, setFilterValue] = useState();
  const currentPage = useSelector((state) => state.posts.currentPage);
  const pageSize = useSelector((state) => state.posts.pageSize);
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    setFilterValue(e);
    const filterBy = e;
    dispatch(getPosts(currentPage, pageSize, filterBy));
  };

  return (
    <div className="filter">
      <i className="fas fa-filter"></i>
      Фильтр постов по:
      <select
        className="form-select"
        name=""
        id=""
        value={filterValue}
        onChange={(e) => filterHandler(e.target.value)}
      >
        <option disabled className="disabled" value="">
          выбрать
        </option>
        <option value="date">по дате</option>
        <option value="al">по алфовиту</option>
      </select>
    </div>
  );
}

export default Filter;
