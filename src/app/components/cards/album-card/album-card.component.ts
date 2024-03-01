import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'album-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './album-card.component.html',
    styleUrl: './album-card.component.scss'
})

export class AlbumCardComponent {
    @Input({required: true}) photoAlbum: string = '';
    @Input({required: true}) typeActivity: string = '';
    @Input({required: true}) titleSong: string = '';
    @Input({required: true}) releaseDate: string = '';
}