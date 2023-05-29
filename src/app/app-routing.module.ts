import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersRegistrationComponent } from './users-registration/users-registration.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-reg', component: UsersRegistrationComponent },
  { path: 'payment-summary', component: PaymentSummaryComponent },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      { path: 'movies', component: AllMoviesComponent },
      { path: 'add-movie', component: AddMovieComponent },
      { path: 'view-movie/:mid', component: ViewMovieComponent },
      { path: 'update-movie/:mid', component: UpdateMovieComponent },
      { path: 'admin-reg', component: AdminRegComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
