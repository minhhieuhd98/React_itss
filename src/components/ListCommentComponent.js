import React, { Component } from 'react';
import './ListCommentComponent.css';

class ListCommentComponent extends Component {
    handleDeleteItem = () => {
        this.props.onToDoDelete();
    };
    render() {
        var item = this.props;
        return (
            <div className="ToDoListItem" onClick={this.handleDeleteItem}>
                <div className="ToDoListItem-comment">{item.comment}</div>
            </div>
        );
    }
}

export default ListCommentComponent;
