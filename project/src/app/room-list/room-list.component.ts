import { Component, OnInit } from '@angular/core';
import { ErrorObserver, Observable } from 'rxjs';
import { RoomService } from '../room.service';
import  { RoomDetailsComponent } from '../room-details/room-details.component'
import { Room } from '../room';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Observable<Room[]> | undefined;

  constructor(private roomService: RoomService,private router: Router) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.rooms = this.roomService.getRoomList();
  }

  deleteRoom(id:number){
    this.roomService.deleteRoom(id)
      .subscribe(
        (data:String) => {
          console.log(data)
          this.reloadData();
        },
        (error:ErrorObserver<String>) => console.log(error)
      )
    };

    roomDetails(id:number){
      this.router.navigate(['details',id]);
    }

    updateRoom(id:number){
      this.router.navigate(['update',id])
    }
}
