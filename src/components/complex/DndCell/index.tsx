import {Draggable} from "@hello-pangea/dnd";
import {Children, isValidElement} from "react";
import {Props} from "./props";
import styled from "styled-components";

const StyledDndCell = styled.div`
  border: #E1E7ED;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

const DndCell = ({children, index, ...props}: Props) => {
  const { id } = props.data;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <StyledDndCell
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
        </StyledDndCell>
      )}
    </Draggable>
  )
}
export default DndCell;
