import { useState } from "react";
import useOutsideClick from ".";




export default function UseOnClickOutsideTest() {
    
    const [showContent, setShowContent] = useState(false)
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    
    return (
      <div ref={ref}>
            {showContent ? <div>
                <h1>This is a random content</h1>
                <p>Please click outside of this to close this it wont close if you click inside of this content</p>
        </div> : <button onClick={() => setShowContent(true)}>Show Content</button>}
      </div>
    );
}