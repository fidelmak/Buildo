import React, { useState } from "react";
import Footer from "./Footer";

function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState();
  const handleClick = () => {
    const addr = "https://twitter.com/DelisIgib";
    return addr;
  };
  return (
    <div className="app">
      <center>
        <code>
          <section className="contact">
            <div className=" ">
              <h2 className="cont">Contact me</h2>
              <p className="">
                Hi dear, contact me to ask me about anything you have in mind.
              </p>
              <form action="#" className="form">
                <div className="">
                  <div className="">
                    <div>
                      <label id="first_name" for="Firstname" className="">
                        First name
                      </label>
                    </div>
                    <input
                      type="name"
                      id="name"
                      className=""
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="">
                    <div>
                      <label id="last_name" for="LastName" className="">
                        Last name
                      </label>
                    </div>
                    <input
                      type="LastName"
                      id="email"
                      className=""
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <label id="email" for="Email" className="">
                      Email
                    </label>
                  </div>
                  <input
                    type="text"
                    id="message"
                    className=""
                    placeholder="yourname@gmail.com"
                    required
                  />
                </div>
                <div className="">
                  <div>
                    <label for="message" className="">
                      Your message
                    </label>
                  </div>
                  <textarea id="message" rows="6" className=""></textarea>
                </div>
                <br />
                <button
                  id="btn__submit"
                  onClick={handleClick}
                  type="submit"
                  className="btn"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </code>
      </center>
    </div>
  );
}
export default Contact;
