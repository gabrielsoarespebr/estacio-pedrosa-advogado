import { AboutComponent } from './components/about/about.component';
import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { RecurringProblemsComponent } from './components/recurring-problems/recurring-problems.component';
import { CompetitiveEdgesComponent } from './components/competitive-edges/competitive-edges.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    RecurringProblemsComponent,
    AboutComponent,
    CompetitiveEdgesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
