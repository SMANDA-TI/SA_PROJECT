import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./PostMapper";
import HeaderPostComp from "../../components/HeaderPost";
import { RootScreenProps } from "../../types/RootType";
import { useGlobals } from "../../context/RootContext";

const Stack = createNativeStackNavigator();
export default function PostStack(props: RootScreenProps) {
    const { state } = useGlobals();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"PostOverview"}
                component={PostScreen}
                options={{
                    header: (props) => <HeaderPostComp navigation={props.navigation as any} route={props.route as any} />,
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
}
