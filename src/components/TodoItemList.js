import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    console.log('TodoItemList');
    const { todos, onToggle, onRemove } = this.props;

    // 방법1
    // const todoList = todos.map(
    //   ({id, text, checked, color}) => (
    //     <TodoItem
    //       id={id}
    //       text={text}
    //       checked={checked}
    //       color={color}
    //       onToggle={onToggle}
    //       onRemove={onRemove}
    //       key={id}
    //     />
    //   )
    // );

    // 방법2
    const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;