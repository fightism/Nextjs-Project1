import UpdateInput from "./UpdateInput";
import FormInput from "./formInput";
import { useSelector, useDispatch } from "react-redux";


export default function FormToggle(){
    const { adventure } = useSelector((state) => ({ ...state }))
    let flag = null
    flag = adventure.EditForm    

    return(<div>
        {flag? <FormInput/>: <UpdateInput 
        Pkey={adventure.EditMember.key}
        Pfirst={adventure.EditMember.firstname}
        Plast={adventure.EditMember.lastname}
        Pjob={adventure.EditMember.job}
        Prank={adventure.EditMember.rank}
        Page={adventure.EditMember.totalAge}
        Pstatus={adventure.EditMember.status}
        />}
        </div>
    )
}