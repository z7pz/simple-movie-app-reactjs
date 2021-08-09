import React, { useEffect, useState } from 'react'
import { Error, Loading, MoiveCard } from '../Components'
import { IMovie, IResult } from '../types/movie'
import { GetAllMovies } from '../utils'
import '../styles/app.css'
export  function MainPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [movies, setMovies] = useState<IMovie | null>(null)
    console.log(movies)
    useEffect(() => {
        GetAllMovies().then((c): void => {
            if(c && c.results.length !== 0) {
                setMovies(c)
            } else {
                setError(true)
            }
            setLoading(false)
        }).catch(() => {
            setError(true)
            setLoading(false)
        })
    }, [])
    return (loading && (
        <div className="loading">
            <Loading />
        </div>
    )) || (error ? (<Error />) : (
        <div className='container'>
            {movies?.results.map((movie: IResult) => (
                <MoiveCard movie={movie} />
            ))}
        </div>

    ))
}
