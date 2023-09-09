export const fileUpload = async (file) => {
 
    if(!file) throw Error ('No tenemos ningun archivo a seguir')
    const cloudURL = 'https://api.cloudinary.com/v1_1/cursos-alex/upload'
    const formData = new FormData()
    formData.append('upload_preset','react-journal')
    formData.append('file',file)
    try {
        const res = await fetch(cloudURL,{
            method: 'POST',
            body: formData
        })
        if(!res.ok) throw Error('No se pudo subir imagen')
        const cloudResp  = await res.json()
        return cloudResp.secure_url
    } catch (error) {
        throw Error(error.message) 
    }
};
