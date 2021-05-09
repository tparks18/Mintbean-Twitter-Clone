import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Tatyana Parks{" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  @taty
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Hello</p>
            </div>
          </div>
          <img
            src="https://media3.giphy.com/media/65ATdpi3clADjomZ39/giphy.gif"
            alt="gif"
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
}

export default Post
