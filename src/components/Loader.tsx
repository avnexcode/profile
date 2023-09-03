import "./css/Loader.css";
export function Loader() {
  return (
    <>
      <div id="page" className="bg-white dark:bg-slate-700">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          {/* <div id="h3">loading</div> */}
        </div>
      </div>
    </>
  );
}
