import React, { useState, useEffect } from 'react';

import CardProject from './CardProject.jsx';


const testMode = process.env.NODE_ENV === 'development'; //true = development
const Projects = () => {
    const [page, setPage] = useState(0);
    const [projects, setProjects] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const url = 'http://localhost:8080/api/v1/projects';

    useEffect(() => {
        fetchProjects(page);
    }, [page]);


    const fetchProjects = async (p = 0) => {
        try {
            const response = await fetch(url + '?size=3' + '&page=0' + p);
            const jsonData = await response.json();
                         
            setProjects(jsonData.content);
            setTotalPages(jsonData.totalPages);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${url}/${id}`, { method: 'DELETE' });
            fetchProjects(page);
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <>
        <div className="container mx-auto p-4 pl-60">
            <ul id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                projects.map(
                    (project) =>  {
                        return (
                            <CardProject
                                key={project.projectId}
                                props={project}
                                test={testMode}
                                onDelete={() => handleDelete(project.projectId)}
                            />
                        );
                    })}
            </ul>
            {
                page===0 ? (
                    <div>
                        <span>{page}</span>
                        <button onClick={() => setPage((prevPage) => prevPage + 1)}>Siguiente</button>
                    </div>
                ) : page === totalPages -1 ? (
                    <div>
                        <button onClick={() => setPage((prevPage) => prevPage - 1)}>Anterior</button>
                        <span>{page}</span>
                    </div>
                ) : (
                        <div>
                            <button onClick={() => setPage((prevPage) => prevPage - 1)}>Anterior</button>
                            <span>{page}</span>
                            <button onClick={() => setPage((prevPage) => prevPage + 1)}>Siguiente</button>
                        </div>
                )
            }
        </div>
        </>
    );
};

export default Projects;
