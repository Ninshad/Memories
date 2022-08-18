import axios from 'axios';
import * as api from '../api/index';
import { CREATE, FETCH_ALL, LIKE, DELETE, UPDATE } from '../constants/actionTypes';

export const createPost = (post) => async (dispatch) => {
   try {
    const {data} = await api.createPost(post);
    dispatch({ type:CREATE, payload:data })

   } catch (error) {
    console.log(error.message);
   } 
}

export const getPosts = () => async (dispatch) =>{
   try{
      const {data} = await api.fetchPost();
      dispatch({type: FETCH_ALL, payload: data})
      console.log('ActionFetch:',data);
   } catch (error) {
      console.log(error.message);
   }
}

export const likePost = (id) => async (dispatch) => {
   try {
     const { data } = await api.likePost(id);
 
     dispatch({ type: LIKE, payload: data });
   } catch (error) {
     console.log(error.message);
   }
 };

 export const deletePost = (id) => async (dispatch) => {
   try {
      await axios.delete(`http://localhost:5000/posts/${id}`)

      dispatch({ type: DELETE, payload: id });
   } catch (error) {
      console.log(error.message);
   }
 }

 export const updatePost = (currentId, postData) => async (dispatch) =>{
   try{
      const data = await api.updatePost(currentId, postData);
      dispatch({type: UPDATE, payload: data})
   }
   catch (error){
      console.log(error.message);
   }
 }