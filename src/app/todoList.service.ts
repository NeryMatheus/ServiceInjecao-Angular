import { Injectable } from "@angular/core";

/* @Injectable({
    providedIn: 'root'
}) */

export class TodoListService{
    items: string[] = ['item 1', 'item 2'];
    add(newItem: string){
        this.items.push(newItem)
    }
}