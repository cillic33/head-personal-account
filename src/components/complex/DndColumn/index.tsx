import {Droppable} from "@hello-pangea/dnd";
import DndCell from "@components/complex/DndCell";
import styled from "styled-components";
import {Props} from "./props";

const StyledDndColumn = styled.div`
`;

const StyledCellList = styled.div`
  display: flex;
  flex-direction: column;
`;

const DndColumn = ({children, cells, ...props}: Props) => {
  const {id} = props.column;

  return (
    <StyledDndColumn>
      <Droppable droppableId={id}>
        {(provided) => (
          <StyledCellList
            ref={provided.innerRef}
            {...provided.droppableProps}
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
