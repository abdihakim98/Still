/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';
import { continueStatement } from '@babel/types';
import Comments from './components/Comments/Comments';

const App = () => {
  
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [posts, setPosts] = useState(dummyData)
  const [comments, setComments] = useState(dummyData)

  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar />
      <Posts posts =  {posts} />
      <Comments comments =  {comments}/> 
         
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;

