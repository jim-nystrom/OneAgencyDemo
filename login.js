'use strict'
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
const usernames = [
    {
        "username": "Test",
        "password": "123456"
    },
    {
        "username": "abc",
        "password": "123456"
    },
    {
        "username": "cde",
        "password": "123456"
    },
];

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
        }
    }

    render() {
        let errorCtrl = <View />;

        if (!this.state.success && this.state.usernameNotFound) {
            errorCtrl = <Text style={styles.error}>
                A user with the name: {this.state.username} doesn't exist
            </Text>
        }
        if (!this.state.success && this.state.passwordIncorrect) {
            errorCtrl = <Text style={styles.error}>
                Password is incorrect!
            </Text>
        }
        if (this.state.success) {
            errorCtrl = <Text style={styles.success}>
                Great success
            </Text>
        }
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('./app/images/OA.png') } />
                <Text style={styles.heading}>
                    One Agency
                </Text>
                <TextInput
                    onChangeText={(text) => this.setState({ username: text }) }
                    style={styles.input}
                    placeholder="Enter username" />
                <TextInput
                    onChangeText={(text) => this.setState({ password: text }) }
                    style={styles.input}
                    placeholder="Enter password"
                    secureTextEntry={true} />
                <TouchableHighlight
                    onPress={this.onLoginPressed.bind(this) }
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Log in
                    </Text>
                </TouchableHighlight>
                {errorCtrl}
                <ActivityIndicator
                    animating={this.state.showProgress}
                    size="large"
                    style={styles.loader}
                    color="black"
                    />
            </View>
        );
    }

    checkCredentials(username, password) {
        for (let i = 0; i < usernames.length; i++) {
            let currObj = usernames[i];
            if (currObj.username.toLocaleLowerCase() === username.toLowerCase()) {
                if (currObj.password === password) {
                    this.setState({success: true});
                    return true;
                }
                else {
                    this.setState({ passwordIncorrect: true });
                    return false
                }
            }
        }
        this.setState({ usernameNotFound: true });
        console.log(this.state.usernameNotFound);
        return false;
    }

    onLoginPressed() {
        this.setState({ showProgress: true });
        let allowed = this.checkCredentials(this.state.username, this.state.password);

        if (allowed) {
        }
        else {
        }
        setTimeout(
            () => { this.setState({ showProgress: false }); },
            1000
        );

    }
}

const styles = StyleSheet.create({
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

module.exports = Login;