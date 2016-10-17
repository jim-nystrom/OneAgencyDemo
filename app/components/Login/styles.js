import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10
    },
    logo: {
        marginTop: 10,
        width: 90,
        height: 90
    },
    heading: {
        fontSize: 30,
        marginTop: 5,
        marginBottom: 70,
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#777",
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    button: {
        height: 50,
        backgroundColor: '#eee',
        alignSelf: 'stretch',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: 'black',
        alignSelf: 'center'
    },
    loader: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        paddingTop:10,
        fontSize: 18,
    },
    success: {
        color: 'green',
        paddingTop:10,
        fontSize: 18,
    }
});