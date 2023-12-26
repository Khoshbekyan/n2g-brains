export const strToJson = (string) => {
    try {
        return JSON.parse(string)
    } catch(e) {
        return string
    }
}