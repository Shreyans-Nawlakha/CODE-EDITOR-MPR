import React from "react";
import Landing from "./Landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/editor">Code Editor !!</Link>
          </li>
        </ul>
        <Routes>
          <button>
            <Route exact path="/editor" element={<Landing />}></Route>Code
            Editor!!
          </button>
        </Routes>
      </Router>
    </div>
  );
}
// import React from "react";
// import Landing from "./Landing";

// export default class Homepage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to the Code Editor</h1>
//         <button></button>
//       </div>
//     );
//   }
// }
