import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserBaseService } from '../services/user-base.service';
declare var jQuery :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cpuUsage=[]
  constructor(public fb: FormBuilder, public userBaseService: UserBaseService) { }

  ngOnInit() {
    setInterval(()=>{
      this.userBaseService.getCpuUsage().subscribe((res) => {
        if (res.success) {
          this.cpuUsage.push(res.cpuUsage)
        }
      })
    },10000)
  }
  
}
