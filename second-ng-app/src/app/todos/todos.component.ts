import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { catchError } from 'rxjs';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  // Inject TodosService into a variable
  todoService = inject(TodosService)
  todoItems = signal<Array<Todo>>([]);
  
  ngOnInit(): void {
    this.todoService.getTodosFromApi().
    pipe(
      catchError((err)=>{
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos)
    })
  }
}
