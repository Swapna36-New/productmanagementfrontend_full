import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title:FormControl;
  constructor() { }

  ngOnInit(): void {
    this.title = new FormControl('',[Validators.required,Validators.minLength(3)]);
  }

  printTitle(){
    console.log(this.title);
  }

}
