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
        backgroundColor: "#fff",
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTitle: {
        fontSize: 20,
        marginBottom: 20,
    },
    formInput: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        backgroundColor: colourPalette.background,
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
});

export default styles;