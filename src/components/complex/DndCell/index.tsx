import {Draggable} from "@hello-pangea/dnd";
import {Children, isValidElement} from "react";
import {IDndCellProps, IProps} from "./props";
import styled from "styled-components";

const StyledDndCell = styled.div<IDndCellProps>`
  border: #E1E7ED;
  border-radius: 8px;
  background: ${props => props.$isDragging ? '#F5F7FA' : '#fff'};
  margin-bottom: 16px;
  opacity: ${props => props.$isDragging ? '0.85' : '1'};
`;

const DndCell = ({children, index, ...props}: IProps) => {
  const { id } = props.data;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <StyledDndCell
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          $isDragging={snapshot.isDragging}
        >
          {Children.toArray(children).find((child) => {
            if (isValidElement<{id: string}>(child)) {
              if (child.props.id == id) {
                return child;
              }
            }
            return;
          })}
        </StyledDndCell>
      )}
    </Draggable>
  )
}
export default DndCell;
