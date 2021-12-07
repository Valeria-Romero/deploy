import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  allNotes: any[] = [];
  content: String = "";
  errorMessage: String = "";
  constructor(private _notesService: NotesService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  postNote( event:any): void{
    event.preventDefault();

    if(this.content.length < 3){
      this.errorMessage = "Note should be at least 3 characters"
    }
    else{
      let newNote = {
        content: this.content
      }
      console.log(newNote);
      this._notesService.createNote(newNote)
        .subscribe((data:any) =>{
          this.loadNotes();
          location.reload();
        })
    }
  }

  loadNotes():void{
    this._notesService.findNotes()
      .subscribe((data:any) =>{
        this.allNotes = data;
        console.log(this.allNotes);
      })
  }
}
