import { Injectable, HostListener } from '@angular/core';
import { Subject, ReplaySubject, combineLatest, Observable } from 'rxjs';
import {
    shareReplay,
    map,
    timeout,
    throttleTime,
    distinctUntilChanged,
} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class MainService {
    private _height_sub = new ReplaySubject();
    private _width_sub = new ReplaySubject();

    private _height = this._height_sub.asObservable().pipe(throttleTime(25));
    private _width = this._width_sub.asObservable().pipe(throttleTime(25));
    private _orientation = combineLatest([
        this._width_sub,
        this._height_sub,
    ]).pipe(
        map((val) => {
            if (val[0] < val[1]) {
                return 'profile';
            }

            return 'landscape';
        }),
        distinctUntilChanged((x, y) => x === y)
    );

    constructor() {
        this._resizeListener();

        this._height_sub.next(window.innerHeight);
        this._width_sub.next(window.innerWidth);
    }

    private _resizeListener() {
        window.addEventListener('resize', () => {
            this._height_sub.next(window.innerHeight);
            this._width_sub.next(window.innerWidth);
        });
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get orientation() {
        return this._orientation;
    }
}
