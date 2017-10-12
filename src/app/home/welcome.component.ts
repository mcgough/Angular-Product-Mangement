import { Component, AfterContentChecked } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['welcome.component.css'],
})
export class WelcomeComponent implements AfterContentChecked {
    mainTitle: string = 'Homepage';
    subTitle: string = 'Angular + TypeScript Demo';
    loaded: boolean = false;

    ngAfterContentChecked() {
        setTimeout(() => { this.loaded = true; }, 100);
    }
}
