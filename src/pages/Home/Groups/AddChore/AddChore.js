import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWithInsets from '../../../../components/SafeAreaWithInsets/SafeAreaWithInsets';
import styles from '../../../../styles/main';
import { createChore } from '../../../../controllers/chores-controller';
import { getGroup, updateGroup } from '../../../../controllers/group-controller';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setGroups } from '../../../../redux/groupsSlice';
import { setChores } from '../../../../redux/choresSlice';

const AddChore = ({ navigation, route }) => {
  const groupId = route.params.groupId;
  const members = route.params.members;

  const [choreName, setChoreName] = useState();
  const [description, setDescription] = useState();
  const [assignee, setAssignee] = useState();

  const dispatch = useDispatch();
  const Groups = useSelector((state) => state.groups.value);
  const Chores = useSelector((state) => state.chores.value);

  const onSubmitHandler = () => {
    const chore = {
      name: choreName,
      description: description,
      assignee: assignee,
      groupId: groupId,
      status: 'Pending',
    };

    createChore(chore).then((docRef) => {
      const choreId = docRef.id;
      getGroup(groupId).then((doc) => {
        const group = doc.data();
        group.chores.push(choreId);
        group.totalChores += 1;
        group.recentActivity = 'New chore added';
        updateGroup(groupId, group).then(() => {
          dispatch(setGroups({ ...Groups, [groupId]: group }));
          dispatch(setChores({ ...Chores, [choreId]: chore }));
          navigation.pop();
        });
      });
    });
  };

  return (
    <SafeAreaWithInsets>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.formBox}>
          <View style={styles.formTitle}>
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
            <Text style={styles.formTitleText}>Add Chore</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Chore Name"
              defaultValue={choreName}
              autoFocus={true}
              style={{
                width: '90%',
              }}
              onChangeText={(text) => {
                setChoreName(text);
              }}
            />
          </View>
          <View style={styles.modalInputView}>
            <TextInput
              placeholder="Description"
              multiline={true}
              numberOfLines={4}
              defaultValue={description}
              onChangeText={(text) => {
                setDescription(text);
              }}
              style={{
                width: '90%',
                textAlignVertical: 'top',
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Assignee (enter e-mail)"
              defaultValue={assignee}
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                width: '90%',
              }}
              onChangeText={(text) => {
                setAssignee(text);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.formButton}
            activeOpacity={0.75}
            onPress={() => {
              onSubmitHandler();
            }}
          >
            <Text style={styles.modalButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaWithInsets>
  );
};

export default AddChore;
