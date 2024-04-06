import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/main';

const GroupCard = ({ index, data }) => {
  return (
    <TouchableOpacity style={styles.card} key={index + 1} activeOpacity={0.7}>
      <View>
        <Text style={styles.cardText}>{data.name}</Text>
        <Text style={styles.cardSubText}>{data.recentActivity}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.cardText}>
          {data.completedChores}/{data.totalChores}
        </Text>
        <Text style={styles.cardSubText}>Completed</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GroupCard;
