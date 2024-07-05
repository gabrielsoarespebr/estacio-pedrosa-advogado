import { AboutComponent } from './components/about/about.component';
import { Component, HostListener } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { RecurringProblemsComponent } from './components/recurring-problems/recurring-problems.component';
import { CompetitiveEdgesComponent } from './components/competitive-edges/competitive-edges.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    RecurringProblemsComponent,
    AboutComponent,
    CompetitiveEdgesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showBackToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const verticalOffset =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;

    this.showBackToTop = verticalOffset > windowHeight / 2;
  }
}
