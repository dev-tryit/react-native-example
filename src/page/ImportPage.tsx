import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import ImportComponent from "../component/ImportComponent";

const ImportPage = () => {
    //console.log(`ImportComponent`);가 4번 호출된다.
    return (
        <>
            <ImportComponent />
            <ImportComponent />
            <ImportComponent />
            <ImportComponent />
        </>
    );
};

export default ImportPage;