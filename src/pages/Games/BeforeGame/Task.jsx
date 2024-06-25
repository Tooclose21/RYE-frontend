import "./Task.css"
import dino from "../../../images/blueGhost.png"
import Button from "../../../components/Button";
import {useNavigate} from "react-router-dom";

const Task = () => {
    const navigate = useNavigate()
    return (
        <div className={'task-container'}>
            <div className={'no-task-msg'}>
                <img src={dino} alt={"no msg dino"}/>

                <div className={'no-task-col'}>

                    <p>There are no tasks provided by your parent.
                    </p>
                    <Button color={'#88CAFC'} loc={{width:'30%'}} onClick={() => navigate("/child-welcome")}>Back</Button>
                </div>

            </div>
        </div>
    )
}
export default Task