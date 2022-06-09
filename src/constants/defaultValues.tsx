/* 
Google Youtube Api Key
*/
export const API_KEY: string = '';

/* 
Base urls for api youtube
*/
export const BASEURLAPI: string = "https://www.googleapis.com/youtube/v3";

//SEARCH URL
export const SEARCH: string = `${BASEURLAPI}/search`;

//COMMENTS THREADS URL
export const COMMENTS: string = `${BASEURLAPI}/commentThreads`;

//Headers for applications requests
export const HEADERS: any = {
  'Accept': 'application/json'
};

