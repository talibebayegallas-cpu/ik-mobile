import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}) => {
  const styles = StyleSheet.create({
    primary: {
      backgroundColor: '#00A84F',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondary: {
      backgroundColor: '#E8F5E9',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#00A84F',
    },
    tertiary: {
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    secondaryText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#00A84F',
    },
    tertiaryText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#00A84F',
    },
  });

  const buttonStyle = variant === 'primary' ? styles.primary : variant === 'secondary' ? styles.secondary : styles.tertiary;
  const textColor = variant === 'primary' ? styles.text : variant === 'secondary' ? styles.secondaryText : styles.tertiaryText;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[buttonStyle, disabled && styles.disabled, style]}>
      <Text style={[textColor, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;