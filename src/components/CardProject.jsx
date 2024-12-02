import React from 'react';
import Button from './Button.jsx';
const CardProject = ({ props, test = false, onDelete }) => (
  <li className="bg-white shadow-lg rounded-md p-4  h-[500px] flex flex-col">
    <div
      className="w-84 h-80 bg-cover bg-center mb-4"
      style={{ backgroundImage: `url(${props.picture})` }}
    ></div>

    <div className="flex flex-col items-start space-y-2">
      <h3 className="text-xl font-poppins italicfont-semibold text-center">{props.projectName}</h3>
      <div className="flex space-x-2">
      {props.repositoryUrl && (
        <a
          href={props.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/gitHub.png"
            alt="Repositorio GitHub"
            className="w-6 h-6"
          />
        </a>
      )} 

      {props.demoUrl && (
        <a
          href={props.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="../../public/figmaLogo.png"
            alt="Demo Figma"
            className="w-6 h-6"
          />
        </a>
      )}

      </div>
      <p className="text-gray-700 text-sm text-center">{props.description}</p>
      {test && (
        <Button
          onClick={onDelete}
          label="Delete"/>
      )}
    </div>
  </li>
);

export default CardProject;
