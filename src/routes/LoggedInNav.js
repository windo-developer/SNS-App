import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" component={Feed} />
    </Tab.Navigator>
  );
}
