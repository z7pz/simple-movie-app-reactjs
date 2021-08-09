import { Divider } from "antd";
import React from "react";
import { IResult } from "../types/movie";

export function MoiveCard({ movie }: { movie: IResult }) {
  return (
    <div onClick={() => {
        window.location.href = `/#/${movie.id}`
    }} className="card">
      <img
        width="350"
        alt=""
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <Divider />
      <h1>{movie.original_title}</h1>
      <p>{movie.vote_average}</p>
    </div>
  );
}
