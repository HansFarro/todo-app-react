import styled from "styled-components";

export const TodoDiv = styled.div`
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
`;

export const TodoItem = styled.li`
  flex: 1;
  padding: 0rem 0.5rem;
`;

export const TodoLine = styled.li`
  flex: 1;
  padding: 0rem 0.5rem;
  -webkit-text-decoration-line: line-through; /* Safari */
  text-decoration-line: line-through; 
  opacity: 0.5;
`;

export const TodoButton = styled.button`
  background: #002c61;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

export const CheckButton = styled(TodoButton)`
  background: rgb(11, 212, 162);
`;

export const TrashButton = styled(TodoButton)`
  background: rgb(255, 0, 0);
`;
