import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import HomeClass from './HomeClass'

const SearchStackNavigator = createStackNavigator({
    Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: HomeClass,
        navigationOptions: {
            title: 'Rechercher'
        }
    }
})

export default createAppContainer(SearchStackNavigator)