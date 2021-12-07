import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http: HttpClient) { }

  createNote( newNote:any ){
    return this._http.post( "http://localhost:8080/newnote", newNote )
  }

  findNotes(){
    return this._http.get( "http://localhost:8080/allnotes") 
  }
}
