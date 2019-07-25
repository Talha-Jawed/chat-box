import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment'
import TickIcon from '../../assets/tickIcon.png'

export default class SendMessage extends React.Component {
    render() {
        const { text, time } = this.props
        return (
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', right: 0, paddingRight: 8, paddingTop: 4, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#ffcce0', maxWidth: 270, minWidth: 80, borderRadius: 12, overflow: 'hidden' }}>
                    <Text style={{ fontSize: 18, padding: 1, fontWeight: '400', marginTop: 5, marginLeft: 6, marginRight: 6 }}>
                        {text}
                    </Text>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: "row" }}>
                        <Text style={{ fontSize: 12, marginBottom: 5, marginHorizontal: 5, color: 'gray' }}>
                            {moment((time)).format(" h:mm: A")}
                        </Text>
                        <Image
                            style={{ height: 12, width: 12, marginBottom: 5, marginRight: 5 }}
                            source={TickIcon}
                        />
                    </View>
                </View>
                <View style={styles.triangle}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: "#ffcce0",
        transform: [
            { rotate: '90deg' }
        ],
        margin: 0,
        marginLeft: -4,
        borderWidth: 0,
    }
})