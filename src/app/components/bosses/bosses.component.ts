import { Component, OnInit } from '@angular/core';
import { Bosses } from '../../models/bosses.model';
import { EldenRingService } from '../../services/eldenring.service';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html',
  styleUrls: ['./bosses.component.css']
})
export class BossesComponent implements OnInit {
  bosses: Bosses[] = [];
  selectedBoss!: Bosses;
  bossesImageUrl: string =
    'https://eldenring.fanapis.com/images/bosses/';

  constructor(private eldenringService: EldenRingService) {}

  loadBosses = () => {
    this.eldenringService.getBosses().subscribe({
      next: (data: any) => {
        this.bosses = data.data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  };

  onBossClick(boss: any) {
    this.eldenringService.getBossDetails(boss.id).subscribe(data => {
      this.selectedBoss = data;
    }, error => {
      console.error('Error fetching boss details:', error);
    });
  }

  ngOnInit(): void {
    this.loadBosses();
  }
}
