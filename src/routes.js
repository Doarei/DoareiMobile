import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Login from './Login/login';
import Home from './Home/home';
import Sobre from './Sobre/sobre';
import Emprestimo from './Emprestimo/emprestimo';
import Cadastro from './Cadastro/cadastro';
import Contato from './Contato/contato';
import Pontos from'./Pontos/pontos';
import { Ionicons } from 'react-native-vector-icons'
import Doacao from './Doacao/doacao';


const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#48CAE4',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 4,
                    height: 60,
                }
            }}
        >
            <Tab.Screen name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={size} color={color} />
                        }
                        return <Ionicons name='home-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Sobre'
                component={Sobre}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='business' size={size} color={color} />
                        }
                        return <Ionicons name='business-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Doacao'
                component={Doacao}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='infinite' size={size} color={color} />
                        }
                        return <Ionicons name='infinite-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Emprestimo'
                component={Emprestimo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='laptop' size={size} color={color} />
                        }
                        return <Ionicons name='laptop-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
            name='Pontos'
            component={Pontos}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <Ionicons name='logo-rss' size={size} color={color} />
                    }
                    return <Ionicons name='logo-rss' size={size} color={color} />
                }
            }}
        />


            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='mail' size={size} color={color} />
                        }
                        return <Ionicons name='mail-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='log-in' size={size} color={color} />
                        }
                        return <Ionicons name='log-in-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='person' size={size} color={color} />
                        }
                        return <Ionicons name='person-outline' size={size} color={color} />
                    }
                }}
            />

        </Tab.Navigator>
    );
}

export default Routes;