import { useContext } from "react";
import { MainColor } from "./App";

function Content() {
    const { actualColor } = useContext(MainColor);

    return (
        <div className="content">
            <div className="control-panel">
                <div>
                    
                </div>
            </div>
            <div className="typing-panel">

            </div>
        </div>
    );
}

export default Content;