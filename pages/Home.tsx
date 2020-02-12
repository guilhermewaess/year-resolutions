import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Row } from '../components/Row';
import AwesomeButton from 'react-native-really-awesome-button';
import { ResolutionModal } from '../components/ResolutionModal';
import { Resolution } from '../types/interfaces';
import { Column } from '../components/Column';
import { ResolutionList } from '../components/ResolutionList';

const HomeContainer = styled.View`
  flex: 1;
`;

export const Home: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [resolutions, setResolutions] = useState<Resolution[]>([]);

  const onAddResolution = resolution => {
    resolution.text = Math.random().toString()
    setResolutions([...resolutions, resolution]);
    setShowAddModal(false);
  };
  return (
    <HomeContainer>
      <Row justify='center'>
        <AwesomeButton
          width={150}
          onPress={() => {
            setShowAddModal(true);
          }}
        >
          <Text>+ ADD</Text>
        </AwesomeButton>

        <ResolutionModal
          showModal={showAddModal}
          onModalClose={() => setShowAddModal(false)}
          onAddResolution={onAddResolution}
        />
      </Row>
      <Row fillHeight>
        <Column>
          <ResolutionList resolutions={resolutions} />
        </Column>
      </Row>
    </HomeContainer>
  );
};
