import React, { useState } from 'react';
import './styles/App.css';
import AllCharactersList from './components/allChars/allChars.component';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})
function App() {
  const [filteredName, setFilteredName] = useState("");
  const filteredValueDetecter = (event: any) => {
    setFilteredName(event.target.value);

  }
  return (
    <>
      <div>
        <h1>Rick and Morty</h1>
        <select onChange={filteredValueDetecter}>
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
