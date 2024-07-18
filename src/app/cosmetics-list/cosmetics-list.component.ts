import { Component, OnInit } from '@angular/core';
import { FortniteService } from '../fortnite.service';

@Component({
  selector: 'app-cosmetics-list',
  templateUrl: './cosmetics-list.component.html',
  styleUrls: ['./cosmetics-list.component.css']
})
export class CosmeticsListComponent implements OnInit {
  cosmetics!: any[];

  constructor(private fortniteService: FortniteService) { }

  ngOnInit(): void {
    this.fetchCosmetics();
  }

  fetchCosmetics(): void {
    this.fortniteService.getAllCosmetics()
      .subscribe(data => {
        console.log('Data from API:', data); // Vérifiez les données retournées par l'API
        this.cosmetics = data.data; // Assurez-vous que la structure des données correspond
      }, error => {
        console.error('Error fetching cosmetics:', error); // Vérifiez les erreurs de requête
      });
  }
}
