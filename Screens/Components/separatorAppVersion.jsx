import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { List, Text } from 'react-native-paper';
import PedidoCard from "./pedidoCard";
import { useState } from "react";

export default function SeparatorByStatus(){

    const[expandedId,setExpandedId] = useState("1");

    return(
        <SafeAreaView>
          <ScrollView>
            <List.AccordionGroup expandedId={expandedId} onAccordionPress={setExpandedId}>
                <List.Accordion title = "En revisión" id="1" style = {{backgroundColor : 'white'}}>
                    <PedidoCard status="EN REVISION"></PedidoCard>
                </List.Accordion>
                <List.Accordion title = "En preparación" id="2" style = {{backgroundColor : 'white'}}>
                    <PedidoCard status="EN PREPARACION"></PedidoCard>
                </List.Accordion>
                <List.Accordion title = "Listo" id="3" style = {{backgroundColor : 'white'}}>
                    <PedidoCard status="LISTO"></PedidoCard>
                </List.Accordion>
                <List.Accordion title = "Entregado" id="4" style = {{backgroundColor : 'white'}}>
                    <PedidoCard status="ENTREGADO"></PedidoCard>
                </List.Accordion>
                <List.Accordion title = "Cancelados" id="5" style = {{backgroundColor : 'white'}}>
                    <PedidoCard status="CANCELADO"></PedidoCard>
                </List.Accordion>
            </List.AccordionGroup>  
          </ScrollView>
        </SafeAreaView>
    )
}