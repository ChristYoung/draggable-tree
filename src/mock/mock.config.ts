import { HttpResponse } from '@angular/common/http';
import { Nodes, ResponseWrapper } from '@types';
import * as Mock from 'mockjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

export default {
  'GET': {
    'https://draggable-tree.com/api/getAllNodes': {
      handler: getAllNodes
    }
  }
};

function getAllNodes(): Observable<HttpResponse<ResponseWrapper<Nodes[]>>> {
  const mockData = Mock.mock({
    'items|30': [
      {
        id: '@id',
        name: '@cname',
        'age|18-60': 1,
        address: '@city',
        'children|1-10': [
          {
            id: '@id',
            name: '@cname',
            'age|18-60': 1,
            address: '@city',
          },
        ],
      },
    ],
  });
  return of(new HttpResponse<ResponseWrapper<Nodes[]>>({
    status: 200, body: {
      code: 'SUCCESS',
      data: mockData,
    }
  }));
}

