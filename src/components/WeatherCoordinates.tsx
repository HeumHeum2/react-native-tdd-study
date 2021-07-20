import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {View, StyleSheet, TextInput} from 'react-native';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Colors} from '../constants';
import Button from './Button';

type FormValues = {
  latitude: string;
  longitude: string;
};

function WeatherCoordinates() {
  const navigation = useNavigation();

  const form = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: 'onChange',
  });

  const handleSubmit = form.handleSubmit(values => {
    navigation.navigate('Weather', values);
  });
  return (
    <View testID="weather-coordinates">
      <View style={styles.inputs}>
        <Controller
          control={form.control}
          render={({field}) => {
            const {onChange, ...props} = field;
            return (
              <TextInput
                {...props}
                testID="weather-coordinates-latitude"
                onChangeText={onChange}
                style={styles.input}
                placeholder="Lat"
                placeholderTextColor={Colors.GRAY}
              />
            );
          }}
          name="latitude"
        />
        <Controller
          control={form.control}
          render={({field}) => {
            const {onChange, ...props} = field;
            return (
              <TextInput
                {...props}
                testID="weather-coordinates-longitude"
                onChangeText={onChange}
                style={styles.input}
                placeholder="Long"
                placeholderTextColor={Colors.GRAY}
              />
            );
          }}
          name="longitude"
        />
      </View>
      <Button onPress={handleSubmit} label="find" />
    </View>
  );
}

const defaultValues: FormValues = {
  latitude: '',
  longitude: '',
};

const validationSchema = Yup.object().shape({
  latitude: Yup.number(),
  longitude: Yup.number(),
});

const styles = StyleSheet.create({
  inputs: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  input: {
    backgroundColor: Colors.TRANSPARENT,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: Colors.WHITE,
  },
});

export default WeatherCoordinates;
