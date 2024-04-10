import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaWithInsets from '../../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../../styles/main';
import { AntDesign } from '@expo/vector-icons';
import { getAllChores } from '../../../../controllers/chores-controller';
import ChoreCard from '../../../../components/ChoreCard/ChoreCard';
import { deleteGroup } from '../../../../controllers/group-controller';
import { useDispatch, useSelector } from 'react-redux';
import { setGroups } from '../../../../redux/groupsSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MemberList from '../../../../components/MemberList/MemberList';

const Group = ({ route, navigation }) => {
  const data = route.params.data;
  const groupId = route.params.groupId;

  const [isMembersModalVisible, setIsMembersModalVisible] = useState(false);
  const [chores, setChores] = useState([]);

  const dispatch = useDispatch();
  const Groups = useSelector((state) => state.groups.value);

  useEffect(() => {
    const fetchChores = async () => {
      getAllChores(groupId).then((data) => {
        setChores(data);
      });
    };

    fetchChores();
  }, []);

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
            paddingRight: 20,
          }}
          onPress={() => {
            setIsMembersModalVisible(true);
          }}
        >
          <MaterialCommunityIcons name="account-group" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingRight: 20,
          }}
          onPress={() => {
            navigation.navigate('AddChore', { groupId, members: data.members });
          }}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteGroup(groupId).then(() => {
              const newGroups = { ...Groups };
              delete newGroups[groupId];
              dispatch(setGroups(newGroups));
              navigation.pop();
            });
          }}
        >
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
        {chores.length > 0 ? (
          chores.map((chore, index) => {
            return ChoreCard({ index, chore });
          })
        ) : (
          <Text style={styles.noItemInList}>Tap '+' to add chores!</Text>
        )}
      </ScrollView>
      <MemberList
        setIsMembersModalVisible={setIsMembersModalVisible}
        isMembersModalVisible={isMembersModalVisible}
        members={data.members}
      />
    </SafeAreaWithInsets>
  );
};

export default Group;
