import React, { useEffect, useState } from 'react'
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';


import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postActions';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const posts = useSelector((state) => state.postReducers);
  const classes = useStyles();
  console.log('POSTS:',posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
    {!posts.length ?
    <CircularProgress /> :
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    }  
    </>
  )
}

export default Home