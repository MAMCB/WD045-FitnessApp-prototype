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
                "X-Api-Key": "/SiL1kGBHAGp+M3qVIu76A==7KZMrc5uVR2AwTKD",
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
                  "X-RapidAPI-Key":
                    "f4d179f829mshb063896df674f08p15c7b7jsn09ad4b7e26df",
                  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
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