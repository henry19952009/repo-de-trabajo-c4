import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    BuscarPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    CrearProductosComponent,
    BuscarProductosComponent,
    EditarProductosComponent,
    EliminarProductosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
