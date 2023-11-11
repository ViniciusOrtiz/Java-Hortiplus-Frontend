export default class LocalStorageService {

    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    
    static get(key: string) {
        return JSON.parse(localStorage.getItem(key) || '{}')
    }

    static remove(key: string) {
        localStorage.removeItem(key)
    }
}