import Cover from "../../../components/SharedComponent/Cover";
import shopImg from '../../../assets/menu_images/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    
    const categories = ['Salads','Pizza','Soups','Desserts','Drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [items] = useMenu();

    const drinks = items.filter(item => item.category === 'drinks');
    const pizzas = items.filter(item => item.category === 'pizza');
    const desserts = items.filter(item => item.category === 'dessert');
    const soups = items.filter(item => item.category === 'soup');
    const salads = items.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <div>
                <Cover coverImg={shopImg} Title={"our shop"} h1={"Would you like to try a dish?"}></Cover>
            </div>
            <div className="my-20 text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab> Salads</Tab>
                        <Tab> Pizza</Tab>
                        <Tab> Soups</Tab>
                        <Tab> Desserts</Tab>
                        <Tab> Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab FoodItems={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab FoodItems={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab FoodItems={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab FoodItems={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab FoodItems={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;