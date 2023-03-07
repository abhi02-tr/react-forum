import React, { useState } from 'react';
import { Nav } from './index';

function Home() {
    const [thread, setThread] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ thread });
        setThread("");
    };

    return (
        <>
            <Nav />
            <main className='home container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-3'></div>
                    <div className='col'>
                        <h2 className='homeTitle ps-2'>Create a Thread</h2>
                        <form className='homeForm mt-2' onSubmit={handleSubmit}>
                            <div className='home__container container mt-3'>
                                <label htmlFor='thread text-center' className='form-label'>Title / Description</label>
                                <div className='row g-0'>
                                    <div className='col-md-8 '>
                                        <input
                                            type='text'
                                            name='thread'
                                            className='w-100 form-control'
                                            required
                                            value={thread}
                                            onChange={(e) => setThread(e.target.value)}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <button className='homeBtn btn btn-primary'>CREATE THREAD</button>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                    <div className='col-3'></div>
                </div>
            </main>
        </>
    )
}

export default Home
