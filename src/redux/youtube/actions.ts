import {Dispatch} from "redux";
import axios from 'axios';

import { API_KEY, SEARCH, COMMENTS, HEADERS } from '../../constants/defaultValues';

import {
  ACTION_YOUTUBE,
  CLEAR_YOUTUBE,
  CLEAR_ERROR_YOUTUBE,
  FETCH_YOUTUBE,
  ERROR_FETCH_YOUTUBE,
  ACTION_FETCH_COMMENTS,
  FETCH_COMMENTS,
  ERROR_FETCH_COMMENTS,
  SET_SELECTED_VIDEO,
  YoutubeDispatchTypes,
  YoutubeSelected,
} from './types';

/****************************    START CLEAR STATES YOUTUBE   ******************************************/
export const clearYoutube = () => ({
  type: CLEAR_YOUTUBE
});

export const clearErrorYoutube = () => ({
  type: CLEAR_ERROR_YOUTUBE
});
/****************************    END CLEAR STATES YOUTUBE   ******************************************/

/****************************    START FETCH SEARCH YOUTUBE   ******************************************/

export const startFetchYoutube = (term: string) => {
  const headers = HEADERS;

  return (dispatch: Dispatch<YoutubeDispatchTypes | any>) => {
    dispatch({
      type: ACTION_YOUTUBE
    })  
  
    axios.get(`${SEARCH}?part=snippet&q=${term}&maxResults=20&type=video&key=${API_KEY}`, { headers })
      .then(res => {
        const items = res.data.items;
  
        startFetchComments(items[0].id.videoId, null, "")
  
        dispatch({
          type: FETCH_YOUTUBE,
          payload: items
        })
  
        dispatch({
          type: SET_SELECTED_VIDEO,
          payload: items[0]
        })
  
        dispatch(startFetchComments(items[0].id.videoId, null, ""))
        
      }).catch(error => {
          dispatch({
            type: ERROR_FETCH_YOUTUBE,
            payload: error.response.data.error.message
          })
      });
  }
};

/****************************    END FETCH SEARCH YOUTUBE   ******************************************/

/****************************    START FETCH COMMENTS YOUTUBE VIDEO   ******************************************/

export const startFetchComments = (video_id: YoutubeSelected, oldComments:any, pageToken:string = "")  => {
    const headers = HEADERS;

    return (dispatch: Dispatch<YoutubeDispatchTypes | any>) => {
      dispatch({
        type: ACTION_FETCH_COMMENTS
      })
  
      axios.get(`${COMMENTS}?part=snippet%2Creplies&pageToken=${pageToken}&order=relevance&videoId=${video_id}&key=${API_KEY}`, { headers })
      .then(res => {
        const items = res.data.items;
        const token = res.data.nextPageToken;

        console.log(token)
  
        if(pageToken){
          let newComments = [...oldComments];
  
          const children = newComments.concat(items);
  
          dispatch({
            type: FETCH_COMMENTS,
            payload: {pageToken: token, items: children}
          })
        }else{
          console.log(token)
          dispatch({
            type: FETCH_COMMENTS,
            payload: {pageToken: token, items: items}
          })
        }
      }).catch(error => {
        dispatch({
          type: ERROR_FETCH_COMMENTS,
          payload: error.response.data.error.message
        })
      });
    }
};

/****************************    END FETCH COMMENTS YOUTUBE VIDEO   ******************************************/


export const setSelected = (video:YoutubeSelected) => ({
  type: SET_SELECTED_VIDEO,
  payload: video
})









