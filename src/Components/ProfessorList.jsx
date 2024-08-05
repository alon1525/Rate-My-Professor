import ProfessorResult from "./ProfessorResult";
export default function ProfessorList({professors}){
    return(<div className="professor-list">
        {professors.map((professor) => (<ProfessorResult key={professor.id} professor={professor}></ProfessorResult>))};
    </div>
);}