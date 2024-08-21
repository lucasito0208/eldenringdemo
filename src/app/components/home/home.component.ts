import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  blaidGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzNucTgzbmxqdmFia2Q5aTQ5OTUzYXZ1cWYxZTluMzlpbWhrejVnYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z7MZ6HXwffG3KFP3KJ/giphy.gif";


  constructor() {}

  ngOnInit(): void {}
}
