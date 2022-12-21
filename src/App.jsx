import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile } from './pages';
import NavBar from './components/NavBar/NavBar.jsx';

import useStyles from './styles';

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <div className={classes.toolbar} />
            <main className={classes.content}>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movie/:id" element={<MovieInformation />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/actors/:id" element={<Actors />} />

                </Routes>
            </main>
        </div>
    );
}

export default App;