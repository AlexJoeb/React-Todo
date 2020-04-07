import React, { Component } from 'react'

import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        const { todos, handleClick } = this.props;
        return (
            <ul>
                {
                    todos.map(item => <Todo
                        handleClick={handleClick}
                        key={item.id} item={item} />)
                }
            </ul>
        )
    }
}
