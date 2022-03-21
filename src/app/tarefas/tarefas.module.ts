import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './components';

@NgModule({
  declarations: [ListarTarefasComponent],
  imports: [CommonModule],
  providers: [TarefaService],
})
export class TarefasModule {}
