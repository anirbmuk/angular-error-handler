import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-errorhandler',
  templateUrl: './errorhandler.component.html',
  styleUrls: ['./errorhandler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorhandlerComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  data: Observable<{ code: number; message: string } | undefined> = EMPTY;

  ngOnInit(): void {
    this.data = this.route.data.pipe(
      map(
        (data) =>
          (data.errorData as { code: number; message: string }) || undefined
      )
    );
  }
}
