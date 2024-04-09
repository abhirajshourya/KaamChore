import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWithInsets from '../../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../../styles/main';
import { AntDesign } from '@expo/vector-icons';
import { getAllChores } from '../../../../controllers/chores-controller';
import ChoreCard from '../../../../components/ChoreCard/ChoreCard';

const Group = ({ route, navigation }) => {
  const data = route.params.data;
  const groupId = data.id;

  const [chores, setChores] = useState(getAllChores(groupId));

  return (
    <SafeAreaWithInsets>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            paddingRight: 20,
          }}
          onPress={() => {
            navigation.pop();
          }}
        >
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            flex: 1,
          }}
        >
          {data.name}
        </Text>

        <TouchableOpacity
          style={{
            paddingLeft: 20,
          }}
          onPress={() => {
            navigation.pop();
          }}
        >
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
        {chores.map((chore, index) => {
          return ChoreCard({ index, chore });
        })}
      </ScrollView>
    </SafeAreaWithInsets>
  );
};

export default Group;
