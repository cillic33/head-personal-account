import {IInitialData} from "@typing/TDnd";
import {TApplications} from "@typing/TApplications";

export const MInitialData: IInitialData = {
  cells: {
    'widget-1': { id: 'widget-1'},
    'widget-2': { id: 'widget-2'},
    'widget-3': { id: 'widget-3'},
    'widget-4': { id: 'widget-4'},
    'widget-5': { id: 'widget-5'},
    'widget-6': { id: 'widget-6'},
    'widget-7': { id: 'widget-7'},
    'widget-8': { id: 'widget-8'},
    'widget-9': { id: 'widget-9'},
    'widget-10': { id: 'widget-10'},
    'widget-11': { id: 'widget-11'},
    'widget-12': { id: 'widget-12'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      cellIds: ['widget-1', 'widget-2', 'widget-3'],
    },
    'column-2': {
      id: 'column-2',
      cellIds: ['widget-4', 'widget-5', 'widget-6', 'widget-7', 'widget-8'],
    },
    'column-3': {
      id: 'column-3',
      cellIds: ['widget-9', 'widget-10', 'widget-11', 'widget-12'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

// Заявки на утверждение
export const MApplications: TApplications = [
  {
    id: 'all',
    title: 'Всего сегодня',
    important: 5,
    increase: 10,
    count: 160,
  },
  {
    id: '1',
    title: 'Заявка на обучение',
    important: 0,
    increase: 1,
    count: 5,
  },
  {
    id: '3',
    title: 'Заявка на отсутствие',
    important: 0,
    increase: 1,
    count: 6,
  },
  {
    id: '4',
    title: 'Увольнение/перевод ',
    important: 1,
    increase: 0,
    count: 10,
  },
  {
    id: '5',
    title: 'Командировка',
    important: 0,
    increase: 1,
    count: 80,
  },
  {
    id: '6',
    title: 'Работа в выходной день',
    important: 0,
    increase: 0,
    count: 10,
  },
  {
    id: '7',
    title: 'Проектный отгул',
    important: 1,
    increase: 1,
    count: 10,
  },
  {
    id: '8',
    title: 'Эл. обходной лист',
    important: 0,
    increase: 0,
    count: 10,
  },
  {
    id: '9',
    title: 'Утверждение TS',
    important: 0,
    increase: 0,
    count: 10,
  },
  {
    id: '10',
    title: 'Профили на утверждении',
    important: 0,
    increase: 1,
    count: 10,
  },
  {
    id: '11',
    title: 'Вакансии',
    important: 1,
    increase: 0,
    count: 10,
  },
  {
    id: '12',
    title: 'Офферы',
    important: 1,
    increase: 1,
    count: 10,
  },
  {
    id: '13',
    title: 'Прочие ОЦО',
    important: 1,
    increase: 1,
    count: 10,
  },
]
