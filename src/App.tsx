import React, { useState } from "react";
import "./styles/App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AllCharactersList from "./components/allChars/allChars.component";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});
function App() {
  const [filteredName, setFilteredName] = useState("");
  const filteredValueDetecter = (event: any) => {
    setFilteredName(event.target.value);
  };
  return (
    <>
      <div className="heading">
        {filteredName===""&&<h1 >Rick and Morty</h1>}
        {filteredName!==""&&<h1 >{filteredName}</h1>}
        <select onChange={filteredValueDetecter} className="dropdown">
          <option value="">
            Select
          </option>
          <option value="Rick">Rick</option>
          <option value="Morty">Morty</option>
        </select>
      </div>
      <ApolloProvider client={client}>
        <div className="main-column">
          <AllCharactersList name={filteredName} />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
