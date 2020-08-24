import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'

import { TokenService } from './token.service'
import { environment } from '../../../environments/environment'

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.tokenService.hasToken() && req.url.startsWith(environment.API_URL)) {            
            req = req.clone({
                setHeaders: { 'Authorization': `Bearer ${this.tokenService.getToken()}` }
            })
        }

        return next.handle(req)
    }

}