import React from "react";
import {
  View,
  Text,
  Image,
  TextField,
  TouchableOpacity,
  Colors,
  Card,
} from "react-native-ui-lib";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import Menu from "@src/assets/svgs/menu.svg";
import Location from "@src/assets/svgs/location.svg";
import Notification from "@src/assets/svgs/notification.svg";
import Search from "@src/assets/svgs/search.svg";
import Cleaner from "@src/assets/svgs/dashboard/cleaner.png";
import Dispatch from "@src/assets/svgs/dashboard/dispatch.png";
import Mechanic from "@src/assets/svgs/dashboard/mechanic.png";
import Teacher from "@src/assets/svgs/dashboard/teacher.png";
import Professional from "@src/assets/svgs/dashboard/professional.svg";
import AwardG from "@src/assets/svgs/dashboard/green_award.svg";
import LocationDark from "@src/assets/svgs/location-dark.svg";
import ArrowRight from "@src/assets/svgs/arrowRight.svg";
import Emeka from "@src/assets/svgs/emeka.svg";
import Samantha from "@src/assets/svgs/samantha.svg";
import Peter from "@src/assets/svgs/peter.svg";
import Steven from "@src/assets/svgs/steven.svg";
import Sven from "@src/assets/svgs/sven.svg";
import Pete from "@src/assets/svgs/pete.svg";
import Award from "@src/assets/svgs/award.svg";
import HeartOutline from "@src/assets/svgs/heart-empty.svg";
import Heart from "@src/assets/svgs/heart-fill.svg";
import { ROUTES } from "@src/utils";
import { useNavigation } from "@react-navigation/native";
import { useMe } from "@src/hooks/data/useMe";

const images = [
  {
    image: Cleaner,
    title: "Cleaner",
  },
  {
    image: Dispatch,
    title: "Dispatch",
  },
  {
    image: Mechanic,
    title: "Mechanic",
  },
  {
    image: Teacher,
    title: "Teacher",
  },
];

const cardDetails = [
  {
    image: Cleaner,
    name: "Emeka Peter",
    occupation: "Mechanic",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Samantha,
    name: "Samantha Steven",
    occupation: "Teacher",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Emeka,
    name: "Emeka Peter",
    occupation: "Mechanic",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Samantha,
    name: "Samantha Steven",
    occupation: "Teacher",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Peter,
    name: "Samantha Steven",
    occupation: "Teacher",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Pete,
    name: "Samantha Steven",
    occupation: "Teacher",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Peter,
    name: "Samantha Steven",
    occupation: "Teacher",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
  {
    image: Sven,
    name: "Emeka Peter",
    occupation: "Mechanic",
    award: "Uprising artisan",
    location: "Life Camp, FCT Abuja",
  },
];
export const Home: React.FC<any> = () => {
  const [favorite, setFavorite] = React.useState(false);
  const width = Dimensions.get("window").width;
  const flexW = (width - 48) / 2;
  const navigation = useNavigation<any>();
  const { data } = useMe();
  console.log(data);

  return (
    <View bg-white flex>
      <View bg-primary style={styles.container}>
        <View marginH-16 marginB-16 marginT-60 height={40} row centerH spread>
          <TouchableOpacity onPress={() => navigation?.toggleDrawer?.()}>
            <Image source={Menu} />
          </TouchableOpacity>
          <View row centerH>
            <Location />
            <Text sm white marginL-4>
              Asokoro, FCT Abuja
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={Notification} />
          </TouchableOpacity>
        </View>
        <View bg-white marginH-16 marginB-13 br20>
          <Image source={Search} style={styles.image} />
          <TextField
            placeholder="Search for professionals"
            paddingL-42
            style={styles.input}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View marginH-16>
          <Text marginT-16 marginB-5 md medium tertiary>
            Categories
          </Text>
          <View row spread bg-white>
            {images.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate(ROUTES.ARTISANS_LIST, {
                    title: item.title,
                    details: cardDetails,
                  })
                }
              >
                <View key={index} centerH>
                  <View bg-lightBlue br20 center style={styles.box}>
                    <Image source={item.image} />
                  </View>
                  <Text marginT-8 sm center primary>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View row spread marginT-16 marginB-8>
            <Text md medium gray60>
              Professionals near you
            </Text>
            <TouchableOpacity>
              <View row centerV>
                <Text xs medium gray5>
                  See all
                </Text>
                <Image source={ArrowRight} alt="arrow" marginL-4 />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View row spread>
              {cardDetails.map((item, index) => (
                <TouchableOpacity key={index}>
                  <Card
                    bg-white
                    marginB-15
                    br20
                    style={styles.card}
                    height={236}
                    marginR-16
                  >
                    <View height={136} style={styles.position}>
                      <TouchableOpacity
                        style={styles.heart}
                        onPress={() => setFavorite(!favorite)}
                      >
                        <Image source={favorite ? Heart : HeartOutline} />
                      </TouchableOpacity>
                      <Card.Image source={item.image} />
                    </View>
                    <View flex padding-8>
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
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Text md medium gray60 marginB-8>
            Top rated professionals
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 5 }).map((_, index) => (
            <TouchableOpacity key={index}>
              <View
                width={width - 60}
                padding-8
                style={styles.card}
                bg-white
                height={87}
                marginB-16
                br20
                row
                marginL-16
              >
                <Image source={Professional} />
                <View marginL-12 flex>
                  <Text sm medium tertiary>
                    John Snow
                  </Text>
                  <View row marginT-4 marginB-6 centerV>
                    <Image source={AwardG} />
                    <Text xs gray20 marginL-4 green>
                      Top rated artisan
                    </Text>
                  </View>
                  <View row centerV>
                    <Image source={LocationDark} />
                    <Text xs gray70 marginL-4>
                      Life Camp, FCT Abuja
                    </Text>
                  </View>
                </View>
                <Image source={Heart} alt="Favorite" />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  box: {
    width: 70,
    height: 70,
  },
  input: {
    height: 41,
    backgroundColor: Colors.gray80,
  },
  position: {
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  card: {
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
