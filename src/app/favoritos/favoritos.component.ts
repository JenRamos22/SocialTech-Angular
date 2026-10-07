import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css',
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  ngOnInit(): void {
    const guardados = localStorage.getItem('favoritos');
    this.favoritos = guardados ? JSON.parse(guardados) : [];
  }

  eliminarFavorito(id: number): void {
    this.favoritos = this.favoritos.filter((noticia) => noticia.id !== id);

    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  ordenarFavoritos(event: Event): void {
    const select = event.target as HTMLSelectElement;

    if (select.value === 'recent') {
      this.favoritos.sort((a, b) => b.id - a.id);
    }

    if (select.value === 'oldest') {
      this.favoritos.sort((a, b) => a.id - b.id);
    }
  }
}
