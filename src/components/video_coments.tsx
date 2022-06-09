import React from "react";
import { Spinner } from "reactstrap";
import { Colxx } from "./Common/CustomBootstrap";

import { CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css';

interface Props {
  className?: string;
  selectedComments: {items: any[] | null, pageToken: string | null};
  loadingComments: Boolean;
}

const VideoComments: React.FC<Props> = ({ selectedComments, loadingComments }) => {

  /**
   * Function that returns a list of comments with specific format
   */
   const comments: any = () => {
    let comments:any[] = [];
    
    if(selectedComments.items){
      selectedComments.items.forEach(item => {
        const comment = item.snippet.topLevelComment;
        
        let replies:any[] = [];

        if(item.replies){
          const comment_replies = item.replies.comments;

          comment_replies.forEach((rep: { snippet: any; etag: string; id: string; }) => {
            const replay = rep.snippet;

            replies.push({
              userId: rep.etag,
              comId: rep.id,
              fullName: replay.authorDisplayName,
              userProfile: replay.authorChannelUrl,
              text: replay.textOriginal,
              avatarUrl: replay.authorProfileImageUrl
            });
          });
        }

        comments.push({
          userId: comment.etag,
          comId: comment.id,
          fullName: comment.snippet.authorDisplayName,
          userProfile: comment.snippet.authorChannelUrl,
          text: comment.snippet.textOriginal,
          avatarUrl: comment.snippet.authorProfileImageUrl,
          replies: replies
        });
      });
    }

    return comments;
  }

  return (
    <>
    <CommentSection
        commentData={comments} 
        currentUser={null} logIn={{
          loginLink: "localhost:3000",
          signupLink: "localhost:3000"
        }}   
    />
    {loadingComments ?
    <Colxx xxs={12} className="loading-comments-container text-center">
      <Spinner type="grow" style={{ width: '10px', height: '10px' }} color="light" />
      <Spinner type="grow" style={{ width: '10px', height: '10px' }} color="light" />
      <Spinner type="grow" style={{ width: '10px', height: '10px' }} color="light" />
    </Colxx>
    : null}
    </>
  );
};

export default VideoComments;
