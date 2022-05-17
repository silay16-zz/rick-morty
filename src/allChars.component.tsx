import React, { useState } from "react";
import { from, useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "./useCharQuery";
import "./characterList.css";
import CharacterList from "./charList.component";
import { CharData, SendData, Character } from "./interfaces";
import { CallWaypoint } from "./waypoint";
interface Test {
    name: string | ""
}
const AllCharactersList: React.FC<Test> = (test) => {
    const { name } = test;
    let filtered = test.name;
    const { loading, data, error, fetchMore } = useQuery<CharData, SendData>(CHARACTERS_QUERY, {
        variables: { page: 1, name: "" },
    });
    var characters = loading || !data ? [] : data.characters.results;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const scrollEnd = () =>
        fetchMore({
            variables: {
                page: characters.length / 20 + 1,
                name: filtered//Test 
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                fetchMoreResult.characters.results = [
                    ...prev.characters.results,
                    ...fetchMoreResult.characters.results,
                ];
                return fetchMoreResult;
            },
        });
    return (
        <>

            {data?.characters.results.map((props: Character, index: number) => (
                <div key={props.id} className="card-content">

                    <CharacterList
                        id={props.id}
                        name={props.name}
                        location={props.location}
                        image={props.image}
                    />
                    <CallWaypoint
                        indexProp={index}
                        listProp={data.characters.results}
                        fnProps={scrollEnd}

                    />
                </div>

            ))}
        </>)

};

export default AllCharactersList;