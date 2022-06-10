import React, { Fragment, useEffect } from "react";
import { Row } from "reactstrap";
import { Colxx } from "./components/Common/CustomBootstrap";

import _ from "lodash";

//components
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import Footer from "./components/footer";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  clearErrorYoutube,
  startFetchYoutube,
  startFetchComments,
  setSelected
} from "./redux/youtube/actions";

import { YoutubeSelected } from "./redux/youtube/types"
import {RootStore} from "./redux/store";

const App: React.FC = () => {
  const { videos, selectedVideo, selectedComments, loading, loadingComments, error } = useSelector((state:RootStore) => ({
    videos: state.youtube.videos, 
    selectedVideo: state.youtube.selectedVideo, 
    selectedComments: state.youtube.selectedComments, 
    loading: state.youtube.loading, 
    loadingComments: state.youtube.loadingComments, 
    error: state.youtube.error
  }), shallowEqual);

  const dispatch = useDispatch();

  const videoSearchGet = _.debounce((term:string) => { videoSearch(term); }, 300);
  const loadMore = _.debounce(() => { loadMoreComments(); }, 1000);
 
  const videoSearch = (term: string) => {
    dispatch(startFetchYoutube(term));
  }

  useEffect(() => {
    if(videos.length === 0){
      videoSearch('acdc')
    }
    window.addEventListener('scroll', loadMore);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(error){
      alert(error);
      dispatch(clearErrorYoutube());
    }
  }, [error, dispatch]);

  const loadMoreComments = () => {
    const body = document.body,
    html = document.documentElement;

    const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    if ((!loading || !loadingComments) && 
        selectedComments.pageToken && 
      ((window.innerHeight + html.scrollTop) + 1) >= height) {
        dispatch(startFetchComments(selectedVideo.id.videoId, selectedComments.items, selectedComments.pageToken));
    }
  }

  return (
    <Fragment>
      <SearchBar onSearchTermChange={videoSearchGet} />
      <Colxx xxs={12} className="mt-3 mb-3 main-content">
        <Row className="p-0 m-0">
          <VideoDetail video={selectedVideo} selectedComments={selectedComments} loading={loading} loadingComments={loadingComments}/>
          <VideoList
            onVideoSelect={(selectedVideo:YoutubeSelected) => { 
              dispatch(setSelected(selectedVideo))
              dispatch(startFetchComments(selectedVideo.id.videoId, null, ""))
            }}
            videos={videos}
            selectedVideo={selectedVideo}
          />
        </Row>
      </Colxx>
      <Footer />
    </Fragment>
  );
}

export default App;
