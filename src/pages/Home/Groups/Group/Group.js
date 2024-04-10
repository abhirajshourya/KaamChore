import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaWithInsets from '../../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../../styles/main';
import { AntDesign } from '@expo/vector-icons';
import { getAllChores, getGroupChores } from '../../../../controllers/chores-controller';
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
  const [chores, setChores] = useState({});

  const dispatch = useDispatch();
  const Groups = useSelector((state) => state.groups.value);

  const onDeleteHandler = () => {
    deleteGroup(groupId).then(() => {
      const newGroups = { ...Groups };
      delete newGroups[groupId];
      dispatch(setGroups(newGroups));
      navigation.pop();
    });
  };

  const fetchChores = async () => {
    let groupChores = {};
    getGroupChores(groupId).then((chores) => {
      const promises = chores.map((choreId) => {
        return getAllChores().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id === choreId) {
              groupChores = {
                ...groupChores,
                [choreId]: doc.data(),
              };
            }
          });
        });
      });
      Promise.all(promises).then(() => {
        setChores(groupChores);
      });
    });
  };

  useEffect(() => {
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
            Alert.alert('Delete Group', 'Are you sure you want to delete this group?', [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Delete',
                onPress: onDeleteHandler,
              },
            ]);
          }}
        >
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
        {Object.keys(chores).length > 0 ? (
          Object.keys(chores).map((choreId) => {
            const chore = chores[choreId];
            return <ChoreCard key={choreId} chore={chore} />;
          })
        ) : (
          <Text>No chores found</Text>
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
