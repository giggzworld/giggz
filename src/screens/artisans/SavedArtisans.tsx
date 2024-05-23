import { Header } from "@src/components";
import React from "react";
import {
  Colors,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native-ui-lib";
import Trash from "@src/assets/svgs/trash.svg";
import { ScrollView, StyleSheet } from "react-native";
import Professional from "@src/assets/svgs/dashboard/professional.svg";
import AwardG from "@src/assets/svgs/dashboard/green_award.svg";
import LocationDark from "@src/assets/svgs/location-dark.svg";
import Award from "@src/assets/svgs/award.svg";

export const SavedArtisans: React.FC = () => {
  return (
    <View bg-white flexG useSafeArea>
      <Header title="Saved Artisans" isWhite />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View marginH-16 flex>
          {Array.from({ length: 5 }).map((_, index) => (
            <View
              key={index}
              padding-8
              style={styles.card}
              bg-white
              height={87}
              marginB-16
              br20
              row
            >
              <Image source={Professional} />
              <View marginL-12 flex>
                <Text sm medium tertiary>
                  John Snow
                </Text>
                <View row marginT-4 marginB-6 centerV>
                  <Image source={index % 2 === 0 ? AwardG : Award} />
                  <Text
                    xs
                    gray20
                    marginL-4
                    {...(index % 2 === 0 ? { green: true } : { yellow: true })}
                  >
                    {index % 2 === 0 ? "Top rated artisan" : "Uprising artisan"}
                  </Text>
                </View>
                <View row centerV>
                  <Image source={LocationDark} />
                  <Text xs gray70 marginL-4>
                    Life Camp, FCT Abuja
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={Trash} alt="Delete" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.gray80,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
