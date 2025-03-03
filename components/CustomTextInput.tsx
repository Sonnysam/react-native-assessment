import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '~/constants/Colors';

interface TextInputProps {
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  isPassword?: boolean;
  required?: string;
  showIcon?: boolean;
}

const CustomTextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  style,
  labelStyle,
  inputStyle,
  isPassword = false,
  required,
  showIcon = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, labelStyle]}>
        {label} <Text style={styles.required}>{required}</Text>
      </Text>
      <View style={styles.inputContainer}>
        {showIcon && (
          <View style={styles.iconContainer}>
            <Ionicons
              name={isPassword ? 'lock-closed-outline' : 'mail-outline'}
              size={20}
              color={Colors.input}
            />
          </View>
        )}
        <TextInput
          style={[styles.input, showIcon && styles.inputWithIcon, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={Colors.text}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword ? !showPassword : secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          cursorColor={Colors.primary}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color={Colors.text} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
    color: Colors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
    backgroundColor: Colors.input,
    opacity: 0.5,
    height: 45,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 13,
  },
  inputWithIcon: {
    paddingLeft: 5,
  },
  passwordToggle: {
    padding: 10,
  },
  required: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: 'bold',
  },
  iconContainer: {
    paddingLeft: 10,
    paddingRight: 5,
  },
});

export default CustomTextInput;
