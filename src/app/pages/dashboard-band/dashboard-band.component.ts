import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';

@Component({
    selector: 'app-info-bts',
    standalone: true,
    imports: [CommonModule, RouterOutlet, DemoNgZorroAntdModule],
    templateUrl: './dashboard-band.component.html',
    styleUrl: './dashboard-band.component.scss'
})

export class DashboardBandComponent {
}