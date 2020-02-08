import React, { Component } from "react";
import CreatePostForm from "./CreatePostForm";
import Post from "./Post";

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        this.createPost = this.createPost.bind(this);
    }

    createPost(newPost){
        this.setState({
            posts: [...this.state.posts, newPost]
        });
    }

    render(){
        const posts = this.state.posts.map(post => {
            return(
                <Post 
                key={post.id}
                id={post.id}
                titleValue={post.titleValue}
                postValue={post.postValue}
                />
            )
        })
        return(
            <div className="Feed">
                <CreatePostForm createPost={this.createPost}/>
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

export default Feed;