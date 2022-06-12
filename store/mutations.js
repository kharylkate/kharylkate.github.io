export default {

    setProjects( state, data) {
        if(!data.fork) {
            state.listProject = data;
        }
    },

    setProjectLanguage( state, data) {
        state.listProjectLang = data;
    },

    // addToProjectLang( state, data ) {
    //     let total = 0;
    //     let percentage = [];

    //     Object.keys(data.lang).forEach(lang => {
    //         total += parseInt(data.lang[lang])
    //     })

    //     Object.keys(data.lang).forEach(lang => {
    //         percentage.push({
    //             language: lang,
    //             value: +(Math.round((parseInt(data.lang[lang]) * 100) / parseInt(total) + "e+2")  + "e-2")
    //         })
    //     })

    //     state.listProjectLang.push({
    //         name: data.name,
    //         url: data.url,
    //         lang: percentage,
    //         created_at: data.created_at
    //     })

    //     state.panels.forEach(element => {
    //         if(element.id == 'portf') {
    //             element.contents[0].cont.push({
    //                 name: data.name,
    //                 url: data.url,
    //                 lang: percentage,
    //                 created_at: data.created_at
    //             })
    //         }
    //     });
    // }
}