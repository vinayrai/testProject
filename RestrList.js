import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RestrCard from './RestrCard';

import { performSearch } from './api';

class RestrList extends React.Component {
    state = {
        businesses: []
    }

    componentDidMount() {
        const { navigation } = this.props;
        const location = navigation.getParam('location', 'New York')
        const open_now = navigation.getParam('is_open', 'false')
        console.log(JSON.stringify(location))
        console.log(JSON.stringify(open_now))
        parameters = {'location': JSON.stringify(location), 'open_now': JSON.stringify(open_now)};
        performSearch(parameters).then(businesses => {
            this.setState({businesses});
        })
    }

    render() {
        return (
            <FlatList
                data = {this.state.businesses}
                keyExtractor = {item => item.id}
                renderItem={({ item, separators }) => (
                    <RestrCard
                        business = {item}
                    />
                )}
            />
        );
    }
}

export default RestrList;