
import { FC, useState } from 'react';
import { Text } from 'react-native';
import Modal from 'react-native-modal';
import {
     ModalActionButton, 
     ModalActionText, 
     ModalBody, 
     ModalCloseButton,
     ModalContainer, 
     ModalDescription, 
     ModalFooter,
     ModalFooterRow, 
     ModalHeader, 
     ModalImage, 
     ModalInput, 
     ModalInputButton, 
     ModalPrice, 
     ModalProdutoDetails, 
     ModalTitle,
     ModalProdutoRow
} from '../styles/produtoModal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PrincipalLojaDesc } from '../styles/principal';


interface ModalProdutoProps{
    toggleModal: () => void;
    handleCloseModal: () => void;
    modalVisible: boolean;
    produto: any;
}

export const ProdutoModal: FC<ModalProdutoProps> = ({
 produto,
 modalVisible,
 handleCloseModal,
 toggleModal
}) => {
    const [quantidade,setQuantidade] = useState(1);

    const incrementaQtd = () => {
        if(quantidade >= 50) return;
        setQuantidade(quantidade + 1);
    };

    const decrementaQtd = () => {
        if(quantidade <= 1 ) return;
         setQuantidade(quantidade - 1);
    }
    return (
    <Modal isVisible={modalVisible} animationIn="slideInUp" animationOut="bounceOutDown">
        <ModalContainer>
            <ModalHeader>
                <ModalTitle>Batata com Cheddar e Baccon</ModalTitle>
                <ModalCloseButton onPress={toggleModal}>
                <Icon name='times' />
            </ModalCloseButton>
            </ModalHeader>
        <ModalBody>
            <ModalProdutoDetails>
                <ModalImage source={{
                   uri: "https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg",
                }} 
            />
                <ModalDescription>Batata.cheddar,baccon e molho especial do chef. </ModalDescription>
            </ModalProdutoDetails>
           <ModalProdutoDetails>
           <ModalPrice>R$ 75,93</ModalPrice>
           <PrincipalLojaDesc>•</PrincipalLojaDesc>
           <ModalDescription>15-20min</ModalDescription>
            </ModalProdutoDetails>
            <ModalProdutoRow>
                <Icon name='motorcycle'  color = "#b2b2b2"/>
                <ModalPrice>Grátis</ModalPrice>
            </ModalProdutoRow>
        </ModalBody>
        <ModalFooter>
            <ModalFooterRow>
                <ModalInputButton onPress={incrementaQtd}>
                    <Icon name='plus' color="#FF6347"/>
                </ModalInputButton>
                <ModalInput keyboardType='number-pad' 
                value={quantidade.toString()} 
                onChangeText={(value) => {
                    setQuantidade(Number(value));
                }}
                />
                <ModalInputButton onPress={decrementaQtd}>
                    <Icon name='minus' color="#FF6347"/>
                </ModalInputButton>
            </ModalFooterRow>
            <ModalActionButton onPress={toggleModal}>
                <ModalActionText>Adicionar</ModalActionText>
            </ModalActionButton>
        </ModalFooter>
        </ModalContainer>
        </Modal>

    );
};
  