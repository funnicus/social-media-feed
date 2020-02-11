import React, { Component } from "react";
import CreatePostForm from "./CreatePostForm";
import Post from "./Post";
import "./styles/Feed.css";

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [
                {
                    titleValue: "Test Post",
                    postValue: "This is a test post.",
                    id: 9,
                    upvote: false,
                    downvote: false
                }
            ]
        };
        //binding this-keyword to the functions and methods that use it
        this.createPost = this.createPost.bind(this);
        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
    }

    createPost(newPost){
        this.setState({
            posts: [newPost, ...this.state.posts]
        });
    }

    toggleUpvote(id){
        //toggling the state to the desired post with filtering by id
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === id) {
                //setting upvote to the opposite value. downvote is set to false
                return { ...post, upvote: !post.upvote, downvote: false };
              }
              return post;
            });
            this.setState({ posts: updatedPosts });
    }

    toggleDownvote(id){
        //toggling the state to the desired post with filtering by id
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === id) {
                //setting downvote to the opposite value. upvote is set to false
                return { ...post, downvote: !post.downvote, upvote: false };
              }
              return post;
            });
            this.setState({ posts: updatedPosts });
    }

    render(){
        //Generating all the posts from the posts array in state
        const posts = this.state.posts.map(post => {
            return(
                <Post 
                key={post.id}
                id={post.id}
                titleValue={post.titleValue}
                postValue={post.postValue}
                toggleUpvote={this.toggleUpvote}
                toggleDownvote={this.toggleDownvote}
                upvote={post.upvote}
                downvote={post.downvote}
                />
            )
        })
        return(
            <div className="Feed">
                <div className="header">
                    <a href="#top" className="logo">React Social Media Feed</a>
                </div>
                <div className="feedBody">
                    <CreatePostForm createPost={this.createPost}/>
                        {posts}
                </div>
            </div>
        );
    }
}

export default Feed;