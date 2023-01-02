import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, public dialog: MatDialog, private moviesService: MovieService) { }

  navigateMovie(){
    this.route.navigate(['/addMovie']);
  }

  ngOnInit() {
  }

}
