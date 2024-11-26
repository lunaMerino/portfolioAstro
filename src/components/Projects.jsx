import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [page, setPage] = useState(1);  // Empezamos en la página 1
    const [projects, setProjects] = useState([]);  // Estado sin tipos
    const [totalPages, setTotalPages] = useState(1); // Total de páginas que la API proporciona
    const url = 'http://localhost:8080/api/v1/projects';  // Cambia la URL si es necesario

    // Efecto para cargar los proyectos cada vez que cambie la página
    useEffect(() => {
        fetchProjects(page);
    }, [page]);

    const fetchProjects = async (p) => {
        const response = await fetch(`${url}?page=${p - 1}&size=3`); // Página empieza desde 0 en muchas APIs
        const data = await response.json();
        setProjects(data.content);  // Suponiendo que la API devuelve un objeto con una propiedad 'content'
        setTotalPages(data.totalPages); // Si la API devuelve el total de páginas
    };

    const handleDelete = async (id) => {
        // Lógica para eliminar un proyecto
        await fetch(`${url}/${id}`, { method: 'DELETE' });
        fetchProjects(page);  // Recargar los proyectos después de la eliminación
    };

    return (
        <div class="container mx-auto p-4">
            {/* Lista de proyectos */}
            <ul id="projects" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <li key={project.projectId} class="bg-white shadow-lg rounded-lg p-4">
                        <div>
                            <h3 class="text-xl font-semibold">{project.title}</h3>
                            <p class="text-gray-700">{project.description}</p>
                            <button
                                onClick={() => handleDelete(project.projectId)}
                                class="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Paginación
            <div class="flex justify-center items-center mt-6 space-x-4">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page <= 1}
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    Anterior
                </button>
                <span class="text-xl font-semibold">{page}</span>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPages}
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    Siguiente
                </button>
            </div>
             */}
        </div>
    );
};

export default Projects;
