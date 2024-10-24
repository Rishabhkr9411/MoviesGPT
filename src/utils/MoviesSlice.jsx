import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        showMovieInfo:false,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addToggleMovieInfoView:(state,action)=>{
            state.showMovieInfo=!state.showMovieInfo
        }
    }
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,
    addUpcomingMovies,addToggleMovieInfoView} =moviesSlice.actions;

export default moviesSlice.reducer;