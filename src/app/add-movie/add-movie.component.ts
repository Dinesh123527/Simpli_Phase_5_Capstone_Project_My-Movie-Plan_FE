import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { MovieResourceService } from '../movie-resource.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit{
  genres: any;
  resources: Resource[] = [];
  addMovieForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private resourceService: MovieResourceService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.addMovieForm = this.formBuilder.group({
      mname: ['', [Validators.required, Validators.maxLength(25)]],
      cast: ['', [Validators.required, Validators.minLength(10)]],
      director: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      mgenre: ['', Validators.required],
      mdesc: ['', [Validators.required, Validators.minLength(10)]],
      language: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      runTime: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      ticketPrice: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      movieCode: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
        ],
      ],
    });
    this.resourceService.getAllResources().subscribe((response: any) => {
      this.resources = response;
      const categories = this.resources.filter(
        (resources) => resources.resourceCode === 'genre'
      );
      const final = categories.map((categories) => categories.resourceDetail);
      this.genres = final;
    });
  }

  addMovie() {
    if (this.addMovieForm.invalid) {
      return this.notifyService.showError('All fields are Mandatory', 'Movie Plan');
    }
    const mid = 0;
    const mname = this.addMovieForm.controls['mname'].value;
    const cast = this.addMovieForm.controls['cast'].value;
    const director = this.addMovieForm.controls['director'].value;
    const mgenre = this.addMovieForm.controls['mgenre'].value;
    const mdesc = this.addMovieForm.controls['mdesc'].value;
    const language = this.addMovieForm.controls['language'].value;
    const runTime = this.addMovieForm.controls['runTime'].value;
    const ticketPrice = this.addMovieForm.controls['ticketPrice'].value;
    const movieCode = this.addMovieForm.controls['movieCode'].value;
    const body: Movie = {
      mid: mid,
      mname: mname,
      cast: cast,
      director: director,
      mgenre: mgenre,
      mdesc: mdesc,
      language: language,
      runTime: runTime,
      ticketPrice: ticketPrice,
      movieCode: movieCode,
    };
    this.movieService.addMovie(body).subscribe(
      (data: any) => {
        this.notifyService.showSuccess(
          'Movie Added Successfully',
          'Movie Plan'
        );
        this.router.navigate(['/home/movies']);
      },
      (err) => {
        this.notifyService.showSuccess(
          'Movie already exist or something went wrong',
          'Try again'
        );
      }
    );
  }

  cancel() {
    this.notifyService.showWarn('Movie was not added', 'Cancelled');
    this.router.navigate(['/home']);
  }
}
