import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import BANDS_COLLECTION from '../../data/bands-collection.data';
import { Band } from '../../models/band.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-info-bts',
    standalone: true,
    imports: [CommonModule, DemoNgZorroAntdModule, ReactiveFormsModule],
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.scss'
})

export class PrincipalComponent {

    bands: Band[] = BANDS_COLLECTION;
    filteredBands: Band[] = [];
    name = new FormControl('');

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.filteredBands = this.bands;
    }

    onBandClick(band: Band) {
        const bandName = band.name.replace(' ', '-');
        this.navigateToBand(bandName);
    }

    onBlur(event: FocusEvent) {
        if (!this.name.value) {
            // Seleccionar el elemento input
            const input = document.querySelector('.search-input') as HTMLElement;
            // Cambiar el ancho del input para que se muestre
            input.style.border = 'none';
        }
    }

    filterList() {
        if (this.name.value) {
            this.filteredBands = this.bands
                .filter(item => item.name.toLowerCase().indexOf(this.name.value!.toLowerCase()) >= 0);
        } else {
            this.filteredBands = this.bands;
        }
    }

    navigateToBand(bandName: string) {
        const band: string = bandName.toLocaleLowerCase();
        this.router.navigate(['/' + band]);
    }
}