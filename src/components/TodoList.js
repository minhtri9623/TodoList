import React, { useState } from 'react'

export default function TodoList() {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) || [];


    const [input, setInput] = useState('');
    const [jobs, setJobs] = useState(storageJobs);


    const handelSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, input]
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs)
            console.log(jsonJobs)

            return newJobs;
        })
        setInput('')
    }

    const handelDelete = (index) => {
        setJobs(prev => {
            const newJobs = [...prev]
            newJobs.splice(index, 1);
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs);

            return newJobs;
        })
    }


  return (
    <div>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={handelSubmit}>Add</button>
        <ul>
            {jobs.map((job, index) => (
                <li key={index}>
                    {job}
                    <button className='delete' onClick={() => handelDelete(index)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
