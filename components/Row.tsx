import styled from 'styled-components/native';

interface Props {
  justify?:
    'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
    background?: string,
    fillHeight?: boolean
}

export const Row: React.FC<Props> = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  background-color: ${props => props.background || 'white' };
  height: ${props => props.fillHeight ? '100%' : 'auto'}; 
`;
