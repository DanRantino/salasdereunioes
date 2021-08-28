import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id:number=0;
  room:Room = new Room();


  constructor(private route:ActivatedRoute, private router:Router,private roomService:RoomService) { }

  ngOnInit(){
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
                    .subscribe((data:Room)=>{
                      console.log(data)
                      this.room = data
                    },
                    (error:any)=> console.log(error))
  }

  list()
  {
    this.router.navigate(['/rooms'])
  }

}
