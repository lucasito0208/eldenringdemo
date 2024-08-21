import { Component, OnInit } from '@angular/core';
import { Creatues } from '../../models/creatures.model';
import { EldenRingService } from '../../services/eldenring.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent implements OnInit {

  creatures: Creatues[] = [];
  creatureImageUrl: string =
    'https://eldenring.fanapis.com/images/creatures/';

  constructor(private eldenringService: EldenRingService) {}

  loadCreatures = () => {
    this.eldenringService.getCreatures().subscribe({
      next: (data: any) => {
        this.creatures = data.data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  };

  ngOnInit(): void {
    this.loadCreatures();
  }

}
