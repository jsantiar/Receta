import logo from "./../assets/logo2.png"

export default function Header (){
    let infoHeader = {
        titulo: "El paradero",
        descripcion: "Las mejores empanadas de sabaneta"
    }
    return(
        <div className="p-5 bg-primary text-white text-center">
            <h1> <img src= {logo} className="logo-header" /> {infoHeader.titulo} </h1>
            <p> {infoHeader.descripcion} </p> 
        </div>
    )
}