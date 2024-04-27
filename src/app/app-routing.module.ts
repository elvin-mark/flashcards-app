import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './flashcards/components/main/main.component';
import { DatasetsComponent } from './flashcards/components/datasets/datasets.component';
import { PracticeComponent } from './flashcards/components/practice/practice.component';
import { ProgressComponent } from './flashcards/components/progress/progress.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'datasets', component: DatasetsComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
