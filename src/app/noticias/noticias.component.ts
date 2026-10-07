import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticias',
  imports: [RouterLink],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];
  noticiasFiltradas: any[] = [];

  ngOnInit(): void {
    fetch('data/noticias.json')
      .then((response) => response.json())
      .then((data) => {
        const guardadas = localStorage.getItem('noticiasCreadas');
        const noticiasCreadas = guardadas ? JSON.parse(guardadas) : [];

        this.noticias = [...data, ...noticiasCreadas];

        this.noticiasFiltradas = this.noticias;
      });
  }

  filtrarNoticias(categoria: string): void {
    
    if (categoria === 'Todas') {
      this.noticiasFiltradas = this.noticias;
    } else {
      this.noticiasFiltradas = this.noticias.filter(
        (noticia) => noticia.categoria === categoria,
      );
    }
  }
}
