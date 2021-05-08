import React from 'react';
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
      <div className="sidebar">
        {/* Twitter Icon */}
        <TwitterIcon className="sidebar__twitterIcon" />
        {/* SidebarOptions */}
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="List" />
        <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
        <SidebarOption Icon={ShoppingBasketIcon} text="Shop" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        {/* Button -> Tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    );
}

export default Sidebar;
