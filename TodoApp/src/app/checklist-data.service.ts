import { Injectable } from '@angular/core';
import { Checklist } from './checklist';

@Injectable()
export class ChecklistDataService {
  // last id of the list for auto-increment
  lastId:number = 0;
  // will hold the stack of checklist
  checklist:Checklist[] = [];

  constructor() { }

  // add new entry to the list
  addChecklist(checklist:Checklist):ChecklistDataService{
    if(!checklist.id){
      checklist.id = this.lastId++;
    }
    this.checklist.push(checklist);
    return this;
  }

  // delete an entry from the list
  deleteChecklistById(id:number):ChecklistDataService{
    this.checklist = this.checklist.filter(item => item.id!=id);
    return this;
  }

  updateChecklistById(id:number, values:Object = {}):Checklist {
    let item = this.getItemById(id);
    if(!item){
      return null
    }
    Object.assign(item, values);
    return item;
  }

  // Get all items from the checklist
  getAllChecklist():Checklist[] {
    return this.checklist;
  }

  // get an entry in the checklist by using its id
  getItemById(id:number): Checklist {
    return this.checklist.filter(item => item.id == id).pop();
  }

  //Toggle complete flag
  toggleItemComplete(item:Checklist):Checklist{
    let updatedItem = this.updateChecklistById(item.id,{complete:!item.complete});
    return updatedItem;
  }

}
