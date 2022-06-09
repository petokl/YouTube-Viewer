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
    GetComments,
    YoutubeSelected
} from './types';

interface DefaultStateI {
    videos: Array<any>,
    selectedVideo: YoutubeSelected | any,
    selectedComments: GetComments,
    loading: boolean,
    loadingComments: boolean,
    error: string
}

const INIT_STATE:DefaultStateI = {
    videos: [],
    selectedVideo: null,
    selectedComments: { pageToken: null, items: null},
    loading: true,
    loadingComments: false,
    error: ''
};

const youtube = (state: DefaultStateI = INIT_STATE, action: YoutubeDispatchTypes) => {
    switch (action.type) {
        //Youtube Videos Actions
        case ACTION_YOUTUBE:
            return { ...state, loading: true, error: '' };
        case CLEAR_YOUTUBE:
            return { ...state, ...INIT_STATE.videos, selectedVideo: INIT_STATE.selectedVideo, selectedComments: INIT_STATE.selectedComments, error: '' };
        case CLEAR_ERROR_YOUTUBE:
            return { ...state, error: '' };
        case FETCH_YOUTUBE:
            return { ...state, loading: false, videos: action.payload, error: '' };
        case ERROR_FETCH_YOUTUBE:
            return { ...state, loading: false, videos: INIT_STATE.videos, error: action.payload };
        //Comments Actions
        case ACTION_FETCH_COMMENTS:
            return { ...state, loadingComments: true, error: '' };
        case FETCH_COMMENTS:
            return { ...state, loadingComments: false, selectedComments: action.payload, error: ''  };
        case ERROR_FETCH_COMMENTS:
            return { ...state, loadingComments: false, error: '' };

        //Set Selected Youtube Video
        case SET_SELECTED_VIDEO:
            return { ...state, selectedVideo: action.payload };
        default: return state;
    }
}

export default youtube;
