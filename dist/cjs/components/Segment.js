"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Segment = ({ active, color, size, id }) => {
    const marginTop = id === "B" || id === "F"
        ? size * 2.75
        : id === "E" || id === "C"
            ? size * 8.25
            : id === "G"
                ? size * 5.5
                : id === "D"
                    ? size * 11
                    : 0;
    const marginLeft = id === "B" || id === "C"
        ? size * 3.75
        : id === "F" || id === "E"
            ? size * -1.75
            : size;
    const outerStyle = {
        filter: active
            ? `drop-shadow(0px 0px ${size * 0.3}px ${color})`
            : "none",
        padding: size * 0.3,
        width: "fit-content",
        position: id ? "absolute" : "relative",
        transform: id === "B" || id === "F" || id === "E" || id === "C"
            ? "rotate(90deg)"
            : "none",
        marginTop: `${marginTop}px`,
        marginLeft: `${marginLeft}px`,
        zIndex: "2",
    };
    const innerStyle = {
        backgroundColor: color,
        filter: active
            ? "opacity(1) grayscale(0)"
            : "opacity(0.3) grayscale(0.7)",
        color: color,
        clipPath: "polygon(90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%, 10% 0)",
        WebkitClipPath: "polygon(90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%, 10% 0)",
        MozClipPath: "polygon(90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%, 10% 0)",
        height: `${size}px`,
        width: `${size * 5}px`,
    };
    return (react_1.default.createElement("div", { style: outerStyle },
        react_1.default.createElement("div", { style: innerStyle })));
};
exports.default = Segment;
//# sourceMappingURL=Segment.js.map