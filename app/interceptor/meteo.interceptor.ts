import { environment } from './../../environments/environment.prod';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class MeteoInterceptor implements HttpInterceptor {

    // permet d'ajouter des paramètres à toutes les requêtes HTTP que l'on envoie.
    // les paramètres communs à chaque requête ne sont qu'une seule fois dans le code, ici, ce qui rend le code bien plus
    // lisible: les paramètres spécifiques à certaines requêtes seront eux dans les méthodes associées.

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
            params: req.params.appendAll({
                'units':'metric',
                'appid':environment.openWeather.key
            })
        });
        return next.handle(cloneReq);
    }
    
}
