import React, {FC} from 'react';
import {Input} from "reactstrap";

import { SearchBarType } from "../../types";

const SearchBar: FC<SearchBarType> = ({placeholder, onSearch}) => {
  return (
      <Input
        type="text"
        name="text"
        id="example"
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
      />
  );
};


export default SearchBar;
