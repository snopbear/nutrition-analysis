import { Component } from '@angular/core';
import { LoaderService } from 'src/app/@core/@interceptors/loader/loader-service/loader-service.service';

@Component({
  selector: 'na-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nutrition Anlysis';
  constructor(public loaderService: LoaderService) {}
}
