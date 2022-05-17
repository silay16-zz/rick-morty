import React from "react";
import { Waypoint } from "react-waypoint";

export const CallWaypoint: any = ({
    indexProp,
    listProp,
    next,
    fnProps,
}: any) => {
    return (
        <div>
            {indexProp === listProp.length - 2 && (
                <Waypoint
                    onEnter={() => {
                        if (next !== null) {
                            fnProps();
                        }
                    }}
                ></Waypoint>
            )}
        </div>
    );
};