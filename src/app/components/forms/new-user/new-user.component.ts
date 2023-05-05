import { Component, OnInit } from '@angular/core';
import { Homes } from 'app/common/classes/homes';
import { NewUser } from 'app/common/classes/new-user';
import { RequestService } from 'app/services/request-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  NewUser: NewUser={name: '', home: '', species: ''}

  home: Homes[] = [];

  name = '';

  species = ["Human", "Not Human"]

  submitted = false;

  postId: any;

  onSubmit(NewUser: NewUser) { 
    
    console.log(`Sending NewUser as Post body to server: ` + JSON.stringify(NewUser))
    this.service.addUserToTable(NewUser).subscribe(data => this.postId = data)
    this.submitted = true
  }

  constructor(private service: RequestService) {

    this.service.getHomes()
    .subscribe(
      (data: Homes[]) => {
      this.home = data
      console.log(this.home)
    })
  }

  ngOnInit(): void {
  }
}

