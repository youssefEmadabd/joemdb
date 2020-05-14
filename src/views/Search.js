import React, { Component } from "react";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import styles from "./Search.module.css";
import API from "../utils/API";

class Search extends Component {
  state = {
    loading: false,
    searchQuery: "",
    results: "",
    page: "",
    totalPages: "",
    totalResults: ""
  };

  render() {
    return (
      <div className={styles.searchScreen}>
        {this.state.results === "" || this.state.results.length === 0 ? (
          <div className={styles.searchComponent}>
            <div className={styles.searchHeader}>Search for a movie</div>
            <div className={styles.searchFieldDiv}>
              <InputGroup>
                <FormControl
                  placeholder="Name, Actor, Keyword..."
                  aria-label="searchquery"
                  aria-describedby="basic-addon1"
                  onChange={e => {
                    this.setState({ searchQuery: e.target.value });
                  }}
                />
              </InputGroup>
              <Button
                variant="success"
                className={styles.searchButton}
                onClick={() => {
                  this.setState({ loading: true });
                  API.get(
                    `/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchQuery}`
                  )
                    .then(res => {
                      this.setState({
                        loading: false,
                        results: res.data.results,
                        page: res.data.page,
                        totalPages: res.data.total_pages,
                        totalResults: res.data.total_results
                      });
                      console.log(res.data);
                    })
                    .catch(error => {
                      this.setState({
                        loading: false
                      });
                      console.log("Error: ", error);
                    });
                }}
              >
                Search
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.searchComponent}>
            <div className={styles.searchHeader}>Results</div>
            <div className={styles.results}>
              {this.state.results.map(result => (
                <Card key={result.id} className={styles.result}>
                  {result.media_type === "person" ? (
                    <Card.Body>
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${result.profile_path}`}
                        alt={result.title}
                        className={styles.poster}
                      />
                      <div className={styles.cardContent}>
                        <Card.Title>{result.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {result.media_type}
                        </Card.Subtitle>
                        <Card.Text className={styles.knownForText}>
                          KNOWN FOR
                        </Card.Text>
                        {result.known_for.map(item => {
                          if (item.title) {
                            return (
                              <Card.Text key={item.id}>
                                • {item.title}
                              </Card.Text>
                            );
                          } else {
                            return (
                              <Card.Text key={item.id}>• {item.name}</Card.Text>
                            );
                          }
                        })}
                      </div>
                    </Card.Body>
                  ) : (
                    <Card.Body>
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${result.poster_path}`}
                        alt={result.title}
                        className={styles.poster}
                      />
                      <div className={styles.cardContent}>
                        <Card.Title>{result.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {result.media_type}
                        </Card.Subtitle>
                        <Card.Text>{result.overview}</Card.Text>
                      </div>
                    </Card.Body>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
