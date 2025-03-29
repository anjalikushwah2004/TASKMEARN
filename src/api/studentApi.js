import axiosConfig from '../../config/axios_config'

const login = async ({ uname, password }) => {
    console.log(uname, password)

    try {
        const response = await axiosConfig.post("/students/login", {
            uname,
            password
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("error", error)
    }
}

export default { login }