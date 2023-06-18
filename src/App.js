
import { useEffect, useState } from "react";
import CommandPanel from "./CommandPanel/CommandPanel";
import Context from "./Context";


function App() {

  const [mode, setMode] = useState(null);
  // const [mode, setMode] = useState("Text")

  const [jsp, setJsp] = useState("");
  const [jspObjs, setJspObjs] = useState([]);

  const changeMode = (mode) => {
    switch (mode) {
      case "Text":
        setMode("Text");
        break;
      case "H2":
        setMode("H2");
        break;
    }
  };

  const addJspObj = (jspObj) => {
    setJspObjs([
      ...jspObjs,
      jspObj,
    ])
  };

  const createJsp = () => {
    var tmpJsp = "";
    jspObjs.map((v, i) => {
      var attrJsp = "";
      if (v.attrs) {
        const attrs = JSON.parse(v.attrs)
        attrs.map((v, i) => {
          if ((v.name != "") && (v.val != "")) attrJsp += ` ${v.name}="${v.val}"`
        })
      }
      switch (v.mode) {
        case "Text":
          tmpJsp += `<p>${v.text}</p>`;
          break;

        case "H2":
          tmpJsp += `<h2${attrJsp}>${v.text}</h2>`;
          break;
      }
      tmpJsp += "\n";
    })
    setJsp(tmpJsp);
  };

  const printJspObjs = () => {
    console.log('jspObjs: ', jspObjs);
  }

  useEffect(() => {
    console.log('jsp: ', jsp);
  }, [jsp]);

  return (
    <div>
      <Context.Provider
        value={{
          mode: mode,
          changeMode: changeMode,
          addJspObj: addJspObj,
          createJsp: createJsp,
        }}
      >
        <CommandPanel/>
      </Context.Provider>
      <button onClick={() => printJspObjs()}>
        printJspObjs
      </button>
    </div>
  );
}

export default App;
