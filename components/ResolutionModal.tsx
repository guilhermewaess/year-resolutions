import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Text, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AwesomeButton from 'react-native-really-awesome-button';
import { Row } from './Row';
import { Column } from './Column';
import { Resolution } from '../types/interfaces';
import { RTextInput } from './TextInput';

interface Props {
  showModal: boolean;
  resolution: Resolution;
  onResolutionChange: Dispatch<SetStateAction<Resolution>>;
}

export const ResolutionModal: React.FC<Props> = props => {
  const [resolution, setResolution] = useState<Resolution>({
    ...props.resolution
  });

  const [showModal, setShowModal] = useState<boolean>(props.showModal);
  useEffect(() => {
    setShowModal(props.showModal);
  }, [props.showModal]);

  const onResolutionChange = (newResolution: Partial<Resolution>) => {
    debugger;
    setResolution({
      ...resolution,
      ...newResolution
    });
  };

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={showModal}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}
    >
      <Row fillHeight={true}>
        <Column justify='center'>
          <RTextInput
            onChangeText={text => onResolutionChange({ text })}
            value={resolution.text}
          />
          <DateTimePicker
            style={{ width: '100%', backgroundColor: 'white' }} //https://github.com/react-native-community/react-native-datetimepicker/issues/71
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={resolution.date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={(_, date) => onResolutionChange({ date: date })}
          />
          <AwesomeButton
          width={150}
          onPress={() => {
            props.onResolutionChange(resolution)
            setShowModal(false)
          }}
        >
          <Text>Add Resolution</Text>
        </AwesomeButton>
        </Column>
      </Row>
    </Modal>
  );
};
