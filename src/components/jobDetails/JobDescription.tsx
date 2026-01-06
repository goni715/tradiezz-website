

const JobDescription = ({ description }: { description: string }) => {
    return (
        <article className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                <h1 className="text-xl font-bold text-gray-900">
                    Job Description
                </h1>
                {/* HTML Content */}
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </article>
    )
}

export default JobDescription;