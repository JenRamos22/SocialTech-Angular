import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-detalle',
  imports: [RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
})
export class DetalleComponent implements OnInit {
  noticia: any = null;
  guardadoEnFavoritos = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idNoticia = Number(this.route.snapshot.paramMap.get('id'));

    fetch('data/noticias.json')
      .then((response) => response.json())
      .then((data) => {
        const guardadas = localStorage.getItem('noticiasCreadas');
        const noticiasCreadas = guardadas ? JSON.parse(guardadas) : [];

        const todasLasNoticias = [...data, ...noticiasCreadas];

        this.noticia = todasLasNoticias.find(
          (noticia) => noticia.id === idNoticia,
        );

        const guardados = localStorage.getItem('favoritos');
        const favoritos = guardados ? JSON.parse(guardados) : [];

        this.guardadoEnFavoritos = favoritos.some(
          (item: any) => item.id === this.noticia?.id,
        );
      });
  }

  agregarFavorito(): void {
    const guardados = localStorage.getItem('favoritos');

    const favoritos = guardados ? JSON.parse(guardados) : [];

    const existe = favoritos.some((item: any) => item.id === this.noticia.id);

    if (!existe) {
      favoritos.push(this.noticia);

      localStorage.setItem('favoritos', JSON.stringify(favoritos));

      this.guardadoEnFavoritos = true;
    }
  }
}
