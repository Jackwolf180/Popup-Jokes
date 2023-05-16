import { useRef, useState, useEffect } from "react";
import sound from "../Components/media/file.mp3";
export default function Modal() {
  const ref = useRef();
  const refaudio = useRef();
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  let audio = new Audio(sound);
  useEffect(() => {
    refaudio.current.click();
    setTimeout(() => {
      ref.current.click();
      refaudio.current.click();
      setJoke({ setup: "", punchline: "" });
    }, 4000);
    // eslint-disable-next-line
  }, []);

  let audioPlayer = () => {
     let promise =audio.play()
     console.log(promise);
     if(promise){
      promise.then(()=>{

      }).catch((e)=>{
        console.log(e)
      })
     }
  };

  let jokemaker = async () => {
    let Joke = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokecontent = await Joke.json();
    // refaudio.current.click();
    setJoke({ setup: jokecontent.setup, punchline: jokecontent.punchline });
  };

  let handleOnClose = () => {
    setJoke({ setup: "", punchline: "" });
    setTimeout(() => {
      refaudio.current.click();
      ref.current.click();
    }, 10000);
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
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Santa' Question
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
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                {"Santa's Reply &#129315"}
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
        onClick={jokemaker}
      >
        Open first modal
      </button>
      <button className="d-none" ref={refaudio} onClick={audioPlayer}>
        audioPlayer
      </button>
    </>
  );
}
