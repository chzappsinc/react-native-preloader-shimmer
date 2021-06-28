import React from 'react'
import { NativeModules, View, Text, StyleSheet, ScrollView, ColorPropType } from 'react-native';
import Shimmer from 'react-native-shimmer'

export const BasicLoader = ({
    header = String,
    color = ColorPropType,
    type = require
}) => {
    console.log(color)
    if (!color || color.length <= 0) {
        console.warn("react-native-preolader-chz Says : Props color is required to run color={'Black'}")
        return (null)
    } else {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>

                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...style.tip, backgroundColor: color }} />
                </Shimmer>

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    tip: {
        borderRadius: 10,
        backgroundColor: '#ffffff50',
        height: 20,
        paddingBottom: 2,
        paddingTop: 2,
        marginBottom: 5
    }
})
