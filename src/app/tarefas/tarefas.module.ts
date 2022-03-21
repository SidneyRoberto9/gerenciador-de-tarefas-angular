import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  ListarTarefasComponent,
  CadastrarTarefaComponent,
  EditarTarefaComponent,
} from './components';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TarefaService],
})
export class TarefasModule {}
