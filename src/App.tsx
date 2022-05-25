import React, { useState } from "react";
import "./styles/App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { FaFilter } from "react-icons/fa";
import AllCharactersList from "./components/allChars/allChars.component";
import FilterModal from "./components/filterModal/filterModal.module";


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredName, setFilteredName] = useState("");
  const filteredValueDetecter = (name: string) => {
    setFilteredName(name);
  };
  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className="heading">
        {filteredName === "" && <h1 >Rick and Morty</h1>}
        {filteredName !== "" && <h1 >{filteredName}</h1>}
        <button onClick={() => { setIsOpen(true); }} className="button-main">
          <FaFilter />
        </button>

      </div>
      <FilterModal open={isOpen} onClose={onClose} filteredValueDetecter={filteredValueDetecter} />
      <ApolloProvider client={client}>
        <div className="main-column">
          <AllCharactersList name={filteredName} />
        </div>
      </ApolloProvider>

    </>
  );
}

export default App;
