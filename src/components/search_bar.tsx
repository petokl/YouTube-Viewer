import React, { useState } from "react";
import { Row,  Input, NavLink } from "reactstrap";
import { Colxx } from "./Common/CustomBootstrap";
import logo from "../assets/images/logo.png";

interface Props {
  className?: string;
  onSearchTermChange: (term:string)  => void;
}


const SearchBar: React.FC<Props> = ({onSearchTermChange}) => {
  const [term, setTerm] = useState<string | "">("");

  const fetchVideos = (term:string) => {
    setTerm(term)
    onSearchTermChange(term);
  } 

  return (
    <Colxx xxs={12} className="search-bar">
      <Row className="p-0 m-0">
        <Colxx xxs={3} md={4} className="search-bar-logo p-0">
          <NavLink href="/">
            <img src={logo} alt="logo" height="60" />
          </NavLink>
        </Colxx>
        <Colxx xxs={9} md={4} className="search-bar-input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Input
            placeholder="Search..."
            value={term}
            onChange={(event) => fetchVideos(event.target.value)}
          />
        </Colxx>
      </Row>
    </Colxx>
  )
}

export default SearchBar;
