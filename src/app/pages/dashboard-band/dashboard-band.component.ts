import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { AlbumCardComponent } from '../../components/cards/album-card/album-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTabsCanDeactivateFn } from 'ng-zorro-antd/tabs';
import BANDS_COLLECTION from '../../data/bands-collection.data';
import { Band } from '../../models/band.model';
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
  bands: Band[] = BANDS_COLLECTION;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.getBandRoute();
  }
  getBandRoute() {
    let band = this.route.snapshot.paramMap.get('band');
    if (band) {
      const findBand = this.bands.find((x) => x.code_name === band);
      console.log({findBand});
      if (findBand) {
        this.routeBand = findBand?.name;
      } else {
        this.router.navigate(['/not-found/']);
      }
    }
  }
  canDeactivate: NzTabsCanDeactivateFn = (
    fromIndex: number,
    toIndex: number
  ) => {
    // this.getBandRoute();
    return true;
  };
  effectBtn(): void {
    const btn = document.querySelector('.btn') as HTMLElement;
    btn.style.border = 'none';
    btn.style.boxShadow = 'none';
  }
  onBack(): void {
    this.router.navigate(['/']);
  }
}
