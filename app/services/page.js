'use client'
import React, { useState, useEffect } from "react";
import styles from "./services.css";
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

const Services = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [movies, setMovies] = useState(null);
    const [letterboxdRating, setLetterboxdRating] = useState(null);

    const fetchMetaCritic = async () => {
        const apiKey = 'ae716abaf5msh82a1144653eecd7p1944ffjsnbbaee79dd86e';
        const host = 'metacriticapi.p.rapidapi.com';

        // Split searchTitle by spaces and join with hyphens
        const formattedSearchTitle = searchTitle.split(' ').join('-');

        const url = `https://${host}/movies/${formattedSearchTitle}?reviews=true`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ae716abaf5msh82a1144653eecd7p1944ffjsnbbaee79dd86e',
                'X-RapidAPI-Host': host,
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("MOVIES", result)
            setMovies(result);

        } catch (error) {
            console.error(error);
        }
    };

    const fetchLetterboxdRating = async () => {
        const formattedSearchTitle = searchTitle.split(' ').join('-');
        const url = 'https://scrapeninja.p.rapidapi.com/scrape-js';
        const headers = {
            'content-type': 'application/json',
            'x-rapidapi-key': 'ae716abaf5msh82a1144653eecd7p1944ffjsnbbaee79dd86e',
            'x-rapidapi-host': 'scrapeninja.p.rapidapi.com'
        };

        const body = JSON.stringify({
            url: `https://letterboxd.com/film/${formattedSearchTitle}/`,
            geo: 'us',
            retryNum: 1
        });

        const options = {
            method: 'POST',
            headers,
            body
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // assume that the response is a JSON

            // Let's add a check if result.body actually exists
            if (!result.body) {
                console.log('No body in the result');
                return;
            }

            const { ratingLabel, ratingData } = extractRating(result.body);
            console.log("RATING LABEL RATING DATA", ratingLabel, ratingData);
            setLetterboxdRating(ratingData);

            // TODO: Here you may want to parse the result to extract your rating.
            // The details depend on the exact structure of the result.

        } catch (error) {
            console.error(error);
        }
    };

    function extractRating(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const ratingLabelMeta = doc.querySelector('meta[name="twitter:label2"]');
        const ratingDataMeta = doc.querySelector('meta[name="twitter:data2"]');

        // Let's add some debugging here
        if (!ratingLabelMeta) {
            console.log('No meta tag with name "twitter:label2" found');
        }

        if (!ratingDataMeta) {
            console.log('No meta tag with name "twitter:data2" found');
        }

        const ratingLabel = ratingLabelMeta ? ratingLabelMeta.getAttribute('content') : null;
        const ratingData = ratingDataMeta ? ratingDataMeta.getAttribute('content') : null;

        return { ratingLabel, ratingData };
    }

    const handleSearch = () => {
        fetchMetaCritic();
        fetchLetterboxdRating();
    };

    const formattedSearchTitle = searchTitle.split(' ').join('-');

    return (
        <div className="services-container">
            <div>
                <input
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    placeholder="Enter movie title"
                />
                <button onClick={handleSearch}>Search</button>
                {letterboxdRating && (
                    <p>Letterboxd Rating: {letterboxdRating}</p>

                )}
                {movies !== undefined && movies !== null ? (

                    <ul>
                        <h1>{movies.title}</h1>
                        <p>Director: {movies.director}</p>
                        <p>MetaCritic Score: {movies.metaScore}</p>
                        <p>MetaCritic User Score: {movies.userScore}</p>
                        <p>Letterboxd{" "}
                            <a
                                href={`  https://letterboxd.com/search/${formattedSearchTitle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {searchTitle}
                            </a>
                        </p>
                        <p>{movies.description}</p>
                        <p>Genre: {movies.genre}</p>
                        <p>Release date: {movies.releaseDate}</p>
                        <p>
                            Wikipedia{" "}
                            <a
                                href={`https://en.wikipedia.org/wiki/${formattedSearchTitle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {searchTitle}
                            </a>
                        </p>
                        <p>
                            Youtube{" "}
                            <a
                                href={`https://www.youtube.com/results?search_query=${formattedSearchTitle}+trailer`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {searchTitle}
                            </a>
                        </p>


                        <p>
                            <Image
                                width={150}
                                height={250}
                                className="movie"
                                src={movies.thumbnailUrl}
                                alt="Movie Thumbnail"
                            />
                        </p>
                    </ul>
                ) : (
                    'No movies available.'
                )}
                {movies !== undefined && movies !== null && movies.recentReviews ? (
                    <div>
                        {console.log("movies", movies)}
                        <h2>Recent Reviews</h2>
                        {movies.recentReviews.map((review, index) => (
                            <div key={`review-${index}`}>
                                <p>{review.name}</p>
                                <ul>
                                    <li><p>Grade: {review.grade}</p></li>
                                    <li><p>{review.body}</p></li>
                                </ul>
                            </div>

                        ))}
                        <h2>Recent User Reviews</h2>
                        {movies.recentUserReviews.map((review, index) => (
                            <div key={`review-${index}`}>
                                <p>{review.name}</p>
                                <ul>
                                    <li><p>Grade: {review.grade}</p></li>
                                    <li><p>{review.body}</p></li>
                                </ul>
                            </div>

                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Services;