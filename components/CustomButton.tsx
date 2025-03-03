import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { Colors } from '../constants/Colors';

interface CustomButtonProps {
  title: string | JSX.Element;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  customButtonStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  customButtonStyle,
  customTextStyle,
  loading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton, customButtonStyle]}
      {...props}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle, disabled && styles.disabledText]}>
        {loading ? 'Loading...' : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.button,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: Colors.link,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: Colors.primary + '35',
  },
  disabledText: {
    color: Colors.text,
  },
});

export default CustomButton;
