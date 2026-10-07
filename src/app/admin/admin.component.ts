import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  noticiasCreadas: any[] = [];

  ngOnInit(): void {
    const guardadas = localStorage.getItem('noticiasCreadas');

    if (guardadas) {
      this.noticiasCreadas = JSON.parse(guardadas);
    }
  }
  eliminarNoticia(id: number): void {
    this.noticiasCreadas = this.noticiasCreadas.filter(
      (noticia) => noticia.id !== id,
    );

    localStorage.setItem(
      'noticiasCreadas',
      JSON.stringify(this.noticiasCreadas),
    );
  }
  crearNoticia(event: Event): void {
    event.preventDefault();

    const formulario = event.target as HTMLFormElement;

    const titulo = (
      formulario.querySelector('#titulo') as HTMLInputElement
    ).value.trim();

    const categoria = (
      formulario.querySelector('#categoria') as HTMLSelectElement
    ).value;

    const descripcion = (
      formulario.querySelector('#descripcion') as HTMLTextAreaElement
    ).value.trim();

    const imagen = (
      formulario.querySelector('#imagen') as HTMLInputElement
    ).value.trim();

    const nuevaNoticia = {
      id: Date.now(),
      titulo: titulo,
      categoria: categoria,
      descripcion: descripcion,
      imagen: imagen,
    };

    this.noticiasCreadas.push(nuevaNoticia);

    localStorage.setItem(
      'noticiasCreadas',
      JSON.stringify(this.noticiasCreadas),
    );

    formulario.reset();
  }
}
