export default {

    setProjects( state, data) {
        if(!data.fork) {
            state.listProject = data;
        }
    },

    setProjectLanguage( state, data) {
        state.listProjectLang = data;
    }
}