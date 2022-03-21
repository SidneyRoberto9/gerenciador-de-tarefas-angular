import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarefaService, TarefaConcluidaDirective } from './shared';
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
    TarefaConcluidaDirective,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TarefaService],
})
export class TarefasModule {}
