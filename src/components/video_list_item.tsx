import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "./Common/CustomBootstrap";

import { YoutubeSelected } from "../redux/youtube/types"

interface Props {
  className?: string;
  onVideoSelect: (video: YoutubeSelected)  => void; 
  video: YoutubeSelected;
  selectedVideo: YoutubeSelected;
}

const VideoListItem:React.FC<Props> = ({ video, onVideoSelect, selectedVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className={`list-group-item ${video.id.videoId === selectedVideo.id.videoId ? 'active-item' : ""}`}>
      <Colxx xxs={12} className="video-list media">
        <Row>
          <Colxx xxs={4} className="media-left">
            <img className="media-object" alt="video thumbnail" src={imageUrl} />
          </Colxx>
          <Colxx xxs={8} className="media-body">
            <div className="media-heading text-light text-truncate">{video.snippet.title}</div>
            <div className="media-subheading text-muted">{video.snippet.title}</div>
          </Colxx>
        </Row>
      </Colxx>
    </li>
  );
};

export default VideoListItem;
