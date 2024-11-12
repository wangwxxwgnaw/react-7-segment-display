import Segment from "./Segment";
import React, { useEffect, useState } from "react";

import charToDigit, { ICharToDigit } from "../utils/charToDigit";

const letters = ["A", "B", "C", "D", "E", "F", "G"] as const;
const defaultChar = " ";

type DigitType = {
    char?: string;
    color?: string;
    height?: number;
    skew?: boolean;
    gray?: number;
    charMap?: ICharToDigit;
};

export const Digit = ({
    char = defaultChar,
    color = "red",
    height = 250,
    skew = false,
    gray = 0.1,
    charMap = charToDigit,
}: DigitType) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    } as React.CSSProperties;

    const [activeArray, setActiveArray] = useState(
        char && charMap[char] ? charMap[char] : charMap[defaultChar],
    );

    useEffect(() => {
        setActiveArray(char  && charMap[char] ? charMap[char] : charMap[defaultChar]);
    }, [char]);

    return (
        <div className="digit" style={style}>
            {activeArray.map((active, index) => {
                const letter = letters[index];
                return (
                    <Segment
                        key={letter}
                        active={active === 1}
                        size={height / 12.5}
                        color={color}
                        id={letter}
                        skew={skew}
                        gray={gray}
                    />
                );
            })}
        </div>
    );
};
