import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl: string = 'http://localhost:8082/api/v1/rooms';

  constructor( private http: HttpClient ) { }

  getRoom(id: number): Observable<Room>
  {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room>{
    return this.http.post<Room>(`${this.baseUrl}`,room)
  }

  updateRoom(id: number, room: Room): Observable<Room>
  {
      console.log(room)
      room.id = +id;
      console.log(room)
      return this.http.put<Room>(`${this.baseUrl}`,room)
  }

  deleteRoom(id: number): Observable<String>
  {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'})

  }

  getRoomList(): Observable<Room[]>
  {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }

}
