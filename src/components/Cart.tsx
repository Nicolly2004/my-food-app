import { 
    CartBody, 
    CartContainer,
    CartFooter, 
    CartHeader, 
    CartItem, 
    CartItemImage, 
    CartItemName, 
    CartItemPrice, 
    CartList, 
    CartTitle,
    CartDeleteButton,
    CartButton,
    CartColumn,
    CartItemQuantity,
    CartRow,
    CartTotalRow,
    CartTotal,
    CartTotalValue
} from "../styles/cart"
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Cart = () => {

    const items = [{
        
			id: 1,
			nome: "Pizza de calabresa",
			loja_id: 2,
			descricao: "calabresa",
			preco: 20,
			status: 1,
    },
];

    return (<CartContainer>
            <CartHeader>
                <CartTitle>Carrinho</CartTitle>
            </CartHeader>
            <CartBody>
                <CartList  
                data={items} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                         <CartItem>
                        <CartItemImage  source={{uri: item.imagem}} />

                        <CartColumn>
                            <CartItemName>{item.nome}</CartItemName>
                            <CartRow>
                                <CartItemQuantity>{item.quantidade}x</CartItemQuantity>
                            <CartItemPrice>{item.preco.toLocaleString("pt-br" ,  {
                                style: "currency",
                                currency: "BRL",
                            })}
                            </CartItemPrice>
                            </CartRow>
                        </CartColumn>
                        <CartDeleteButton>
                            <Icon name="trash" color="#FFF"/>
                        </CartDeleteButton>
                        </CartItem>
                    );
                }}/>
            </CartBody>
            <CartTotalRow>
                <CartTotal>Total</CartTotal>
                <CartTotalValue></CartTotalValue>
            </CartTotalRow>
            <CartFooter>
                <CartButton>
                    <Text>Finalize seu Pedido</Text>
                    </CartButton>
            </CartFooter>
        </CartContainer>
    );
}