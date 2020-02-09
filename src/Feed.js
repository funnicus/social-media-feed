import React, { Component } from "react";
import CreatePostForm from "./CreatePostForm";
import Post from "./Post";
import "./Feed.css";

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [
                {
                    titleValue: "Hello",
                    postValue: "This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee. This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee. This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee. This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee. This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee. This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee. This is a test post. Yeeeeeeeeeeeeee eeeeeeeeeeeee eee eee eeeee, eeeeeeeeeeeeeeeee.",
                    id: 8,
                    upvote: false,
                    downvote: false
                }
            ]
        };
        this.createPost = this.createPost.bind(this);
        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
    }

    createPost(newPost){
        this.setState({
            posts: [...this.state.posts, newPost]
        });
    }

    toggleUpvote(id){
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === id) {
                return { ...post, upvote: !post.upvote, downvote: false };
              }
              return post;
            });
            this.setState({ posts: updatedPosts });
    }

    toggleDownvote(id){
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === id) {
                return { ...post, downvote: !post.downvote, upvote: false };
              }
              return post;
            });
            this.setState({ posts: updatedPosts });
    }

    render(){
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