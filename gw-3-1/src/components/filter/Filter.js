import React from "react";
import s from '../app.module.css'

const Filter = ({ nameFilter }) => (
  <div>
    <h2>Find contact by name</h2>
    <input className={s.input} type="text" onChange={nameFilter} />
  </div>
);

export default Filter;