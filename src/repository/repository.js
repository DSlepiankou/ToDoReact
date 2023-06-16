    export function saveFilter (filtering) {
        localStorage.setItem("filtering", JSON.stringify(filtering));
    };

    export function getElements (){
        return JSON.parse(localStorage.getItem("toDoList")) ?? [];
    };

    export function getFilter() {
        return JSON.parse(localStorage.getItem("filtering")) ?? "all";
    };

    export function saveElements(elements){
        localStorage.setItem("toDoList", JSON.stringify(elements));
    }