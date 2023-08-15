import CreateCase from "../../components/create.case/CreateCase"
import ShowDayCases from "../../components/show.day.cases/ShowDayCases"


const SelectedDayCases = ()=>{
    return(
        <>
        <div className="min-h-screen bg-cover bg-no-repeat" style={{backgroundImage: "url(https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg)"}}>
            <CreateCase/>
            <ShowDayCases/>
        </div>
        </>
    )
}

export default SelectedDayCases