import { Component } from '@angular/core';
import {ChecklistDataService} from './checklist-data.service';
import {Checklist} from './checklist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChecklistDataService]
})
export class AppComponent {
  
  newChecklistEntry: Checklist = new Checklist();

  constructor(private checklistDataService: ChecklistDataService) {
  }

  addTodo() {
    this.checklistDataService.addChecklist(this.newChecklistEntry);
    this.newChecklistEntry = new Checklist();
  }

  toggleTodoComplete(entry) {
    this.checklistDataService.toggleItemComplete(entry);
  }

  removeTodo(entry) {
    this.checklistDataService.deleteChecklistById(entry.id);
  }

  get checklist() {
    return this.checklistDataService.getAllChecklist();
  }
}
