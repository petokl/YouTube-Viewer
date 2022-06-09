import React from "react";
import { Colxx } from "./Common/CustomBootstrap";
import VideoListItem from "./video_list_item";
import { YoutubeSelected } from "../redux/youtube/types"

interface Props {
  className?: string;
  onVideoSelect: (video: YoutubeSelected)  => void; 
  videos: any[];
  selectedVideo: YoutubeSelected
}

const VideoList:React.FC<Props> = ({videos, onVideoSelect, selectedVideo}) => {
  const videoItems = videos.map((video: YoutubeSelected) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
        selectedVideo={selectedVideo}
      />
    );
  });

  return <Colxx xxs={12} md={4} className="list-container p-0">
    <ul className="list-group">{videoItems}</ul>
  </Colxx>;
};

export default VideoList;
