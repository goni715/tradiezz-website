
const getTypeColor = (type:string) => {
 if(type === "Full Time"){
    return "bg-green-100 text-green-800 border-green-300"
 }
 if(type === "Part Time"){
    return "bg-yellow-100 text-yellow-800 border-yellow-300"
 }
 if(type === "Temporary"){
    return "bg-blue-100 text-blue-800 border-blue-300"
 }
 if(type === "Contract Base"){
    return "bg-purple-100 text-purple-800 border-purple-300"
 }
}

export default getTypeColor;