import React from "react";

function About(props) {
    return (
      <>
        <div className="container">
          <div className="accordion" id="accordionExample">
            <div
              className="accordion-item"
              style={{
                backgroundColor: props.mode === "dark" ? "#202124" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{
                    backgroundColor:
                      props.mode === "dark" ? "#202124" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                    border: "1px solid white",
                  }}
                >
                  Analyze Your text
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Need to change something from lowercase to uppercase? Count
                  the Words and Characters? Remove spaces? This can help. Just type some
                  text into the box and click on the buttons to change things
                  around.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;
