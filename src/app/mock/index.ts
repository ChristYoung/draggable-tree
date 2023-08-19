// import Mock from 'mockjs';
import { rest } from 'msw';

const MockAudiences = [
  {
    "id": "440000198009118872",
    "name": "My Data",
    "type": "DIR",
    "level": 0,
    "children": [
      {
        "id": "210000202107071541",
        "name": "DeviceReach ppid",
        "type": "DIR",
        "level": 1,
        "children": [
          {
            "id": "2100002021x7471541",
            "name": "AdultCompisition",
            "type": "FILE",
            "level": 2,
            "valueList": [
              { "key": "family", "value": 22, "checked": false },
              { "key": "persons", "value": 12, "checked": false }
            ]
          },
          {
            "id": "2100002021x747pp541",
            "name": "AdultCompisition11",
            "type": "FILE",
            "level": 2,
            "valueList": [
              { "key": "family", "value": 2, "checked": false },
              { "key": "persons", "value": 12, "checked": false }
            ]
          },
          {
            "id": "2100002021x747pp54q",
            "name": "Age",
            "type": "FILE",
            "level": 2,
            "valueList": [
              { "key": "6", "value": 12, "checked": false },
              { "key": "7", "value": 12, "checked": false },
              { "key": "30", "value": 12, "checked": false }
            ]
          },
          {
            "id": "3100002021x747pp54q",
            "name": "Education",
            "type": "FILE",
            "level": 2,
            "valueList": [
              { "key": "bachelor", "value": 133, "checked": false },
              { "key": "highSchool", "value": 5, "checked": false },
              { "key": "graduate", "value": 112, "checked": false },
              { "key": "phd", "value": 6, "checked": false },
              { "key": "college", "value": 6, "checked": false },
              { "key": "university", "value": 6, "checked": false }
            ]
          },
          {
            "id": "3100021x747pp54qdf",
            "name": "Gender",
            "type": "FILE",
            "level": 2,
            "valueList": [
              { "key": "Male", "value": 90, "checked": false },
              { "key": "Femal", "value": 12, "checked": false },
              { "key": "Unkonow", "value": 56, "checked": false }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "52566700200504225157",
    "name": "Nested0",
    "type": "DIR",
    "level": 0,
    "children": [
      {
        "id": "2w0rrt0202107071541",
        "name": "Nested1",
        "type": "DIR",
        "level": 1,
        "children": [
          {
            "id": "310vvgh747pp54qdf",
            "name": "Nested2",
            "type": "DIR",
            "level": 2,
            "children": [
              {
                "id": "310vvgh747pp54qdf",
                "name": "Nested3-0",
                "type": "FILE",
                "level": 3,
                "valueList": [
                  { "key": "aaa", "value": 30, "checked": false },
                  { "key": "bbb", "value": 37, "checked": false },
                  { "key": "fff", "value": 23, "checked": false },
                  { "key": "mmm", "value": 23, "checked": false },
                  { "key": "kkk", "value": 23, "checked": false },
                  { "key": "ss", "value": 23, "checked": false }
                ]
              },
              {
                "id": "310vvgh747@p54qdf",
                "name": "Nested3-1",
                "type": "FILE",
                "level": 3,
                "valueList": [
                  { "key": "xxx", "value": 14, "checked": false },
                  { "key": "yyy", "value": 53, "checked": false },
                  { "key": "zzz", "value": 76, "checked": false },
                  { "key": "qqw", "value": 23, "checked": false },
                  { "key": "rre", "value": 23, "checked": false },
                  { "key": "gbb", "value": 23, "checked": false }
                ]
              }
            ]
          },
          {
            "id": "rrio4557pp54qdf",
            "name": "Nested2.1",
            "type": "DIR",
            "level": 2,
            "children": [
              {
                "id": "rrio4557pp54@11",
                "name": "Nested3.1-0",
                "type": "FILE",
                "level": 3,
                "valueList": [
                  { "key": "aaa", "value": 77, "checked": false },
                  { "key": "bbb", "value": 37, "checked": false },
                  { "key": "ccc", "value": 19, "checked": false }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "520000200504225157",
    "name": "Other",
    "type": "DIR",
    "level": 0,
    "children": [
      {
        "id": "5aar198601202215",
        "name": "Area",
        "type": "FILE",
        "level": 1,
        "valueList": [
          { "key": "New Jersey", "value": 57, "checked": false },
          { "key": "New York", "value": 19, "checked": false },
          { "key": "Phoenix", "value": 3, "checked": false },
          { "key": "Chicago", "value": 23, "checked": false },
          { "key": "Miami", "value": 6, "checked": false },
          { "key": "Dallas", "value": 12, "checked": false },
          { "key": "San Francisco", "value": 2, "checked": false }
        ]
      },
      {
        "id": "45ww000198601202215",
        "name": "TaxRate",
        "type": "FILE",
        "level": 1,
        "valueList": [
          { "key": "20%", "value": 99, "checked": false },
          { "key": "30%", "value": 9, "checked": false },
          { "key": "50%", "value": 22, "checked": false }
        ]
      }
    ]
  }
];


export const handlers = [
  rest.get('*/audiences', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockAudiences));
  })
];