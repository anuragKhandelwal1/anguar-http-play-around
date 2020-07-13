import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-gifs',
    templateUrl: './gifs.component.html',
    styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

    constructor(private httpService: HttpService) { }

    ngOnInit() {
    }

}
