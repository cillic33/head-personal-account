import {Droppable} from "@hello-pangea/dnd";
import DndWidget from "@components/complex/DndWidget";
import styled from "styled-components";
import {Props} from "./props";

const StyledDndColumn = styled.div`
`;

const StyledWidgetList = styled.div`
  display: flex;
  flex-direction: column;
`;

const DndColumn = ({children, widgets, ...props}: Props) => {
  const {id} = props.column;

  return (
    <StyledDndColumn>
      <Droppable droppableId={id}>
        {(provided) => (
          <StyledWidgetList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {widgets.map((widget, idx) => (
              <DndWidget key={widget.id} data={widget} index={idx} children={children} />
            ))}
            {provided.placeholder}
          </StyledWidgetList>
        )}
      </Droppable>
    </StyledDndColumn>
  );
}

export default DndColumn;
