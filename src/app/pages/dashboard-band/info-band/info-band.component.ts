import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-info-bts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './info-band.component.html',
    styleUrl: './info-band.component.scss'
})

export class InfoBandComponent {
    band = '';
    private sub: any;
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.band = params['band']
        });
        console.log(this.band);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}