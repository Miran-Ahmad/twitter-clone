import React from 'react'
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Posts */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* Posts */}
    </div>
  )
}

export default Feed