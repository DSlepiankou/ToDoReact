import { getFilter } from "../repository/repository";
import reducer, { addElement, changeFilter, checkCompleted, deleteAllCompleted, deleteElement } from "./todo-actions";
import { store } from './store';

afterEach(() => {
    localStorage.setItem("toDoList", JSON.stringify(null));
});

describe('todo actions tests', () => {

    it('add elements with not empty payload', () => {
        const initialState = {
            elements: []
        }
        const item = 'testEl'
        const updatedStore = reducer(initialState, addElement(item))
        const els = JSON.parse(localStorage.getItem("toDoList"));
        expect(els).toEqual(updatedStore.elements);
    });

    it('add elements with empty payload', () => {
        const initialState = {
            elements: []
        }

        reducer(initialState, addElement(""))
        const els = JSON.parse(localStorage.getItem("toDoList"));
        expect(els).toEqual(null);
    });

    it('mark item as done', () => {
        const initialState = {
            elements: [{ content: "testItem", completed: false, id: 1 }]
        }

        reducer(initialState, checkCompleted(1));
        const updatedItem = JSON.parse(localStorage.getItem("toDoList"));
        expect(updatedItem[0].completed).toEqual(true)
    })

    it('delete item from store', () => {
        const initialState = {
            elements: [{ content: "testItem", completed: false, id: 1 }]
        }

        reducer(initialState, deleteElement(1));
        const updatedStore = JSON.parse(localStorage.getItem("toDoList"));
        expect(updatedStore.length).toEqual(0)

    })

    it('delete all completed items', () => {
        const initialState = {
            elements: [
                { content: "testItem1", completed: false, id: 1 },
                { content: "testItem2", completed: true, id: 2 },
                { content: "testItem3", completed: false, id: 3 },
                { content: "testItem4", completed: true, id: 4 }
            ]
        }

        reducer(initialState, deleteAllCompleted());
        const updatedStore = JSON.parse(localStorage.getItem("toDoList"));
        expect(updatedStore.length).toEqual(2)
    })

    it('get filter by default', () => {
        const filterByDefault = getFilter();
        expect(filterByDefault).toEqual('all')
    })

    it('change filter', () => {
        const initialState = {
            filtering:'done'
        }
        
        reducer(initialState, changeFilter('active'))
        const updatedFilter = getFilter();
        expect(updatedFilter).toEqual('active');
        expect('qwe').toEqual(process.env.NODE_ENV)
    })
})