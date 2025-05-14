import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MaiusculaPipe } from '../pipes/maiuscula.pipe';
import { DestaqueDirective } from '../directives/destaque.directive';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true, // Ou false se usar NgModules
  imports: [
    CommonModule,
    IonicModule,
    MaiusculaPipe,      // Pipe
    DestaqueDirective   // Diretiva
  ]
})
export class DetalhesPage implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}