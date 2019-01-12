import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating, Card, Button, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

//import {getNameRating, } from './api';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    title: {

    },
    address: {

    }
});

// function getCategory (business) {
//     categoryString = "";
//     categories = business.categories;

//     for (const key in categories) {
//         console.log(categories[key])
//         categoryString += categories[key].title + ", ";
//     }

//     return categoryString;
// }

class RestrCard extends React.Component {
    state = {
        business: null,
        businessId: null,
    }

    constructor(business) {
        super(business);
        this.state = {
            business: business.business,
            businessId: business.business.id,
        }
    }

    handleButtonPress = () => {
        this.props.navigation.navigate('page', {businessId: this.state.businessId});
    }

    render() {

        return (
            <Card
            title={this.state.business.name}>
            <Text style={{marginBottom: 10}}>
                test
            </Text>
    
            <Rating
                showRating
                type="star"
                startingValue={this.state.business.rating}
                imageSize={20}
                style={{ paddingVertical: 10 }}
            />
    
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' 
                onPress={this.handleButtonPress}/>
            </Card>
        );
    }
}

export default withNavigation(RestrCard);