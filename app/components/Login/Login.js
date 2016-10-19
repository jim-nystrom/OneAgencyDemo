'use strict'
console
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
import styles from './styles';
import images from '../../config/images';

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
                    source={images.logo} />
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

export default Login;