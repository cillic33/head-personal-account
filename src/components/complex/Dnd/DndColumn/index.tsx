import {Droppable} from "@hello-pangea/dnd";
import DndCell from "@components/complex/Dnd/DndCell";
import styled from "styled-components";
import {ICellListProps, IProps} from "./props";
import {theme} from "@utils/theme/theme";

const StyledDndColumn = styled.div`
  width: calc(100% / 3 - 16px * 2 / 3);
  
  @media (max-width: ${theme.breakpoints.m}) {
    width: calc(100% / 2 - 16px / 2);
  }

  @media (max-width: ${theme.breakpoints.s}) {
    width: 100%;
  }
`;

const StyledCellList = styled.div<ICellListProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.$isDraggingOver ? '#bcbcbc14' : 'transparent'};
  border-radius: 8px;
`;

// @barrelblur: неправильно размечена функция
const DndColumn = ({children, cells, ...props}: IProps) => {
  const {id} = props.column;

  return (
    <StyledDndColumn>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <StyledCellList
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            {cells.map((cell, idx) => (
                /* @barrelblur: Почему принимаешь children через атрибут, а не через вложение, как если бы обернула значение с помощью тега */
                /* @barrelblur: использую передачу children через оборачивания тега */
              <DndCell key={cell.id} data={cell} index={idx} children={children} />
            ))}
            {provided.placeholder}
          </StyledCellList>
        )}
      </Droppable>
    </StyledDndColumn>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default DndColumn;
