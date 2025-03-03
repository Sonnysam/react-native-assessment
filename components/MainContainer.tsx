import { Platform, ScrollView, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../constants/Colors';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
});

export default MainContainer;
