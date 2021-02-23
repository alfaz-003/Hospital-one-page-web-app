import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css']
})
export class AppointComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showForm(form: NgForm) {
    console.log(form.value);
}




}
