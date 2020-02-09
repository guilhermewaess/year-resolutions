import React, { useState } from 'react';
import { Text, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Row } from '../components/Row';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeContainer = styled.View`
  flex: 1;
`;

export const Home: React.FC = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <HomeContainer>
      <Row>
        <DateTimePicker
          testID='dateTimePicker'
          timeZoneOffsetInMinutes={0}
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
        <Text>Banana</Text>
      </Row>
    </HomeContainer>
  );
};
