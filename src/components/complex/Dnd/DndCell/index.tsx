import {Draggable} from "@hello-pangea/dnd";
import {Children, FC, isValidElement} from "react";
import {IDndCellProps, IProps} from "./props";
import styled from "styled-components";

const StyledDndCell = styled.div<IDndCellProps>`
  border: #E1E7ED;
  border-radius: 8px;
  background: ${props => props.isDragging ? '#F5F7FA' : '#fff'};
  margin-bottom: 16px;
  opacity: ${props => props.isDragging ? '0.85' : '1'};
`;

export const DndCell: FC<IProps> = ({children, index, ...props}) => {
  const { id } = props.data;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <StyledDndCell
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* @barrelblur: Зачем происходит итерация по children? Что не так с элементами? */}
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
