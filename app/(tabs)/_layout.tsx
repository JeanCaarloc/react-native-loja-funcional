import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout (){
    return(
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} /> 
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="archive" color={color} /> 
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: 'Menu',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="list-ul" color={color} /> 
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color} /> 
                }}
            />
        </Tabs>
    );
}