
import { useState } from "react";

import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchBar() {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    let str = event.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(term.length > 1){
    
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Input onChange={handleChange} name='basic-search' type="text" placeholder="Search text / video id / link..." ></Input>
      <button></button>
    </form>
  );

};

export default SearchBar;