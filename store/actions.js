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
                commit("setProjects", res.data);
                
                res.data.forEach(repo => {
                    if(!repo.fork) {
                        let language = [];
                        let total = 0;

                        axios({
                            method: "GET",
                            url: `${this.$axios.defaults.baseURL}repos/kharylkate/${repo.name}/languages`,
                            headers: {
                                "Content-type": "Accept: application/vnd.github.v3+json"
                            }
                        }).then( result => {
                            

                            if(result && result.data) {

                                Object.keys(result.data).forEach(lang => {
                                    total += parseInt(result.data[lang])
                                })
                
                                Object.keys(result.data).forEach(lang => {
                                    // let value = 
                                    language.push({
                                        lang: lang,
                                        value: +(Math.round((parseInt(result.data[lang]) * 100) / parseInt(total) + "e+2")  + "e-2")
                                    })
                                });

                            }
                        });

                        repository.push({
                            project: repo.name,
                            language
                        })
                    }
                });

                console.log(repository);

                commit("setProjectLanguage", repository);

                return repository;
            }
        })
    },

    // async getProjectTags (name) {
    //     return await axios({
    //         method: "GET",
    //         url: `${this.$axios.defaults.baseURL}repos/kharylkate/${name}/languages`,
    //         headers: {
    //             "Content-type": "Accept: application/vnd.github.v3+json"
    //         }
    //     }).then( res => {
            
    //         if(res && res.data) {
    //             let total = 0;
    //             Object.keys(res.data).forEach(lang => {
    //                 total += parseInt(res.data[lang])
    //             })

    //             let percentage = [];

    //             Object.keys(res.data).forEach(lang => {
    //                 percentage.push({
    //                     language: lang,
    //                     value: +(Math.round((parseInt(res.data[lang]) * 100) / parseInt(total) + "e+2")  + "e-2")
    //                 })
    //             })

    //             return percentage;
    //         }
    //     })
    // },
}