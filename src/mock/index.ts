import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './mock.interceptor';

export const MockInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
];
