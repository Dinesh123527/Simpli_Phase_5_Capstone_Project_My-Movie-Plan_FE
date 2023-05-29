import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  movies: Movie[] = [];
  query: string;
  roleAdmin: any = {};
  img: any[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private notifyService: NotificationService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.getAllMovies();
    this.authService.getType().subscribe((val: any) => {
      this.roleAdmin = val;
    });
    this.img = [
      {
        imagePath:
          'https://img.freepik.com/free-vector/cinematograph-concept-background-design-with-popcorn-3d-glasses_260559-142.jpg?w=996&t=st=1684986120~exp=1684986720~hmac=d744a125b94d8ae2431423cc3fcfd84ea78a068435da3cc23f28863155ddd206',
      },
    ];
  }

  getAllMovies() {
    this.movieService
      .getAllMovies()
      .subscribe((response: any) => (this.movies = response));
  }

  viewMovie(mid: number) {
    this.router.navigate(['home/view-movie/' + mid]);
  }

  updateMovie(mid: number) {
    this.router.navigate(['home/update-movie/' + mid]);
  }

  deleteMovie(mid: number) {
    this.movieService.deleteMovieById(mid).subscribe(
      (data: any) => {
        this.movies = data;
        this.notifyService.showSuccess(
          'Movie deleted successfully',
          'Movie Plan'
        );
      },
      (err) => {
        this.notifyService.showError('Movie was not deleted', 'Try again');
      }
    );
  }
}
