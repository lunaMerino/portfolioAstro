
import React, { useState } from "react";

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
      <div id="contact" className="flex justify-center">
        <form
          action="mailto:marialuna.garcia-arcicollar@a.vedrunasevillasj.es"
          method="get"
          className="w-3/5 h-3/5 mt-2"
        >
          <fieldset className="p-4 border border-primary">
            <legend className="text-light border border-primary px-2 py-1">
              Contact me
            </legend>

            <div id="divName" className="flex flex-col mt-1">
              <label for="inputName" className="text-primary mb-2">Name:</label>
              <input
                type="text"
                id="inputName"
                className={`border rounded-md p-2 text-info bg-neutral-700 ${!validName ? 'border-red-500' : 'border-green-500'}`}
                name="inputName"
                value={name}
                onInput={validateName}
                required
              />
              {!validName && <p className="text-red-500">Name must start with a capital letter</p>}
            </div>

            <div id="divEmail" className="flex flex-col mt-1">
              <label for="inputEmail" className="text-primary mb-2">Email:</label>
              <input
                type="email"
                id="inputEmail"
                className={`border rounded-md p-2 text-info bg-neutral-700 ${!validEmail ? 'border-red-500' : 'border-green-500'}`}
                name="inputEmail"
                value={email}
                onInput={validateEmail}
                required
              />
              {!validEmail && <p className="text-red-500">Please enter a valid email</p>}
            </div>

            <div id="divMessage" className="flex flex-col mt-2">
              <label for="message" className="text-primary mb-2">Message:</label>
              <textarea
                id="message"
                className={`border rounded-md p-2 text-info bg-neutral-700 ${!validMessage ? 'border-red-500' : 'border-green-500'}`}
                name="message"
                rows="5"
                value={message}
                onInput={validateMessage}
                placeholder="Your message here..."
                required
              ></textarea>
              {!validMessage && <p className="text-red-500">Message must be at least 20 characters</p>}
            </div>

            <div className="flex justify-center mt-2">
              <input
                type="submit"
                value="Send"
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
                disabled={!isFormValid}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  };

  export default ContactForm;


