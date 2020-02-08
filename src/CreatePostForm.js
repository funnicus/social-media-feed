import React, { Component } from "react";
import uuid from 'uuid/v4';

class CreatePostForm extends Component {

    constructor(props){
        super(props);
        this.state = {titleValue: "", postValue: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createPost({...this.state, id: uuid()});
        this.setState({ titleValue: "", postValue: ""});
    }

    render(){
        return(
            <div className="CreatePostForm">
                <div>
                    <h2>Create a post</h2>
                </div>
                <div>
                    <form id="postForm" onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        name="titleValue"
                        value={this.state.titleValue}
                        placeholder="add a title"
                        onChange={this.handleChange}
                        />
                        <button>POST</button>
                    </form>
                    <textarea 
                    name="postValue" 
                    form="postForm" 
                    placeholder="text..."
                    value={this.state.postValue}
                    onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}

export default CreatePostForm;