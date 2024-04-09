import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles/main';

const ChoreCard = ({ index, chore }) => {
  return (
    <View style={styles.card} key={index + 1}>
      <View>
        <Text style={styles.cardText}>{chore.name}</Text>
        <Text style={styles.cardSubText}>Assignee: {chore.assignee}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.cardText}>{chore.status}</Text>
      </View>
    </View>
  );
};

export default ChoreCard;
