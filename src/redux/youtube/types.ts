/**************** YOUTUBE *********************/

export const ACTION_YOUTUBE = "ACTION_YOUTUBE";
export const CLEAR_YOUTUBE = "CLEAR_YOUTUBE";
export const CLEAR_ERROR_YOUTUBE = "CLEAR_ERROR_YOUTUBE";

export const FETCH_YOUTUBE = "FETCH_YOUTUBE";
export const ERROR_FETCH_YOUTUBE = "ERROR_FETCH_YOUTUBE";

export const ACTION_FETCH_COMMENTS = "ACTION_FETCH_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const ERROR_FETCH_COMMENTS = "ERROR_FETCH_COMMENTS";

export const SET_SELECTED_VIDEO = "SET_SELECTED_VIDEO";

//Types 
export type YoutubeSelected = {
    id: any,
    etag: string,
    snippet: any
}

export type GetComments = {
    pageToken: string | null,
    items: Array<any> | null
}

//Intefaces
//For Youtube
export interface YoutubeAction {
    type: typeof ACTION_YOUTUBE
}

export interface YoutubeClear {
    type: typeof CLEAR_YOUTUBE
}

export interface YoutubeClearError {
    type: typeof CLEAR_ERROR_YOUTUBE
}

export interface Youtube {
    type: typeof FETCH_YOUTUBE,
    payload: Array<any>
}

export interface YoutubeError {
    type: typeof ERROR_FETCH_YOUTUBE,
    payload: string
}


//For Comments
export interface CommentsAction {
    type: typeof ACTION_FETCH_COMMENTS
}

export interface Comments {
    type: typeof FETCH_COMMENTS,
    payload: GetComments
}


export interface CommentsError {
    type: typeof ERROR_FETCH_COMMENTS,
    payload: string
}

//For Setters
export interface SetSelected {
    type: typeof SET_SELECTED_VIDEO,
    payload: YoutubeSelected
}

export type YoutubeDispatchTypes = YoutubeAction | YoutubeClear | YoutubeClearError | Youtube | YoutubeError | CommentsAction | Comments | CommentsError | SetSelected




