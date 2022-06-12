import axios from "axios"

export default {

    async getProjects({ commit }) {
        return await axios({
            method: "GET",
            url: `${this.$axios.defaults.baseURL}users/kharylkate/repos`,
            headers: {
                "Content-type": "Accept: application/vnd.github.v3+json"
            }
        }).then(res => {
            
            if(res && res.data) {
                let repository = [];
                res.data.forEach(element => {
                    if (!element.fork) {
                        repository.push(element);
                    }
                });
                commit("setProjects", repository);
                return repository
            }
        })
    },

    async getProjectTags ({ commit }, data) {
        await data.forEach((element) => {
             axios({
                method: "GET",
                url: element.langUrl,
                headers: {
                    "Content-type": "Accept: application/vnd.github.v3+json"
                }
            }).then( res => {
                console.log(res.data);
                if(res && res.data) {

                    commit("addToProjectLang",  {
                        lang: res.data, 
                        name: element.name, 
                        url: element.url, 
                        created_at: element.created_at
                    })
                }
            }) 
        });
        return;
    },
}