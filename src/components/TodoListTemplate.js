import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, palette, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                큐 리스트
            </div>
            <selection className="palette-wrapper">
                {palette}
            </selection>            
            <selection className="form-wrapper">
                {form}
            </selection>
            <selection className="todos-wrapper">
                {children}
            </selection>            
        </main>
    );
};

export default TodoListTemplate;