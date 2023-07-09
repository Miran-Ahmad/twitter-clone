import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder='Search twitter' type='text' />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>Whats Happening</h2>

        <TwitterTweetEmbed tweetId={"1381773663012220929"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mdmiranahmad"
          options={{ height: 400 }}
        />

        <TwitterShareButton url={"https://facebook.com/miranahmad"} options={{text: "#reactjs is awesome", via:"mdmiranahmad"}}/>
      </div>
    </div>
  )
}

export default Widgets