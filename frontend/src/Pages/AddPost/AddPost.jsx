
import React, { useEffect } from 'react'
import PrimarySearchAppBar from '../../Components/header'
import Form from '../../Components/Form/Form'
import { Grid, Grow } from '@mui/material'
import { Container } from '@mui/system'
import Post from '../Home/Post/Post'
import { useSelector } from 'react-redux'
import useStyles from '../Home/styles';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import './styles.css'

const AddPost = () => {
  const posts = useSelector((state) => state.postReducers);
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log('posts:',posts);
  return (
    <div>

  <div className="row">
    <div className="column">
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={3}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
    <div className="column">
      <div className='postListing'>
    <Grow in>
    <Grid item xs={12} sm={4} md={6}>
              <Form />
        </Grid>
        </Grow>
      </div> 
    </div>
  </div>
        
    </div>
  )
}

export default AddPost