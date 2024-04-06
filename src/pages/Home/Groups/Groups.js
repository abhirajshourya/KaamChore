import React, { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaWithInsets from '../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../styles/main';
import GroupCard from '../../../components/GroupCard/GroupCard';
import { AntDesign } from '@expo/vector-icons';
import { getGroups } from '../../../controllers/group-controller';

const Groups = () => {
  const [Groups, setGroups] = useState(getGroups());
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        {Groups.map((group, index) => (
          <GroupCard key={index + 1} index={index} data={group} />
        ))}
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
          </View>
        </View>
      </Modal>
    </SafeAreaWithInsets>
  );
};

export default Groups;
