import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating, Button } from 'react-native-elements';

import { performBusinessLookup } from './api';

const styles = StyleSheet.create({
    text: {
        height: 40,
        fontSize: 25,
        fontWeight: 'bold',
    },
    rating: {
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
});

class RestrPage extends React.Component {
    state = {
        business: 0
    }

    componentDidMount() {
        const { navigation } = this.props;
        const businessId = navigation.getParam('businessId')
        performBusinessLookup(businessId).then(business => {
            this.setState({business});
        })
    }

    handlePhoneCall = (phone_number) => {

    }

    render() {

        data = this.state.business;
        if (data == null) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>

            );
        } else {
            return (
                <View>
                    <Text style={styles.text}>
                    {data["name"]}
                    </Text>

                    <Rating
                        ratingBackgroundColor='#ff0000'
                        ratingColor='#ffffff'
                        readonly
                        type="star"
                        startingValue={this.state.business.rating}
                        imageSize={20}
                    />
                    <Text>{data["review_count"]} Reviews</Text>
                    <Button
                        title={data["display_phone"]}
                        onPress={this.handlePhoneCall}
                    />
                </View>
            );
        }
    }
}

export default RestrPage;