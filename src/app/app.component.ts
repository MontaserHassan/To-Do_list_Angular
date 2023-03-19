import { Component } from '@angular/core';
import { ToDo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ToDo[] = [];
  newTodo: string;

  addTodo(){
      if (this.newTodo) {
        let todo = new ToDo();
        todo.task = this.newTodo;
        todo.completed = true;
        this.todos.push(todo);
        this.newTodo = '';
      }else{
        alert('Please enter a todo');
      }
  }

  isCompleted(id:number){
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((todo, index) => index !== id);
  }
}
