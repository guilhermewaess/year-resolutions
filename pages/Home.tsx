import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Row } from '../components/Row';
import AwesomeButton from 'react-native-really-awesome-button';
import { ResolutionModal } from '../components/ResolutionModal';
import { Resolution } from '../types/interfaces';
import { Column } from '../components/Column';

const HomeContainer = styled.View`
  flex: 1;
`;

export const Home: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [resolution, setResolution] = useState<Resolution>({
    date: new Date(),
    text: ''
  });

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
          resolution={resolution}
          onResolutionChange={setResolution}
        />
      </Row>
      <Row fillHeight>
        <Column>
          <Text>{JSON.stringify(resolution)}</Text>
        </Column>
      </Row>
    </HomeContainer>
  );
};
