import { Injectable  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClienteService {

    errorMessage: String;

    constructor(private _http: Http) { }

    consultar(cnpj: String) {

        let api = `https://mighty-caverns-71018.herokuapp.com/paraconsistente/api/clientes/cnpj/${cnpj}`;

        console.log(api);

        return this._http.get(api)
        .map(result => result.json());
                   
    }
}

