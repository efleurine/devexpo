import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Text, Button} from "react-native-ui-kitten";
import {ScheduleItem} from "./ScheduleItem";
import data from "./sample";
import {RLayout} from "../ResponsiveLayout";
import navigationService from "../../navigationService";

export function Schedule() {
  const [selectedIndex, setSelectedIndex] = React.useState(() => 0);

  function changeIndex(index) {
    setSelectedIndex(index);
  }

  function openDetailScreen(params) {
    navigationService.navigate("ScheduleDetail", {schedule: params});
  }

  return (
    <RLayout>
      <View style={styles.menu}>
        <MenuSelector text="Hackathon" index={0} onPress={changeIndex} />
        <MenuSelector text="Day 1" index={1} onPress={changeIndex} />
        <MenuSelector text="Day 2" index={2} onPress={changeIndex} />
      </View>

      <ScrollView style={styles.content}>
        {data.map(el => (
          <ScheduleItem key={el.title} data={el} onPress={openDetailScreen} />
        ))}
      </ScrollView>
    </RLayout>
  );
}

function MenuSelector({index, text, onPress}) {
  return (
    <Button onPress={() => onPress(index)} appearance="outline" size="tiny">
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  content: {
    // paddingHorizontal: 16,
  },
});
