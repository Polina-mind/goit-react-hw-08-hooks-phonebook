import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import './Filter.css';
import { getFilter } from '../../redux/selectors';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(changeFilter(event.target.value));

  return (
    <div>
      <p className="FindTitle">Поиск по имени</p>

      <input
        className="InputFilter"
        value={filter}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </div>
  );
}

export default Filter;
