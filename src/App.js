import ReducerTutor from "./page/ReducerTutor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseRef from "./page/UseRef";
import UseLayoutEffect from "./page/UseLayoutEffect";
import ImperativeHandle from "./page/ImperativeHandle";
import Context from "./page/Context";
import Memo from "./page/Memo";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ReducerTutor />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/imperativehandle" element={<ImperativeHandle />} />
        <Route path="/context" element={<Context />} />
        <Route path="/usememo" element={<Memo />} />
      </Routes>
    </Router>
  );
}

export default App;
