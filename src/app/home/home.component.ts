import { Observable, EMPTY } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { DataService } from './../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private readonly dataService: DataService) {}

  value$: Observable<{ id: number; text: string }> = EMPTY;

  ngOnInit(): void {
    this.dataService.clickBtn('');
    this.value$ = this.dataService.value$;
  }

  clickFn(value: string) {
    this.dataService.clickBtn(value);
  }
}
