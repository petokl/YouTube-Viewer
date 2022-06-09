import React from "react";
import { Colxx } from "./Common/CustomBootstrap";
import VideoComments from "./video_coments";
import { YoutubeSelected } from "../redux/youtube/types"

interface Props {
  className?: string;
  selectedComments: {items: any[] | null, pageToken: string | null};
  loadingComments: Boolean;
  loading: Boolean;
  video: YoutubeSelected | null
}

const VideoDetail:React.FC<Props> = ({ video, loading, selectedComments, loadingComments }) => {
  return (loading || !video ?
    <Colxx xxs={12} md={8} className="loading-container">
        <div className="loading"></div>
    </Colxx>
    :
    <Colxx xxs={12} md={8} className="video-detail">
      <Colxx xxs={12} className={'mb-2'}>
        <iframe
          title={video.snippet.title}
          width={'100%'}
          height={600}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </Colxx>
      <Colxx xxs={12} className="details">
        <div className="label text-light text-truncate">{video.snippet.title}</div>
        <div className="desc text-muted text-truncate">{video.snippet.description}</div>
      </Colxx>
      <Colxx xxs={12} className="comments mt-5 mb-5">
        <VideoComments 
          loadingComments={loadingComments}
          selectedComments={selectedComments} 
        />
      </Colxx>
    </Colxx>
  );
};

export default VideoDetail;
