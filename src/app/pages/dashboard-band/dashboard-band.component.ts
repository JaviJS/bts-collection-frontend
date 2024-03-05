import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { AlbumCardComponent } from '../../components/cards/album-card/album-card.component';
import { ActivatedRoute } from '@angular/router';
import { NzTabsCanDeactivateFn } from 'ng-zorro-antd/tabs';
@Component({
  selector: 'app-info-bts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    AlbumCardComponent,
  ],
  templateUrl: './dashboard-band.component.html',
  styleUrl: './dashboard-band.component.scss',
})
export class DashboardBandComponent {
  routeBand: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}

  canDeactivate: NzTabsCanDeactivateFn = (
    fromIndex: number,
    toIndex: number
  ) => {
    console.log(toIndex);
    let band = this.route.snapshot.paramMap.get('band');
    // console.log('route', this.route.snapshot.paramMap.get('band'));
    if (band) {
      this.routeBand = band;
    }
    return true;
  };
  initRoute() {
    let band = this.route.snapshot.paramMap.get('band');
    // console.log('route', this.route.snapshot.paramMap.get('band'));
    if (band) {
      return (this.routeBand = band);
    } else {
      return '';
    }
  }
  onBack(): void {
    console.log('onBack');
  }
}
