import { Component, OnInit } from '@angular/core';
import { FortniteService } from '../fortnite.service';

@Component({
  selector: 'app-cosmetics-list',
  templateUrl: './cosmetics-list.component.html',
  styleUrls: ['./cosmetics-list.component.css']
})
export class CosmeticsListComponent implements OnInit {
  cosmetics: any[] = [];
  searchTerm: string = '';

  constructor(private fortniteService: FortniteService) { }

  ngOnInit(): void {
    this.loadAllCosmetics();
  }

  loadAllCosmetics(): void {
    this.fortniteService.getAllCosmetics().subscribe(data => {
      this.cosmetics = data.data;
    });
  }

  onSearch(): void {
    if (this.searchTerm) {
      this.fortniteService.searchCosmeticsByName(this.searchTerm).subscribe(data => {
        this.cosmetics = data.data ? [data.data] : [];
      });
    } else {
      this.loadAllCosmetics();
    }
  }
}
