import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
    param;

    constructor(
        private route: ActivatedRoute,
        private httpClient: HttpClient
    ) {}

    ngOnInit() {
        this.route.params.subscribe((p) => {
            console.log(p);
            this.param = p.param;
        });
    }
}
