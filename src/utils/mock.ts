import {IInitialData} from "@typing/TDnd";

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
