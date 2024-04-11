import { View, Text, TouchableOpacity, Alert, Modal, TextInput, Switch } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/main';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setChores } from '../../redux/choresSlice';
import { deleteChore, updateChore } from '../../controllers/chores-controller';
import { getGroup, updateGroup } from '../../controllers/group-controller';
import { setGroups } from '../../redux/groupsSlice';

export const choreStatus = {
  Pending: { text: 'Pending', color: 'red', value: false },
  Completed: { text: 'Completed', color: 'green', value: true },
};

const ChoreCard = ({ index, chore, choreId }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const chores = useSelector((state) => state.chores.value);
  const groups = useSelector((state) => state.groups.value);

  const onPressHandler = () => {
    setModalVisible(true);
  };

  onCheckDoneHandler = async () => {
    const updatedChore = {
      ...chore,
      status: 'Completed',
    };

    await updateChore(choreId, updatedChore);

    const updatedChores = {
      ...chores,
      [choreId]: updatedChore,
    };

    dispatch(setChores(updatedChores));

    getGroup(chore.groupId).then((doc) => {
      const group = doc.data();
      group.completedChores += 1;
      group.recentActivity = 'Chore completed';
      updateGroup(chore.groupId, group).then(() => {
        dispatch(setGroups({ ...groups, [chore.groupId]: group }));
      });
    });

    setModalVisible(false);
  };

  onDeleteHandler = () => {
    Alert.alert('Delete Chore', 'Are you sure you want to delete this chore?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => {
          await deleteChore(choreId);

          const updatedChores = { ...chores };
          delete updatedChores[choreId];
          dispatch(setChores(updatedChores));

          getGroup(chore.groupId).then((doc) => {
            const group = doc.data();
            group.totalChores -= 1;
            group.completedChores -= 1;
            group.recentActivity = 'Chore deleted';
            group.chores = group.chores.filter((chore) => chore !== choreId);
            updateGroup(chore.groupId, group).then(() => {
              dispatch(setGroups({ ...groups, [chore.groupId]: group }));
            });
          });

          setModalVisible(false);
        },
      },
    ]);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        key={index + 1}
        activeOpacity={0.75}
        onPress={onPressHandler}
      >
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
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>{chore.name}</Text>
              <TouchableOpacity
                style={styles.modalIcon}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalDivider} />
            <View style={styles.modalBody}>
              <Text style={styles.modalLabel}>Description: {chore.description}</Text>
              <Text style={styles.modalLabel}>Assignee: {chore.assignee}</Text>
              <Text style={styles.modalLabel}>Status: {chore.status}</Text>
            </View>
            <View>
              {!choreStatus[chore.status].value ? (
                <TouchableOpacity onPress={onCheckDoneHandler}>
                  <AntDesign name="check" size={24} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onDeleteHandler}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChoreCard;
