import React, { Component } from "react";
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

class Post extends Component {

    constructor(props){
        super(props);
        this.state = { timer: 0 }
        this.handleToggleUpvote = this.handleToggleUpvote.bind(this);
        this.handleToggleDownvote = this.handleToggleDownvote.bind(this);
    }

    //Handle upvote toggle
    handleToggleUpvote(evt) {
        this.props.toggleUpvote(this.props.id);
    }

    //handle downvote toggle
    handleToggleDownvote(evt) {
        this.props.toggleDownvote(this.props.id);
    }

    //keep track of amount of up- and downvotes added togheter?

    render(){

        const arrowUp = <FontAwesomeIcon icon={faArrowUp}>Upvote</FontAwesomeIcon>;
        const arrowDown = <FontAwesomeIcon icon={faArrowDown}>Downvote</FontAwesomeIcon>;

        //creating a seperate paragraph for each new line
        const postParagraphs = this.props.postValue.split("\n").map(p => <p>{p}</p>);

        //Posting date for the post
        var d = new Date();

        return(
            <div className="Post">
                    <div id="post-title">
                        <p>Posted by: anonymous</p>
                        <h2>{this.props.titleValue}</h2>
                    </div>
                    <div id="post-content">
                        {postParagraphs}
                    </div>
                    <div id="post-footer">
                        <div id="vote-btns">
                            <button id={this.props.upvote ? "upVoteOn" : "upVote"} onClick={this.handleToggleUpvote}>
                                {arrowUp}
                            </button>
                            <p>{this.state.postTotalVotes}</p>
                            <button id={this.props.downvote ? "downVoteOn" : "downVote"} onClick={this.handleToggleDownvote}>
                                {arrowDown}
                            </button>
                        </div>
                        <div id="posted-ago">
                            <p>Posted on {d.getDate()}.{d.getMonth()+1}.{d.getFullYear()} </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Post;