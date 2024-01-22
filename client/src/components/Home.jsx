import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [muscle, setMuscle] = useState("");
    const [exercises,setExercises] = useState([]);
    const [exercisesAlt,setExercisesAlt] = useState([]);

    const handleSearchText = (e) => {
        setMuscle(e.target.value);
    }

    const handleSearch1 = () => {
        
        muscle &&
          axios
            .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
              headers: {
                "X-Api-Key": import.meta.env.VITE_NINJA_API_KEY,
              },
            })
            .then((res) => {
              console.log(res.data);
              setExercises(res.data);
            })
            .catch((err) => console.log(err));
    }

    const handleSearch2 = () => {
        
        muscle &&
          axios
            .get(
              `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
              {
                params: { limit: "10" },
                headers: {
                  "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_API_KEY,
                  "X-RapidAPI-Host": import.meta.env.VITE_EXERCISEDB_HOST,
                },
              }
            )
            .then((res) => {
              console.log(res.data);
              setExercisesAlt(res.data);
            })
            .catch((err) => console.log(err));
    }


  return (
    <>
      <div>Search for exercise</div>
      <input type="text" onChange={handleSearchText} placeholder="Search for exercise by muscle" />
      <button onClick={handleSearch1}>Search Ninja API</button>
      <button onClick={handleSearch2} >Search exercise DB API</button>
      {exercises.length > 0 && (
        <div>
          {exercises.map((exercise,index) => (
            <div key={index}>
              <h3>{exercise.name}</h3>
              <h4>{exercise.muscle}</h4>
                <h4>{exercise.equipment}</h4>
                <h4>{exercise.type}</h4>
                <h4>{exercise.difficulty}</h4>
              <p>{exercise.instructions}</p>
            </div>
          ))}
        </div>
      )}
      {exercisesAlt.length > 0 && (
        <div>
          {exercisesAlt.map((exercise,index) => (
            <div key={index}>
              <h3>{exercise.name}</h3>
              <h4>{exercise.target}</h4>
                <h4>{exercise.equipment}</h4>
                <h4>{exercise.bodyPart}</h4>
                <img src={exercise.gifUrl} alt={exercise.name} />
              {exercise.instructions.map((instruction,index) => (
                <p key={index}>{instruction}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home