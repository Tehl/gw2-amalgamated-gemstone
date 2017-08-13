import React from "react";

import "./options.less";

const Options = ({ sort, count, onSortChange, onCountChange }) =>
  <div className="row text-center display-options">
    <div className="col col-8" />

    <div className="col col-2 option-count">
      <label>
        Show
        <select value={count} onChange={onCountChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="0">All</option>
        </select>
        results
      </label>
    </div>

    <div className="col col-2 option-sort">
      <label>
        Sort by
        <select value={sort} onChange={onSortChange}>
          <option value="buy">Buy Price</option>
          <option value="sell">Sell Price</option>
        </select>
      </label>
    </div>
  </div>;

export default Options;
