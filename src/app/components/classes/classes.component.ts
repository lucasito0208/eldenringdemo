import { Component, OnInit } from '@angular/core';
import { Classes } from '../../models/classes.model';
import { EldenRingService } from '../../services/eldenring.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes: Classes[] = [];

  classesImageUrl: string = 
  'https://eldenring.fanapis.com/images/classes/';

  constructor(private eldenringService: EldenRingService) { }

  loadClasses = () => {
    this.eldenringService.getClasses().subscribe({
      next: (data: any) => {
        this.classes = data.data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  };

  ngOnInit(): void {
    this.loadClasses();
  }

}
