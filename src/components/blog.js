import React from 'react';
import REACTDOM from 'react-dom';




class Blog extends React.Component{
    render (){
        return (
            <div className="blogList">
                <div className="postList">
                <form onSubmit={this.props.addItem}>
                    <input placeholder="Post"
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                    
                                   
                    
                    />
                    <button type="submit">Add Post</button>
                </form>
            </div>
            </div>
        )
    }


}

export default Blog;