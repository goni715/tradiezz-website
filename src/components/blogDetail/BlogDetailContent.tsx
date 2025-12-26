import type { IBlog } from "@/types/blog.type"

interface BlogDetailContentProps {
  blog: IBlog
}

export default function BlogDetailContent({ blog }: BlogDetailContentProps) {
  return (
    <article className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* HTML Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-12 border-t border-border" />

        {/* Footer Information */}
        <div className="bg-muted p-6 sm:p-8 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-foreground">About This Article</h3>
          <p className="text-sm text-muted-foreground">
            Last updated on{" "}
            {new Date(blog.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            This article has been read by {blog.view.toLocaleString()} people.
          </p>
        </div>
      </div>
    </article>
  )
}
