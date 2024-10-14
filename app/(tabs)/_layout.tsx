import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#cfbb78', 
                tabBarInactiveTintColor: 'white',
                tabBarStyle: { backgroundColor: '#714246' }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="archive" color={color} />
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: 'Menu',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-ul" color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre mim',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
                }}
            />
        </Tabs>
    );
}