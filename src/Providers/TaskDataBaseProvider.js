export default class TaskDataBaseProvider {
    tasks = null;
    constructor(){
        this.LoadData();
    }
    LoadData(){
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    getCategories() {
        return [...new Set(this.tasks.map(item => {
            console.log(item.category)
            return item.category;
        }))] 
    }

    getTasks(){
        return [...new Set(this.tasks.map(item => {
            console.log(item.text)
            return item.text;
        }))]
    }

}