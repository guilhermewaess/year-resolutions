import React from 'react';
import styled from 'styled-components/native';
import { Resolution } from '../types/interfaces';
import { Row } from './Row';
import { Column } from './Column';
import { ResolutionListItem } from './ResolutionListItem';
import { FlatList } from 'react-native';

interface Props {
  resolutions: Resolution[];
}

const ResolutionListContainer = styled.View`
  flex: 1;
`;

export const ResolutionList: React.FC<Props> = props => {
  return (
    <Row fillHeight>
      <Column>
        <ResolutionListContainer>
          <FlatList
            data={props.resolutions}
            keyExtractor={(resolution, index) => `${index}-item`}
            renderItem={itemData => (
              <ResolutionListItem
                resolution={itemData.item}
                index={itemData.index}
              />
            )}
          />
        </ResolutionListContainer>
      </Column>
    </Row>
  );
};
