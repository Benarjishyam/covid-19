import React, {useEffect, useState } from 'react';
import {Card, Form} from 'react-bootstrap';
import axios from 'axios';
import styles from './styles.module.css';
import NumberFormat from 'react-number-format';
import CardDeck from 'react-bootstrap/CardDeck'
import Graph from './Graph';

function MainComponent () {
    const [data, setData]=useState([]);
    const [results, setResults] = useState([]);
    const [searchCountries, setSearchCountries] = useState("");

    useEffect(() => {
        axios
         .all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries"),
          ])
          .then((responseArr) => {
            setData(responseArr[0].data);
            setResults(responseArr[1].data);
          })
          .catch((err) => {
            console.log(err);
          });
    },[]);

    const date=new Date(parseInt(data.updated));
    const lastUpdate=date.toString();

    const filterCountries = results.filter((item) => {
        return (item.country.toLowerCase() === searchCountries.toLowerCase());
      });
    
      const countries = filterCountries.map((data, i) => {
        return (
          <Card
            key={i}
            bg="dark"
            text="light"
            className="text-center"
            style={{ margin: "80px" }}
          >
            <Card.Img variant="top" src={data.countryInfo.flag} width="200px" height="280px" />
            <Card.Body>
              <Card.Title>{data.country}</Card.Title>
              <Card.Text>Cases {data.cases}</Card.Text>
              <Card.Text>Deaths {data.deaths}</Card.Text>
              <Card.Text>Recovered {data.recovered}</Card.Text>
              <Card.Text>Today's cases {data.todayCases}</Card.Text>
              <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
              <Card.Text>Active {data.active}</Card.Text>
              <Card.Text>Critical {data.critical}</Card.Text>
            </Card.Body>
          </Card>
        );
      });
    

 
    return(
            <div>
                <Card  style={{ width: '18rem' },{textAlign:"center"}}>
                    <Card.Body>
                        <Card.Title>Total Coronavirus Cases:</Card.Title>
                        <Card.Title  style={{color: "#484848"}} className="mb-2 ">
                            {' '}
                        <NumberFormat
                                value={data.cases}
                                displayType={"text"}
                                thousandSeparator={true}
                                style={{ fontSize: "30px" }}
                        /> 
                        </Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Deaths:</Card.Title>
                        <Card.Title style={{color: "red"}} className="mb-2 ">
                            {' '}
                        <NumberFormat
                                value={data.deaths}
                                displayType={"text"}
                                thousandSeparator={true}
                                style={{ fontSize: "30px" }}
                        /></Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Recovered: </Card.Title>
                        <Card.Title style={{color: "#037d50"}} className="mb-2 ">
                            {' '}
                        <NumberFormat
                                value={data.recovered}
                                displayType={"text"}
                                thousandSeparator={true}
                                style={{ fontSize: "30px" }}
                        />
                        </Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text>Last Updated:{lastUpdate}</Card.Text>
                    </Card.Body>
                </Card>


                <CardDeck className={styles.container}>
                    <Card  id={styles.card_container_left} style={{ width: '18rem'},{textAlign:"center"}}>
                        <Card.Body >
                            <Card.Title>New Cases:</Card.Title>
                            <Card.Title  style={{color: "#484848"}} className="mb-2 ">
                                    {' '}
                                  <NumberFormat
                                    value={data.todayCases}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    style={{ fontSize: "30px" }}
                                />
                            </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>New Deaths:</Card.Title>
                            <Card.Title style={{color: "red"}} className="mb-2 ">     
                            {' '}
                                <NumberFormat
                                        value={data.todayDeaths}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        style={{ fontSize: "30px" }}
                                /></Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Today Recovered: </Card.Title>
                            <Card.Title style={{color: "#037d50"}} className="mb-2 ">
                            {' '}
                                <NumberFormat
                                        value={data.todayRecovered}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        style={{ fontSize: "30px" }}
                                />
                            </Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                   <Card id={styles.card_container_right}  style={{ width: '18rem' },{textAlign:"center"}}>
                        <Card.Body >
                            <Card.Title>Active:</Card.Title>
                            <Card.Title  style={{color: "#484848"}} className="mb-2 ">  
                            {' '}
                                <NumberFormat
                                        value={data.active}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        style={{ fontSize: "30px" }}
                                />
                                </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Critical:</Card.Title>
                            <Card.Title style={{color: "red"}} className="mb-2 ">
                            {' '}
                                <NumberFormat
                                        value={data.critical}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        style={{ fontSize: "30px" }}
                                />
                                </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Affected Countries: </Card.Title>
                            <Card.Title style={{color: "#ff8c00"}} className="mb-2 ">
                            {' '}
                                <NumberFormat
                                        value={data.affectedCountries}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        style={{ fontSize: "30px" }}
                                />
                                </Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>
                <Form>
                    <Form.Group controlId="formGroupSearch">
                    <Form.Control
                        bg="dark"
                        type="text"
                        placeholder="View By Country"
                        onChange={(e) => setSearchCountries(e.target.value)}
                    />
                    </Form.Group>
                    {countries}
                </Form>
                <Graph />

  
           </div>
        );
    
}

export default MainComponent;
