import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { StyledForm } from "./style";

const SearchField = props => {
  const textInput = useRef();

  const SearchHero = e => {
    e.preventDefault();
    const value = textInput.current.value;
    if (value.length <= 0) {
      window.alert("Por favor, preencha o campo de busca.");
      return;
    } else {
      props.history.push(`/search?query=${textInput.current.value}`);
      textInput.current.value = "";
    }
  };

  return (
    <StyledForm onSubmit={SearchHero}>
      <input type="text" ref={textInput} placeholder="Pesquisar" />
      <button type="submit">
        <MdSearch />
      </button>
    </StyledForm>
  );
};

export default withRouter(SearchField);
