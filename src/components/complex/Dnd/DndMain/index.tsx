import {useState} from 'react';
import {
  DragDropContext,
  DropResult,
} from '@hello-pangea/dnd';
import Flexbox from "@components/surfaces/Flexbox";
import { IInitialDataColumn} from "@typing/TDnd";
import {IProps} from "@components/complex/Dnd/DndMain/props";
import DndColumn from "@components/complex/Dnd/DndColumn";

// @barrelblur: неправильно размечена функция
const DndMain = ({children, initialData}: IProps) => {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result: DropResult): void => {
    const {destination, source, draggableId } = result;

    // Если объект перетащили за область, в которую можно дропать
    if (!destination) {
      return;
    }

    // Если объект перетащили в то же самое место
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const SourceColumn = data.columns[source.droppableId];
    const SourceColumnCellIds = Array.from(SourceColumn.cellIds);
    SourceColumnCellIds.splice(source.index, 1);

    const newSourceColumn = {
      ...SourceColumn,
      cellIds: SourceColumnCellIds,
    };

    const DestColumn = data.columns[destination.droppableId];
    const DestColumnCellIds = Array.from(DestColumn.cellIds);

    let newDestColumn: IInitialDataColumn;

    if (SourceColumn.id !== DestColumn.id) {
      DestColumnCellIds.splice(destination.index, 0, draggableId);

      newDestColumn = {
        ...DestColumn,
        cellIds: DestColumnCellIds,
      };
    } else {
      SourceColumnCellIds.splice(destination.index, 0, draggableId);

      newDestColumn = {
        ...SourceColumn,
        cellIds: SourceColumnCellIds,
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
      <Flexbox gap="16px" $width="100%">
        {
          data.columnOrder.map(item => {
            const column = data.columns[item];
            const cells = column.cellIds.map(cellId => data.cells[cellId]);

            return (
              <DndColumn key={column.id} column={column} cells={cells} children={children} />
            );
          })
        }
      </Flexbox>
    </DragDropContext>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default DndMain;
