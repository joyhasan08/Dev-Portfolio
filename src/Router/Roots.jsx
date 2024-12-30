import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Roots = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            
        ]
    }
]);

export default Roots;