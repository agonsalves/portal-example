export const getGallery = (project, slug) => {
    let gallery = {}
    const visuals = [...project.currentProjects || [], ...project.visuals || []]
    visuals.forEach(({fields}) => {
        gallery = fields.files.find(({sys, fields}) =>
            sys.contentType?.sys.id === 'projectVisualsGallery' && fields.slug === slug
        ) || gallery
    })

    return gallery.fields || {}
}

export const getItem = (itemList, slug) => itemList.find(item => item.slug === slug)

export const getItemList = gallery => {
    const itemList = []
    gallery.sections.forEach(({fields}) => {
        fields.items.forEach(({fields, sys}) => {
            itemList.push({...fields, ...sys})
        })
    })

    return itemList
}