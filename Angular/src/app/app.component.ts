import { Component } from '@angular/core';
import { MainService } from './service/main.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private main: MainService) {
        this.main.height.subscribe((height) => console.log('Height: ', height));
        this.main.width.subscribe((width) => console.log('Width: ', width));
        this.main.orientation.subscribe((or) =>
            console.log('Orientation: ', or)
        );
    }
}
