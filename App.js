import React from "react";
import {
  AppBar,
  Stack,
  ActivityIndicator,
  Button,
  FAB,
  IconButton,
  useAnimatedElevation,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";





const App = () => (
  <>
    <AppBar
      title="Ciedner Mabale -Sysarch"
      leading={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={props => (
        <Stack center style={{ width: 48, height: 48 }}>
          <ActivityIndicator size="small" color="on-primary" />
        </Stack>
      )}
    />
    <Stack fill center>
      <Button title="Login" loading disabled />
    </Stack>
    <Stack fill center>
      <Button title="Register" loading disabled />
    </Stack>
    <FAB
      loading
      style={{ position: "absolute", end: 16, bottom: 16 }}
      disabled
    />
  </>
);
export default App;