import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Verifique se há um token de acesso no Local Storage
    const user = localStorage.getItem('user');
    const accessToken = user
      ? JSON.parse(user).stsTokenManager.accessToken
      : null;

    // Clone a solicitação original e adicione o token de acesso ao cabeçalho 'Authorization'
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    // Continue com a solicitação modificada
    return next.handle(request);
  }
}
