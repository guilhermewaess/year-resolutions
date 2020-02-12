import React from 'react';
import styled from 'styled-components/native';
import { Resolution } from '../types/interfaces';
import { Text } from 'react-native';

interface Props {
  resolution: Resolution;
  index: number;
}

const ResolutionListItemContainer = styled.View`
  flex: 1;
`;

export const ResolutionListItem: React.FC<Props> = props => {
  return (
    <ResolutionListItemContainer>
      <Text>{props.index}</Text>
      <Text>{JSON.stringify(props.resolution)}</Text>
    </ResolutionListItemContainer>
  );
};
