import logo from './logo.svg';
import './App.css';
import BlogCard_Detail from './BlogCard';
import {isArrayEmpty as isMyArrayEmpty} from './Utils';
import React from 'react';
class App extends React.Component {
  state={
    showBlogs : true,
  }
  blogObj={
   title: 'Blog Title',
   description: 'Loreum Ipsum'
 }
 blogArr = [
  {
    id:'1',
title: 'Blog Title',
description: 'Lorem Ipsum'
  },
  {
    id:3,
title: 'Blog Title',
description: 'Lorem Ipsum3'
  },
  {
    id:2,
title: 'Blog Title',
description: 'Lorem Ipsum2'
  }
] 

 blogCards = this.blogArr.map((item,pos) => {
 
  return(
  <BlogCard_Detail key={pos} title={item.title} description={item.description} id={item.id}></BlogCard_Detail>
   
  )
})
 onHideBtnClick = () =>
{
  let updatedState=!this.state.showBlogs;
  this.setState((prevState,prevProps)=>
  {
    return{showBlogs:!prevState.showBlogs}
  });
  console.log(this.state.showBlogs);

}

  render()
  {
    console.log('Render Called');
    return(
      <div className="App" >
     {
     /*
     <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
    */}
    <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide' : 'Show'}</button>
    <br></br>
    {this.state.showBlogs ? this.blogCards : null}
    
        </div>
    );
  }
 
  
}


export default App;
