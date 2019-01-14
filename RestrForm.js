import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
} from 'react-native';
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        height: 40,
        borderWidth: 1,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

class RestrForm extends React.Component {
    state = {
        search_term: null,
        location: null,
        is_open: true,
    };

    handleChangeLocation = (text) => {
        this.setState({
            location: text,
        });
    }

    handleChangeSearchTerm = (text) => {
        this.setState({
            search_term: text,
        });
    }

    handleSearchRestaurants = () => {
        this.props.navigation.navigate('list', {search_term: "Restaurants", location : this.state.location, is_open : this.state.is_open});
    }

    handleSearchPress = () => {
        this.props.navigation.navigate('list', {search_term: this.state.search_term, location : this.state.location, is_open : this.state.is_open});
    }

    render() {
        return (
            <View>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text}
                        onChangeText={this.handleChangeSearchTerm}
                        placeholder="Cleaners, movers, delivery, sushi etc."
                        spellCheck={true}
                        value={this.state.search_term}
                    />
                    <TextInput
                        style={styles.text}
                        onChangeText={this.handleChangeLocation}
                        placeholder="Location"
                        spellCheck={false}
                        value={this.state.location}
                    />
                    <Button
                        onPress={this.handleSearchRestaurants}
                        title="Restaurants"
                    />
                    <CheckBox
                        title='Currently Open'
                        checked = {this.state.is_open}
                        onPress= {() => this.setState({ is_open : !this.state.is_open})}
                    />

                </View>

                <TouchableHighlight
                    onPress={this.handleSearchPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default RestrForm;