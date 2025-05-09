import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,  // Adicione esta linha
  imports: [CommonModule, FormsModule, IonicModule]  // Adicione estes imports
})
export class DetalhesPage implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Dados recebidos:', data);
      },
      error: (err) => {
        console.error('Erro na API:', err);
      }
    });
  }
}