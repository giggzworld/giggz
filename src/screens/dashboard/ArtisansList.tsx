import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image as RNImage,
} from "react-native";
import {
  Card,
  Colors,
  GridList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native-ui-lib";
import { Header } from "@src/components";
import Award from "@src/assets/svgs/award.svg";
import HeartOutline from "@src/assets/svgs/heart-empty.svg";
import Heart from "@src/assets/svgs/heart-fill.svg";
import LocationDark from "@src/assets/svgs/location-dark.svg";
import { Svg } from "react-native-svg";
import { FlatList } from "react-native-gesture-handler";

const CARD_WIDTH = (Dimensions.get("window").width - 48) / 2;

export const ArtisansList: React.FC = ({ route }: any) => {
  const [favorite, setFavorite] = React.useState(false);
  const title = route?.params?.title;
  const details = route?.params?.details;

  return (
    <View flex useSafeArea>
      <Header title={title} />
      <View paddingH-8 flex>
        <FlatList
          numColumns={2}
          data={details}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} marginB-16 marginH-8>
                <View style={styles.contain}>
                  <View
                    height={136}
                    width={CARD_WIDTH}
                    style={styles.position}
                    center
                  >
                    <TouchableOpacity
                      style={styles.heart}
                      onPress={() => setFavorite(!favorite)}
                    >
                      <Image source={favorite ? Heart : HeartOutline} />
                    </TouchableOpacity>
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      style={{
                        borderRadius: 18,
                        width: CARD_WIDTH,
                        height: 136,
                      }}
                    />
                  </View>
                  <View flex padding-14>
                    <Text sm medium tertiary>
                      {item.name}
                    </Text>
                    <Text xs gray20>
                      {item.occupation}
                    </Text>
                    <View row centerV marginV-8>
                      <Image source={Award} />
                      <Text xs yellow marginL-4>
                        {item.award}
                      </Text>
                    </View>
                    <View row centerV>
                      <Image source={LocationDark} />
                      <Text xs gray70 marginL-4>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          // contentContainerStyle={styles.container}
          ListFooterComponent={<View paddingB-150 />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 18,
    height: 240,
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: Colors.gray4,
  },
  contain: {
    flex: 1,
    overflow: "hidden",
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  position: {
    position: "relative",
    overflow: "scroll",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
