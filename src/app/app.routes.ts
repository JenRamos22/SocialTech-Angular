import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'detalle/:id', component: DetalleComponent }

];
