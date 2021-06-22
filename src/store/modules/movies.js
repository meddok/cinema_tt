import axios from '../axios.js';

const state = {
	movies: null,
	movieSingle: null,
	movieSearch: null,
};

const actions = {

	FETCH_MOVIES({commit}) {
		console.log('FETCH_MOVIES')
		return axios.get( `movies`).then((res) => {
			commit('SET_MOVIES', res.data);
			return res;
		});
	},

	FETCH_MOVIE_SINGLE({commit, getters}, id) {
		return axios.get( `movies?movie_id=${id}`).then((res) => {
			commit('SET_MOVIE_SINGLE', res.data);
		});
	},

	FETCH_MOVIE_SEARCH({commit, getters}, {name, genres}) {
		const paramsObj = {};
		if ( name?.length ) paramsObj['name'] = name;
		paramsObj['genres'] = genres;

		return axios.get( `movies/find`, {
			params: paramsObj
		}).then((res) => {
			commit('SET_MOVIE_SEARCH', res.data);
		});
	},

};

const getters = {
	GET_MOVIES: (state) => state.movies,
	GET_MOVIE_SINGLE: (state) => state.movieSingle,
	GET_MOVIE_SEARCH: (state) => state.movieSearch,
};

const mutations = {
	SET_MOVIES: (state, data) => {
		state.movies = data;
	},

	SET_MOVIE_SINGLE: (State, data) => {
		State.movieSingle = data;
	},

	SET_MOVIE_SEARCH: (State, data) => {
		State.movieSearch = data;
	},
};

export default {
	state,
	actions,
	getters,
	mutations
}