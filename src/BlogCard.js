import React from 'react';
import { dumpLogs } from './Utils';
//import './BlogCard.css';
import classes from './BlogCard.module.css';
import { Component } from 'react';
class BlogCard extends Component  {
    state={
        likeCount : 0
    }
    onLikeBtnClick = () =>
    {
        this.setState((prevState,prevProps) => {
        return { likeCount : prevState.likeCount + 1 }
        });
    
    }

    render()
    {
    console.log(this.props);
    return(
        <div className={classes.BlogCard} >
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>Like Count: <span className={classes.likeCount}>{this.state.likeCount}</span></p>
            <button onClick={this.onLikeBtnClick}>Like</button>
        </div>
    
    )
    }
}
export default BlogCard;