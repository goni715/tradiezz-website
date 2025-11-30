
type TProps = {
    description: string;
}


const AboutUs = ({description}: TProps) => {
   return (
    <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
      <div className="px-4 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-700 mb-8">About Us</h1>
        {/* Mcontent */}
        <div  dangerouslySetInnerHTML={{ __html: description as string }}> 
        </div>
      </div>
    </div>
  )
}

export default AboutUs;