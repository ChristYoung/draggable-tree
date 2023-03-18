export interface ResponseWrapper<T> {
  code: 'SUCCESS' | 'ERROR' | 'NO_AUT',
  message?: string,
  data: T;
}
