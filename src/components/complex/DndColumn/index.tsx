import {Droppable} from "@hello-pangea/dnd";
import DndCell from "@components/complex/DndCell";
import styled from "styled-components";
import {ICellListProps, IProps} from "./props";

const StyledDndColumn = styled.div`
`;

const StyledCellList = styled.div<ICellListProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.isDraggingOver ? '#e9edf1' : 'transparent'};
  border-radius: 8px;
`;

const DndColumn = ({children, cells, ...props}: IProps) => {
  const {id} = props.column;

  return (
    <StyledDndColumn>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <StyledCellList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {cells.map((cell, idx) => (
              <DndCell key={cell.id} data={cell} index={idx} children={children} />
            ))}
            {provided.placeholder}
          </StyledCellList>
        )}
      </Droppable>
    </StyledDndColumn>
  );
}

export default DndColumn;
