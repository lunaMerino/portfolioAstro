import React, { useState, useEffect } from 'react';
import CardProject from './CardProject.jsx';
import SearchProjects from './SearchProjects.jsx';
import Title from "./Title.jsx";
import Button from "./Button.jsx";


const testMode = process.env.NODE_ENV === 'development'; //true = development
const Projects = () => {
    const [page, setPage] = useState(0);
    const [projects, setProjects] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const url = 'http://localhost:8080/api/v1/projects';


    const fetchProjects = async (p = 0, query = '') => {
        try {
            let fetchUrl = `${url}?size=3&page=${p}`;
            if (query) {
                fetchUrl = `${url}/${query}?size=3&page=${p}`;
            }
            const response = await fetch(fetchUrl);
            const jsonData = await response.json();

            setProjects(jsonData.content);
            setTotalPages(jsonData.totalPages);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    
    useEffect(() => {
        fetchProjects(page, searchQuery);
    }, [page, searchQuery]);

    const handleDelete = async (id) => {
        try {
            await fetch(`${url}/${id}`, { method: 'DELETE' });
            fetchProjects(page, searchQuery);
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <>
        <div className="container mx-auto p-4">
            <div className="flex flex-row justify-between">
                <div></div>
                <div className="ml-60">
                <Title text="Projects"/>
                </div>
                <div className='mr-4'>
                <SearchProjects onSearch={setSearchQuery} />
                </div>
            </div>
            <div className='min-w-full'>
                <ul id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                    projects.map(
                        (project) =>  {
                            console.log(project);

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
                <div className='flex flex-row justify-center mt-4'>
                {
                    page===0 ? (
                        <div className='grid grid-cols-3'>
                            <div className='w-1/3'></div>
                            <div className='flex items-center w-1/3'>
                                <span>{page +1}</span>
                            </div>
                            <div className='w-1/3'>
                                <Button onClick={() => setPage((prevPage) => prevPage + 1)} label="Next"/>
                            </div>
                        </div>
                    ) : page === totalPages -1 ? (
                        <div className='grid grid-cols-3'>
                            <div className='w-1/3'>
                                <Button onClick={() => setPage((prevPage) => prevPage - 1)} label="Previous"/>
                            </div>
                            <div className='flex items-center ml-5 w-1/3'>
                                <span>{page + 1}</span>
                            </div>
                            <div className='w-1/'></div>
                        </div>
                    ) : (
                            <div className='grid grid-cols-3'>
                                <button onClick={() => setPage((prevPage) => prevPage - 1)}>Anterior</button>
                                <div className='flex items-center w-1/3'>
                                    <span>{page + 1}</span>
                                </div>
                                <button onClick={() => setPage((prevPage) => prevPage + 1)}>Siguiente</button>
                            </div>
                    )
                }
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;