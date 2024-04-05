import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles/main';

const ChoreCard = ({ index }) => {
  return (
    <View style={styles.card} key={index + 1}>
      <View>
        <Text style={styles.cardText}>Chore {index + 1}</Text>
        <Text style={styles.cardSubText}>Assigned to Darshan</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.cardText}>Due 8pm</Text>
        <Text style={styles.cardSubText}>Overdue</Text>
      </View>
    </View>
  );
};

export default ChoreCard;
