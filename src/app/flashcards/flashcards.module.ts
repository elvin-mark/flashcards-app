import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DatasetsComponent } from './components/datasets/datasets.component';
import { PracticeComponent } from './components/practice/practice.component';
import { SharedModule } from '../shared/shared.module';
import { FlashcardsService } from '../shared/services/flashcards.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MainComponent,
    ProgressComponent,
    DatasetsComponent,
    PracticeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [FlashcardsService],
  exports: [DatasetsComponent],
  schemas: [],
})
export class FlashcardsModule {}
