import * as api from '../api/index';
import { CREATE, FETCH_ALL, LIKE } from '../constants/actionTypes';

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