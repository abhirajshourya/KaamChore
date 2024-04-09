import { StyleSheet } from 'react-native';

export const colourPalette = {
  primary: '#00487c', // Blue
  secondary: '#63ccca', // Teal
  accent: '#5da399', // Green
  background: '#e8e8e8', // Light Grey
  text: '#35393c', // Dark Black
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e8e8e8',
  },
  formBox: {
    width: '80%',
    padding: 20,
    backgroundColor: colourPalette.background,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  formTitleText: {
    fontSize: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  formInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  formButton: {
    width: '100%',
    padding: 10,
    backgroundColor: colourPalette.primary,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  listContainer: {
    flex: 1,
    padding: 20,
    height: '80%',
  },
  noItemInList: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    width: '80%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalLabel: {
    fontSize: 15,
    marginBottom: 5,
  },
  modalInputView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  modalInput: {
    width: '90%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  modalText: {
    fontSize: 20,
  },
  modalIcon: {
    position: 'absolute',
    right: 10,
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButton: {
    width: '100%',
    padding: 10,
    backgroundColor: colourPalette.primary,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
  },
});

export default styles;
