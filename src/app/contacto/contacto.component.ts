import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  mensajeEnviado = false;

  enviarFormulario(event: Event): void {
    event.preventDefault();
    this.mensajeEnviado = true;
    const formulario = event.target as HTMLFormElement;
    formulario.reset();
  }
}
