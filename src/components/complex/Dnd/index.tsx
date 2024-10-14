import {useState} from 'react';
import {
  DragDropContext,
  DropResult,
} from '@hello-pangea/dnd';
import Flexbox from "@components/surfaces/Flexbox";
import { IInitialDataColumn} from "@typing/TDnd";
import {IProps} from "@components/complex/Dnd/props";
import DndColumn from "@components/complex/DndColumn";

const Dnd = ({children, initialData}: IProps) => {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result: DropResult): void => {
    const {destination, source, draggableId } = result;

    // Если объект перетащили за область, в которую можно дропать
    if (!destination) {
      return;
    }

    // Если объект перетащили в то же самое место
    if (destination.droppableId === source.droppableId
      && destination.index === source.index) {
      return;
    }

    const SourceColumn = data.columns[source.droppableId];
    const SourceColumnWidgetIds = Array.from(SourceColumn.widgetIds);
    SourceColumnWidgetIds.splice(source.index, 1);

    const newSourceColumn = {
      ...SourceColumn,
      widgetIds: SourceColumnWidgetIds,
    };

    const DestColumn = data.columns[destination.droppableId];
    const DestColumnWidgetIds = Array.from(DestColumn.widgetIds);

    let newDestColumn: IInitialDataColumn;

    if (SourceColumn.id !== DestColumn.id) {
      DestColumnWidgetIds.splice(destination.index, 0, draggableId);

      newDestColumn = {
        ...DestColumn,
        widgetIds: DestColumnWidgetIds,
      };
    } else {
      SourceColumnWidgetIds.splice(destination.index, 0, draggableId);

      newDestColumn = {
        ...SourceColumn,
        widgetIds: SourceColumnWidgetIds,
      };
    }

    setData((prevData) => ({
      ...prevData,
      columns: {
        ...prevData.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestColumn.id]: newDestColumn,
      }
    }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Flexbox $gap="16px">
        {
          data.columnOrder.map(item => {
            const column = data.columns[item];
            const widgets = column.widgetIds.map(widgetId => data.widgets[widgetId]);

            return (
              <DndColumn key={column.id} column={column} widgets={widgets} children={children} />
            );
          })
        }
      </Flexbox>
    </DragDropContext>
  );
}

export default Dnd;
