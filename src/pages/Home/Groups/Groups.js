import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import GroupCard from '../../../components/GroupCard/GroupCard';
import { AntDesign } from '@expo/vector-icons';
import { createGroup, filterGroupByUser, getGroups } from '../../../controllers/group-controller';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Group from './Group/Group';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../../../redux/groupsSlice';
import AddChore from './AddChore/AddChore';

const GroupsPage = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [members, setMembers] = useState([]);

  const Groups = useSelector((state) => state.groups.value);
  const dispatch = useDispatch();

  const addMember = () => {
    const email = memberEmail;
    if (email !== '') {
      setMembers((members) => [...members, email]);
      setMemberEmail(() => '');
    }
    console.log(members);
  };

  const fetchGroups = async () => {
    let groups = {};
    getGroups()
      .then((dataSnapshot) => {
        dataSnapshot.forEach((doc) => {
          const groupId = doc.id;
          const group = doc.data();
          if (filterGroupByUser(group)) {
            console.log('Group: ', group);
            groups = {
              ...groups,
              [groupId]: group,
            };
          }
        });
      })
      .finally(() => {
        console.log('Groups: ', groups);
        dispatch(setGroups(groups));
      });
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <SafeAreaWithInsets>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Groups</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            setIsModalVisible(true);
          }}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
        {Object.keys(Groups).length > 0 ? (
          Object.keys(Groups).map((groupId) => (
            <GroupCard
              key={groupId}
              groupId={groupId}
              data={Groups[groupId]}
              navigation={navigation}
            />
          ))
        ) : (
          <Text style={styles.noItemInList}>No groups found</Text>
        )}
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Create Group</Text>
              <TouchableOpacity
                style={styles.modalIcon}
                onPress={() => {
                  setIsModalVisible(false);
                }}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalDivider} />
            <View style={styles.modalBody}>
              <Text style={styles.modalLabel}>Group Name</Text>
              <View style={styles.modalInputView}>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Group Name"
                  onChangeText={(text) => {
                    setGroupName(text);
                  }}
                />
              </View>
              <Text style={styles.modalLabel}>Members</Text>
              <View style={styles.modalInputView}>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Member's Email"
                  onChangeText={(text) => {
                    setMemberEmail(text);
                  }}
                  defaultValue={memberEmail}
                />
                <TouchableOpacity
                  onPress={() => {
                    addMember(memberEmail);
                  }}
                  underlayColor="#DDDDDD"
                  style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={{
                  maxHeight: 200,
                  marginBottom: 20,
                }}
              >
                {members.map((member, index) => (
                  <View
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 10,
                      padding: 10,
                    }}
                  >
                    <Text style={styles.cardSubText}>{member}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setMembers(members.filter((m) => m !== member));
                      }}
                      underlayColor="#DDDDDD"
                      style={{
                        width: '10%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={async () => {
                  const group = {
                    name: groupName,
                    members: members,
                    chores: [],
                    recentActivity: 'no new activity yet',
                    totalChores: 0,
                    completedChores: 0,
                  };
                  console.log('Creating group: ', group);
                  const groupRef = await createGroup(group);
                  dispatch(setGroups({ ...Groups, [groupRef.id]: group }));
                  setMembers([]);
                  setIsModalVisible(false);
                }}
              >
                <Text style={styles.modalButtonText}>Create Group</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaWithInsets>
  );
};

const Groups = () => {
  const GroupsStack = createNativeStackNavigator();

  return (
    <GroupsStack.Navigator
      initialRouteName="GroupsPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <GroupsStack.Screen name="GroupsPage" component={GroupsPage} />
      <GroupsStack.Screen name="Group" component={Group} />
      <GroupsStack.Screen name="AddChore" component={AddChore} />
    </GroupsStack.Navigator>
  );
};

export default Groups;
