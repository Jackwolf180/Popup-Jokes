import { useRef, useState, useEffect } from "react";
import sound from "../Components/media/file.mp3";
export default function Modal(props) {
  const ref = useRef();
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  let audio = new Audio(sound);
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log("useeffect is callled now");
    let timer = setTimeout(() => {
      ref.current.click();
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  let activate = async () => {
    console.log("activate is callled now");
    let Joke = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokecontent = await Joke.json();
    let promise = audio.play();
    if (promise) {
      promise
        .then(() => {})
        .catch((e) => {
          console.log(e);
        });
    }
    setJoke({ setup: jokecontent.setup, punchline: jokecontent.punchline });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              backgroundColor: props.mode ? "#3d36a3" : "white",
              color: !props.mode ? "black" : "white",
            }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Santa' Question
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setcounter(counter + 1);
                }}
              ></button>
            </div>
            <div className="modal-body">{joke.setup}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Santa's Reply
              </button>
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
          <div
            className="modal-content"
            style={{
              backgroundColor: props.mode ? "#3d36a3" : "white",
              color: !props.mode ? "black" : "white",
            }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                {"Santa's Reply &#129315"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setcounter(counter + 1);
                }}
              ></button>
            </div>
            <div className="modal-body">{`${joke.punchline}`}</div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back To Question
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
        onClick={activate}
      >
        Activate
      </button>
    </>
  );
}
