import React, { useEffect, useState } from 'react'
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import PrimarySearchAppBar from '../../Components/header';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postActions';

const Home = () => {
  const posts = useSelector((state) => state.postReducers);
  const classes = useStyles();
  console.log('POSTS:',posts);

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
    
    <h1>Hello Home Page</h1>
    <CircularProgress />
    </>
  )
}

export default Home