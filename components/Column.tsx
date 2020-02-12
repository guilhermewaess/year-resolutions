import styled from 'styled-components/native';

interface Props {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  background?: string;
}

export const Column: React.FC<Props> = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.justify || 'flex-start'};
  background-color: ${props => props.background || 'white'};
  padding: 4px;
`;
