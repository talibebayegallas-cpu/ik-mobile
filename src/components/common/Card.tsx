import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline';
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, variant = 'default', style }) => {
  const styles = StyleSheet.create({
    default: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    elevated: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    outline: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
  });

  const cardStyle = variant === 'elevated' ? styles.elevated : variant === 'outline' ? styles.outline : styles.default;

  return <View style={[cardStyle, style]}>{children}</View>;
};

export default Card;