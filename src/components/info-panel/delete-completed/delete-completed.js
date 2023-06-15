import { useDispatch } from "react-redux";
import { deleteAllCompleted } from "../../../redux/todo-actions";

function DelButton(){

    const dispatch = useDispatch();

    function deleteCompleted(){
        dispatch(deleteAllCompleted())
    }

    return(
        <button className="del-button" onClick={()=>deleteCompleted()}>Delete completed</button>
    )
}
export default DelButton;