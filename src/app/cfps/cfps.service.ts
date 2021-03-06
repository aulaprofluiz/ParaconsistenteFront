import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CfpsService {

    constructor(private _http: Http) { }

    consultarTodos() {

        let api = `https://mighty-caverns-71018.herokuapp.com/paraconsistente/api/cfps/`;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                   
    }
}


