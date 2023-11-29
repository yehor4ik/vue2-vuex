import axios from "axios";

export default {
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {},
    },
    mutations: {
        setPhoto(state, payload) {
            const value = Array.isArray(payload) ? payload : [payload]
            state.photos.push(...value)
        },
        showDialog(state) {
            state.dialogVisible = true;
        },
        hideDialog(state) {
            state.dialogVisible = false;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        }
    },
    getters: {
        getAllPhotos(state) {
            return state.photos
        },
        getDialogVisible(state) {
            return state.dialogVisible
        },
        getCurrentPhoto(state) {
            return state.currentPhoto
        },
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(response => context.commit("setPhoto", response.data));
        }
    },
}