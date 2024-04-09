import React, { useState } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import GroupCard from '../../../components/GroupCard/GroupCard';
import { AntDesign } from '@expo/vector-icons';
import { createGroup, getGroups } from '../../../controllers/group-controller';

const Groups = () => {
  const [Groups, setGroups] = useState(getGroups());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [members, setMembers] = useState([]);

  const addMember = () => {
    const email = memberEmail;
    if (email !== '') {
      setMembers((members) => [...members, email]);
      setMemberEmail((memberEmail) => '');
    }
    console.log(members);
  };

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
        {Groups.length !== 0 ? (
          Groups.map((group, index) => <GroupCard key={index + 1} index={index} data={group} />)
        ) : (
          <Text style={styles.noItemInList}>Tap '+' to create a new Group!</Text>
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
            <View style={styles.modalBody}>
              <Text style={styles.modalLabel}>Group Name</Text>
              <View style={styles.modalInputView}>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Group Name"
                  onChangeText={(text) => {
                    setGroupName(text);
                  }}
                  defaultValue={groupName}
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
              <View>
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
              </View>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  const group = {
                    id: Groups.length + 1,
                    name: groupName,
                    members: members.map((member, index) => ({
                      id: index + 1,
                      email: member,
                    })),
                    chores: [],
                    recentActivity: 'no new activity yet',
                    totalChores: 0,
                    completedChores: 0,
                  };
                  createGroup(group);
                  setGroups(getGroups());
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

export default Groups;
