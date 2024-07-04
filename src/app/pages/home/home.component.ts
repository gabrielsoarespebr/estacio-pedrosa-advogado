import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
