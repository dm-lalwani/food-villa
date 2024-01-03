import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => (     // Normal JS Function
    <h1>
        Good Morning!!
    </h1>
);
const heading2 = (      // React element/ normal variable
    <h1>
        Namaste from JSX!!
    </h1>
);
const HeaderComponent = function() {         // Functional Component
    return(
        <div>
            <Title />  {/*Title()*/}
            {heading2}
            <h2>Namaste from functional component!!</h2>
        </div>
    );
};
// We can have only one root and one render method throughtout the app
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// passing a react element into the root
// root2.render(heading2);
root2.render(<HeaderComponent />);