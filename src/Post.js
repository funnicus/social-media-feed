import React, { Component } from "react";

class Post extends Component {

    render(){
        return(
            <div className="Post">
                <li>
                    {this.props.titleValue}
                </li>
                <li>
                    {this.props.postValue}
                </li>
            </div>
        )
    }
}

export default Post;