import axios from 'axios'
import { IMovie } from '../types/movie';

const generalURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8";



export function GetAllMovies(): Promise<IMovie> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            try {
                axios.get(generalURL).then(({data}) => {
                    res(data)
                }).catch(er => {
                    rej(er)
                })
            } catch(er) {
                rej(er)
            }
        }, 1000) 
    })
}