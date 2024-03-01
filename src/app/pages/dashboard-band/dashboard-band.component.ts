import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { AlbumCardComponent } from '../../components/cards/album-card/album-card.component'
@Component({
    selector: 'app-info-bts',
    standalone: true,
    imports: [CommonModule, RouterOutlet, DemoNgZorroAntdModule, AlbumCardComponent],
    templateUrl: './dashboard-band.component.html',
    styleUrl: './dashboard-band.component.scss'
})

export class DashboardBandComponent {
}