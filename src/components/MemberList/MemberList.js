import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/main';
import { AntDesign } from '@expo/vector-icons';

const MemberList = ({ setIsMembersModalVisible, isMembersModalVisible, members }) => {
  return (
    <Modal
      visible={isMembersModalVisible}
      animationType="fade"
      transparent
      onRequestClose={() => {
        setIsMembersModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalText}>Members List</Text>
            <TouchableOpacity
              style={styles.modalIcon}
              onPress={() => {
                setIsMembersModalVisible(false);
              }}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalDivider} />
          <View style={styles.modalBody}>
            {members.length > 0 ? (
              members.map((member, index) => (
                <View key={index} style={styles.modalMember}>
                  <Text style={styles.modalMemberText}>{member}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.modalMemberText}>No members in this group</Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MemberList;
