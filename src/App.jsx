import { useState } from "react";
import { Textfit } from "react-textfit";
import { isMobile } from "react-device-detect";
import "./App.css";

function App() {
    const validChars = "1 2 3 4 5 6 7 8 9 0 CE ( ) ÷ × − + .".split(" ");
    const operators = ["÷", "×", "−", "+", "."];

    const vLib = {
        ".": ".",
        "+": "+",
        "−": "-",
        "×": "*",
        "÷": "/",
    };

    const [oldOut, setOldOut] = useState("");
    const [output, setOutput] = useState("");

    const formatEquation = (str) => {
        let newStr = "";
        [...str].map((char) => {
            if (operators.includes(char)) {
                newStr += vLib[char];
            } else {
                newStr += char;
            }
        });

        return newStr;
    };

    const handleInput = (val) => {
        let out = "";

        [...val].map((char) => {
            switch (char) {
                case "/":
                    char = "÷";
                    break;
                case "*":
                    char = "×";
                    break;
                case "-":
                    char = "−";
                    break;
                default:
                    break;
            }

            const lastChar = out[out.length - 1];

            const isTwoOperators =
                operators.includes(char) && operators.includes(lastChar);

            if (validChars.includes(char) && !isTwoOperators) {
                out +=
                    operators.includes(char) & (char != ".")
                        ? ` ${char} `
                        : char;
            }
        });

        setOutput(out);
    };

    const clear = () => {
        setOldOut("");
        setOutput("");
    };

    const handleEnter = () => {
        const fStr = formatEquation(output.replace(/\s+/g, ""));
        let result = Number(eval(fStr).toFixed(2)).toString();

        setOldOut(output);
        setOutput(result);
    };

    return (
        <div className={`main-wrapper ${isMobile ? "mobile" : "desktop"}`}>
            <div className="output-wrapper">
                <span>{oldOut}</span>

                <Textfit className="input" min={16} max={48} mode="single">
                    {output}
                </Textfit>
            </div>

            <button className="button clear" onClick={clear}>
                AC
            </button>
            <button
                className="button operator"
                onClick={() => handleInput(output + "(")}
            >
                ()
            </button>
            <button
                className="button operator"
                onClick={() => handleInput(output + "%")}
            >
                %
            </button>
            <button
                className="button operator"
                onClick={() => handleInput(output + "/")}
            >
                &divide;
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "7")}
            >
                7
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "8")}
            >
                8
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "9")}
            >
                9
            </button>
            <button
                className="button operator"
                onClick={() => handleInput(output + "*")}
            >
                &times;
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "4")}
            >
                4
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "5")}
            >
                5
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "6")}
            >
                6
            </button>
            <button
                className="button operator"
                onClick={() => handleInput(output + "-")}
            >
                &minus;
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "1")}
            >
                1
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "2")}
            >
                2
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "3")}
            >
                3
            </button>
            <button
                className="button operator"
                onClick={() => handleInput(output + "+")}
            >
                +
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + "0")}
            >
                0
            </button>
            <button
                className="button"
                onClick={() => handleInput(output + ".")}
            >
                .
            </button>
            <button
                className="button"
                onClick={() => setOutput(output.slice(0, -1))}
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M398.342 426.973C321.698 430.804 245.768 427.828 169.869 428.868C160.808 428.993 151.787 428.942 142.715 427.54C128.612 425.359 116.163 420.08 106.26 409.866C83.1866 386.064 62.8718 359.839 41.1177 334.875C32.8451 325.381 24.2978 316.008 17.0891 305.729C-6.81522 271.643 -4.7021 230.378 22.2409 198.567C47.9988 168.156 73.9854 137.937 99.9193 107.675C114.137 91.0845 132.389 83.0963 154.091 83.0772C230.313 83.01 306.535 82.9398 382.756 83.0861C444.36 83.2044 501.763 133.636 508.266 194.746C512.515 234.675 513.209 275.114 508.263 314.876C501.078 372.641 460.228 413.977 403.383 425.844C401.95 426.143 400.534 426.526 398.342 426.973ZM329.341 133.526C273.35 133.536 217.358 133.77 161.37 133.375C149.801 133.293 141.381 136.944 133.977 145.803C110.12 174.349 85.7045 202.427 61.6178 230.782C48.0635 246.738 47.8761 262.763 60.7497 279.376C62.7237 281.923 64.7603 284.426 66.8522 286.877C89.8685 313.85 113.007 340.72 135.851 367.837C141.15 374.127 147.045 377.41 155.446 377.383C231.37 377.132 307.297 377.44 383.217 376.866C420.282 376.585 454.142 345.847 457.988 308.861C461.627 273.863 461.359 238.618 458.13 203.597C454.923 168.812 426.838 140.421 392.533 135.066C372.112 131.878 351.571 134.274 329.341 133.526Z"
                        fill="currentColor"
                    />
                    <path
                        d="M351.617 296.977C354.551 310.591 350.262 321.289 340.036 327.009C329.543 332.88 318.498 331.277 308.711 322.001C298.346 312.177 288.245 302.073 276.054 290.163C265.941 301.03 256.529 311.387 246.838 321.476C239.918 328.681 231.47 332.26 221.378 329.721C202.416 324.95 195.539 302.739 208.794 288.078C217.033 278.965 225.982 270.454 235.05 262.15C240.262 257.378 239.984 254.085 234.863 249.472C226.598 242.03 218.783 234.07 211.007 226.106C199.145 213.957 198.674 199.445 209.544 188.745C220.085 178.368 235.136 179.072 247.062 190.613C254.641 197.947 262.273 205.242 269.534 212.884C274.666 218.285 278.791 219.72 284.556 213.293C291.777 205.243 299.927 198.019 307.746 190.512C319.558 179.172 335.095 178.458 345.33 188.709C356.321 199.715 355.614 214.363 343.359 226.805C334.521 235.779 325.538 244.611 316.661 253.548C316.087 254.126 315.873 255.062 315.294 256.23C325.966 270.752 342.533 280.13 351.617 296.977Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <button className="button equals" onClick={handleEnter}>
                =
            </button>
        </div>
    );
}

export default App;
