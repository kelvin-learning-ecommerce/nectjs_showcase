import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getPokemonData } from "../../state/actions/pokemonListAction";

// Import Loader
import Loader from "../Loader/loader";

// Import React-Bootstrap Components
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// Import CSS
import styles from "./BasicDetailsStyles.module.css";

// Add routing
import { useRouter } from "next/router";

const PokemonList: React.FC = () => {
    const router = useRouter();

    const pokemonListData = useSelector((state: any) => state?.data?.pokemonData);
    const dispatch = useDispatch();

    const fetchFootballers = async () => {
        await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((res) => {
            dispatch(getPokemonData(res.data.results))
            console.log(res.data.results)
        })
    }

    useEffect(() => {
        fetchFootballers()
    },[])

    console.log(pokemonListData);

    // Redirect to update page
    const redirectToUpdatePage = (params: number) => {
        console.log(params);
        router.push({
            pathname: "/updateplayer",
            query: { id: params }
        })
    }
 
    return (
        <>
            <h1 className={styles.mainHeader}>Footballers</h1>
            <h5 
                className={styles.newPlayerRoute}
                onClick={() => router.push("/newplayer")}
            >
                Add new players
            </h5>
            {
                (!pokemonListData && pokemonListData == undefined) ? 
                    <>
                        <Loader/>
                    </>
                    :
                    pokemonListData.map((data: any) => {
                        return (
                            <>  
                                <Container>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={8} className={styles.cardBlock}>
                                            <Card className={styles.playerCard}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        Name: {data.name}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        Url: {data.url}    
                                                    </Card.Text>
                                                    {/* <Button 
                                                        onClick={() => {redirectToUpdatePage(individualPlayerData.id)}}
                                                        className={styles.updateButton}
                                                    >
                                                        Update
                                                    </Button> */}
                                                    {/* <Button 
                                                        onClick={() => {deleteFootballer(individualPlayerData.id)}}
                                                        className={styles.deleteButton}
                                                    >
                                                        Delete
                                                    </Button> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={2}></Col>
                                    </Row>
                                </Container>
                            </>
                        )
                    })  
            }
            
        </>
    )
}

export default PokemonList;