export default class TaskDataBaseProvider {
    tasks = null;
    arr = [{"category":"default"}]
    constructor(){
        this.LoadData();
        if(this.tasks === null)
        {
            localStorage.setItem('tasks', JSON.stringify(this.arr))
        }
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