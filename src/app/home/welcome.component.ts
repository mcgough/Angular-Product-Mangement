import { Component, AfterContentChecked } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['welcome.component.css'],
})
export class WelcomeComponent implements AfterContentChecked {
    public mainTitle: string = 'Homepage';
    public subTitle: string = 'Angular + TypeScript Demo';
    public loaded: boolean = false;

    ngAfterContentChecked() {
        setTimeout(() => { this.loaded = true; }, 100);
    }
}
