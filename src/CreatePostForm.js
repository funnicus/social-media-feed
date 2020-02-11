import React, { Component } from "react";
import uuid from 'uuid/v4';
import './styles/CreatePostForm.css';

class CreatePostForm extends Component {

    constructor(props){
        super(props);
        this.state = {titleValue: "", postValue: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handling changing value of the title and the post content in the textarea
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createPost({...this.state, id: uuid(), upvote: false, downvote: false});
        this.setState({ titleValue: "", postValue: ""});
    }

    render(){
        return(
            <div className="CreatePostForm">
                <div>
                    <h2>Create a post</h2>
                </div>
                <div>
                    <form id="postForm" onSubmit={this.state.titleValue === "" ? "" :this.handleSubmit}>
                        <input
                        type="text"
                        name="titleValue"
                        value={this.state.titleValue}
                        placeholder="Add a title..."
                        onChange={this.handleChange}
                        />
                        <button className={this.state.titleValue === "" ? "disabled" : ""}>POST</button>
                    </form>
                    <textarea 
                    name="postValue" 
                    form="postForm" 
                    placeholder="Text..."
                    value={this.state.postValue}
                    onChange={this.handleChange}
                    rows="10"
                    cols="50"
                    />
                </div>
            </div>
        )
    }
}

export default CreatePostForm;