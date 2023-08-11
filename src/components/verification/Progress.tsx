import React from "react";
import { StyleSheet } from "react-native";
import { Colors, ProgressBar, Text, View } from "react-native-ui-lib";

interface ProgressBarProps {
  progress: number;
}

export const Progress: React.FC<ProgressBarProps> = ({
  progress,
}: ProgressBarProps) => {
  return (
    <View row centerV spread>
      <View flex marginR-20 bg-lightBlue br20>
        <ProgressBar
          progress={progress}
          height={8}
          style={styles.progress}
          progressColor={Colors.blue}
        />
      </View>
      <Text sm gray90>
        {progress}% completed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    backgroundColor: Colors.lightBlue,
    width: "100%",
  },
});
