import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import {fetchData,options, youtubeoptions} from '../utils/fetchData.js'
import Detail from '../components/Detail.js'
import ExerciseVideo from '../components/ExerciseVideo.js'
import SimilarExercise from '../components/SimilarExercise.js'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([])
  const [equipmentMuscleExercise, setEquipmentMuscleExercise] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async ()  =>{
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,options)
    setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeoptions)
    setExerciseVideos(exerciseVideosData.contents)

    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,options)
    setTargetMuscleExercise(targetMuscleExerciseData);
    const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,options)
    setEquipmentMuscleExercise(equipmentMuscleExerciseData);
    }
    fetchExerciseData();
  }, [id])
  
  return (
   <Box>
    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideo  exerciseVideos ={exerciseVideos} name ={exerciseDetail.name}/>
    <SimilarExercise targetMuscleExercise={targetMuscleExercise} equipmentMuscleExercise={equipmentMuscleExercise} />
   </Box>
  )
}

export default ExerciseDetails