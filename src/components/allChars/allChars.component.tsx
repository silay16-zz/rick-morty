import React, { useState } from "react";
import { from, useQuery } from "@apollo/client";
import { charQuery } from "../../common/useCharQuery";
import "./characterList.css";
import CharacterList from "../charList.component";
import { ICharData, ISendData, Character } from "../../common/interfaces";
import { CallWaypoint } from "../../common/waypoint";
interface ITest {
    name: string | ""
}
const AllCharactersList: React.FC<ITest> = (test) => {

    const filtered = test.name;
    const { loading, data, error, fetchMore } = useQuery<ICharData, ISendData>(charQuery, {
        variables: { page: 1, name: filtered },
    });
    const characters = loading || !data ? [] : data.characters.results;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const scrollEnd = () =>
        fetchMore({
            variables: {
                page: characters.length / 20 + 1,

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