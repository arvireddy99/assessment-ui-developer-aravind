import React from "react";
import "./App.css";
function App() {
  const [buttonState, setButtonState] = React.useState<string>("");
  const [currentStatus, setCurrentStatus] = React.useState<string | null>("");
  React.useEffect(() => {
    const buttonDiv = document.getElementById(
      "old"
    ) as unknown as HTMLDivElement;
    setTimeout(() => {
      // Add event listener to it's child button element
      buttonDiv?.firstChild?.addEventListener("click", () => {
        console.log('Herer');
        
        setCurrentStatus("One From old");
      });
      buttonDiv?.childNodes[1]?.addEventListener("click", () => {
        setCurrentStatus("Two From old");
      });
      buttonDiv?.childNodes[2]?.addEventListener("click", () => {
        setCurrentStatus("Three From old");
      });
      
    }, 100);      
    return () => {
      buttonDiv?.firstChild?.removeEventListener("click", () => ({}));
      buttonDiv?.childNodes[1]?.removeEventListener("click", () => ({}));
      buttonDiv?.childNodes[2]?.removeEventListener("click", () => ({}));
    };
  }, []);

  const handelButtonClick = (buttonState: string) => {
    setButtonState(buttonState);
    setCurrentStatus(buttonState.concat(" From new"));
    const buttonDiv = document.getElementById("old") as HTMLDivElement;
    const lastDivElement = buttonDiv.getElementsByTagName("div");
    lastDivElement[0].innerHTML = ` <div class="alert alert-warning" role="alert">
           ${buttonState} From new
          </div>`;
  };
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <h1>New Code</h1>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary btn-"
            type="button"
            onClick={() => handelButtonClick("one")}
          >
            One
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handelButtonClick("two")}
          >
            Two
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handelButtonClick("three")}
          >
            Three
          </button>
        </div>
        <div className="col-md-12 mt-2">
          {currentStatus && (
            <div className="alert alert-success" role="alert">
              {currentStatus}
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
