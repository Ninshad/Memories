
import React from 'react'
import PrimarySearchAppBar from '../../Components/header'
import Form from '../../Components/Form/Form'
import { Grid, Grow } from '@mui/material'
import { Container } from '@mui/system'

const AddPost = () => {
  return (
    <div>
        
        <Grow in>
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
              <h1>Hi</h1>
        </Grid>
        <Grid item xs={12} sm={4}>
              <Form />
        </Grid>
        </Grid>
        </Container>
        </Grow>
        
    </div>
  )
}

export default AddPost