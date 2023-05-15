import { useRef, useState, useEffect } from "react";

export default function Modal() {
  const ref = useRef();
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  useEffect(() => {
    setTimeout( () => {
      ref.current.click();
      // setJoke({ setup: "", punchline: "" });
       // eslint-disable-next-line 
    }, 7000);
  }, []);


  let jokemaker = async () => {
    let Joke = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokecontent = await Joke.json();
    setJoke({ setup: jokecontent.setup, punchline: jokecontent.punchline });
  };

  let handleOnClose = () => {
    setJoke({ setup: "", punchline: "" });
    setTimeout(() => {
      ref.current.click();
    }, 7000);
  };
  

  return (
    <>
    <audio src="https://drive.google.com/file/d/1AaEmlBp9-DlcEIVWRd2diiw4Ur2dkcke/view?usp=share_link" autoPlay>cannot displey</audio>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleOnClose}
              ></button>
            </div>
            <div className="modal-body">{joke.setup}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
              <audio src="https://www.youtube.com/watch?v=0Gc3nvmMQP0" autoPlay> this does not supports </audio>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleOnClose}
              ></button>
            </div>
            <div className="modal-body">{`${joke.punchline}`}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
              <audio src="https://www.youtube.com/watch?v=0Gc3nvmMQP0" autoPlay> this does not supports </audio>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
        onClick={jokemaker}
      >
        Open first modal
      </button>
    </>
  );
}
