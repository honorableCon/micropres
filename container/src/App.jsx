import React from "react";
import ReactDOM from "react-dom";
import mountHeader from "app2/mountHeader";
import mountNews from "app1/mountNews";

import "./index.scss";
import Content from "./Content";

const App = () => {
  const headerRef = React.useRef(null);
  const newsRef = React.useRef(null);
  React.useEffect(() => {
    mountHeader(headerRef.current);
    mountNews(newsRef.current);
  }, []);
  return (
    <div>
      <div ref={headerRef}></div>
      <div className="flex justify-between mt-5 mx-auto max-w-6xl">
        <div className="text-3xl">
          <Content/>
        </div>
        <div ref={newsRef}></div>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
