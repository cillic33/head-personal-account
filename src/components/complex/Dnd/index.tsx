import {Children, isValidElement, useState} from 'react';
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import Flexbox from "@components/surfaces/Flexbox";
import {IColumn, IInitialDataColumn, IWidget} from "@typing/TDnd";
import {IProps} from "@components/complex/Dnd/props";

const ContainerColumn = styled.div`
`;

const WidgetList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerWidget = styled.div`
  border: #E1E7ED;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

const Widget = ({children, index, ...props}: IWidget) => {
  const { id } = props.data;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <ContainerWidget
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {Children.toArray(children).find((child) => {
            if (isValidElement<{id: string}>(child)) {
              if (child.props.id == id) {
                return child;
              }
            }
            return;
          })}
        </ContainerWidget>
      )}
    </Draggable>
  )
}

const Column = ({children, widgets, ...props}: IColumn) => {
  const {id} = props.column;

  return (
    <ContainerColumn>
      <Droppable droppableId={id}>
        {(provided) => (
          <WidgetList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {widgets.map((widget, idx) => (
              <Widget key={widget.id} data={widget} index={idx} children={children} />
            ))}
            {provided.placeholder}
          </WidgetList>
        )}
      </Droppable>
    </ContainerColumn>
  );
}

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
              <Column key={column.id} column={column} widgets={widgets} children={children} />
            );
          })
        }
      </Flexbox>
    </DragDropContext>
  );
}

export default Dnd;
