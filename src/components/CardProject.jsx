import React from 'react';

const CardProject = ({ props, test = false, onDelete }) => (
  <li className="bg-white shadow-lg rounded-lg p-4">
    <div>
      <img src={props.picture} alt={props.projectName} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold">{props.projectName}</h3>
      <a href={props.repositoryUrl} className="text-blue-500 hover:underline">{props.repositoryUrl}</a>
      <a href={props.demoUrl} className="text-blue-500 hover:underline">{props.demoUrl}</a>
      <p className="text-gray-700">{props.description}</p>
      {test && (
      <button
        onClick={onDelete}
        className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Eliminar
      </button>
      )}
    </div>
  </li>
);

export default CardProject;