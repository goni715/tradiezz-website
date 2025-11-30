
type TProps = {
  title: string;
  content: string;
}


const PolicyContent = ({ title, content }: TProps) => {

   return (
    <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
      <div className="px-4 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-700 mb-8">{title}</h1>
        {/* Mcontent */}
        <div  dangerouslySetInnerHTML={{ __html: content as string }}> 
        </div>
      </div>
    </div>
  )
}

export default PolicyContent;