import React, {useState} from 'react'
import {Box} from "@mui/material";
import HeroBanner from './HeroBanner';
import SearchExercise from './SearchExercises';
import Exercises from './Exercises';

const Home =() =>{
    return <>
    <Box>
    <HeroBanner />
    <SearchExercise />
    <Exercises />

    </Box>
    </>
}

export default Home