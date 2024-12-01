
import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);

    const validateName = (e) => {
      const value = e.target.value;
      const regex = /^[A-Z][a-z]+$/;
      setName(value);
      setValidName(regex.test(value));
    };


    const validateEmail = (e) => {
      const value = e.target.value;
      const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      setEmail(value);
      setValidEmail(regex.test(value));
    };

    const validateMessage = (e) => {
      const value = e.target.value;
      setMessage(value);
      setValidMessage(value.length >= 20);
    };

    const isFormValid = validName && validEmail && validMessage;

    return (
      <div id="contact" className="flex flex-col items-center justify-center mt-40 mb-20">
        <Title text="Contact me"/>
        <form
          action="mailto:marialuna.garcia-arcicollar@a.vedrunasevillasj.es"
          method="get"
          className="w-3/5 h-3/5 mt-2"
        >
          <fieldset className="p-4">

            <div id="divName" className="flex flex-col mt-1">
              <input
                type="text"
                id="inputName"
                className={`border rounded-sm p-2 text-info bg-color2 placeholder:font-poppins placeholder:italic placeholder-color5`}
                name="inputName"
                value={name}
                onInput={validateName}
                placeholder="Name"
                required
              />
              {!validName && <p className="text-red-500">Name must start with a capital letter</p>}
            </div>

            <div id="divEmail" className="flex flex-col mt-1">
              <input
                type="email"
                id="inputEmail"
                className={`border rounded-sm p-2 text-info bg-color2 placeholder:font-poppins placeholder:italic placeholder-color5`}
                name="inputEmail"
                value={email}
                onInput={validateEmail}
                placeholder="Email"
                required
              />
              {!validEmail && <p className="text-red-500">Please enter a valid email</p>}
            </div>

            <div id="divMessage" className="flex flex-col mt-2">
              <textarea
                id="message"
                className={`border rounded-sm p-2 text-info bg-color2 placeholder:font-poppins placeholder:italic placeholder-color5`}
                name="message"
                rows="5"
                value={message}
                onInput={validateMessage}
                placeholder="Message"
                required
              ></textarea>
              {!validMessage && <p className="text-red-500">Message must be at least 20 characters</p>}
            </div>

            <div className="flex mt-2">
              <Button label="Send Message" disabled={!isFormValid}/>
            </div>
          </fieldset>
        </form>
      </div>
    );
  };

  export default ContactForm;


