import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles/main';

const GroupCard = ({ index }) => {
  return (
    <View style={styles.card} key={index + 1}>
      <View>
        <Text style={styles.cardText}>Group {index + 1}</Text>
        <Text style={styles.cardSubText}>Darshan checked-in</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.cardText}>3/7</Text>
        <Text style={styles.cardSubText}>Completed</Text>
      </View>
    </View>
  );
};

export default GroupCard;
