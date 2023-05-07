import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewUser } from 'app/common/classes/new-user';
import { Product } from 'app/common/classes/product';
import { RequestService } from 'app/services/request-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  User: Product={uuid: '', id: '', name: '', home: '', species: ''}

  userId!: string | null;

  submitted = false;

  postId: any;

  constructor (private service: RequestService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      console.log(userId)
      this.service.getUserData(userId).subscribe((data : Product) => {
        this.User = data;
        console.log(this.User);
      })
  })
  }

  onSubmit(User: Product) { 
    console.log(`Sending User as Post body to server: ` + JSON.stringify(User))
    this.service.editCurrentUser(User).subscribe(data => this.postId = data)
    console.log(this.postId)
    this.submitted = true
  }



  ngOnInit(): void {
    
  }

}
