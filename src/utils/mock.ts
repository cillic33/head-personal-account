import {IInitialData} from "@typing/TDnd";

export const MInitialData: IInitialData = {
  widgets: {
    'widget-1': { id: 'widget-1', content: 'Заявки на утверждение'},
    'widget-2': { id: 'widget-2', content: 'Мои заместители'},
    'widget-3': { id: 'widget-3', content: 'Занятость сотрудников'},
    'widget-4': { id: 'widget-4', content: 'Сотрудники'},
    'widget-5': { id: 'widget-5', content: 'TS за отчетную неделю'},
    'widget-6': { id: 'widget-6', content: 'Отсутствия'},
    'widget-7': { id: 'widget-7', content: 'Индекс счастья'},
    'widget-8': { id: 'widget-8', content: 'Мониторинг настроения'},
    'widget-9': { id: 'widget-9', content: 'Мои ссылки'},
    'widget-10': { id: 'widget-10', content: 'Обучение'},
    'widget-11': { id: 'widget-11', content: 'Движение персонала'},
    'widget-12': { id: 'widget-12', content: 'Актуальность профилей'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      widgetIds: ['widget-1', 'widget-2', 'widget-3'],
    },
    'column-2': {
      id: 'column-2',
      widgetIds: ['widget-4', 'widget-5', 'widget-6', 'widget-7', 'widget-8'],
    },
    'column-3': {
      id: 'column-3',
      widgetIds: ['widget-9', 'widget-10', 'widget-11', 'widget-12'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}
