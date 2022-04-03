import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface LinkedTextProps {
  href?: string,
  children: string;
}

const LinkedText: React.FC<LinkedTextProps> = ({ href, children }) => {
  return (
    <Text style={styles.base}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
  base: {
    color: '#4E82EA',
    fontSize: 12
  }
})

export default LinkedText
