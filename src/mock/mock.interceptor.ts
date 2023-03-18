import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { default as MockConfig } from './mock.config';
import { environment } from 'src/environments/environment';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentMockEndpoint = (MockConfig as any)[request.method]
      && (MockConfig as any)[request.method][request.url] || null;
    if (environment.usingMock) {
      return currentMockEndpoint ? currentMockEndpoint.handler() : next.handle(request);
    }
    return next.handle(request);
  }
}
