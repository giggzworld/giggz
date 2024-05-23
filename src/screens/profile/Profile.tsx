import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Header } from "@src/components";
import { Avatar, View, Icon } from "react-native-ui-lib";
import Edit from "@src/assets/svgs/edit-2.svg";
import Emeka from "@src/assets/svgs/emeka.svg";

export const ProfileScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View flexG useSafeArea>
      <Header
        title="My Profile"
        rightAction={() => (
          <Icon
            source={Edit}
            name="edit"
            // onPress={() => navigation.navigate("Settings")}
            size={24}
            color="#000"
          />
        )}
      />
      <ScrollView>
        <View marginH-16 flex marginB-150>
          <View height={196} marginT-55 br20 bg-primary style={styles.box}>
            <Avatar
              source={Emeka}
              size={78}
              containerStyle={styles.avatar}
              imageStyle={styles.image}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: "relative",
  },
  avatar: {
    position: "absolute",
    top: -55,
    left: "50%",
    marginLeft: -50,
    borderColor: "#fff",
    borderWidth: 8,
  },
  image: {
    height: 70,
    width: 70,
  },
});
