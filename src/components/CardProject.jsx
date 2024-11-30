import React from 'react';
const CardProject = ({ props, test = false, onDelete }) => (
  <li className="bg-white shadow-lg rounded-md p-4  h-[500px] flex flex-col">
    <div
      className="w-84 h-80 bg-cover bg-center mb-4"
      style={{ backgroundImage: `url(${props.picture})` }}
    ></div>

    <div className="flex flex-col items-start space-y-2">
      <h3 className="text-xl font-semibold text-center">{props.projectName}</h3>
      <div className="flex space-x-2">
      {props.repositoryUrl && (
        <a
          href={props.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="../../public/gitHub.png"
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
        <button
          onClick={onDelete}
          className="mt-2 bg-color7 text-white py-2 px-4 rounded hover:bg-color5 hover:text-blackish"
        >
          Eliminar
        </button>
      )}
    </div>
  </li>
);

export default CardProject;
