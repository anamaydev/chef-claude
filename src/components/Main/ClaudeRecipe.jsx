import React from "react";
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({recipe, ref}){

  return(
    <section ref={ref}>
      <ReactMarkdown
        children={recipe}
        components= {{
          h2: ({...props}) => <h2 className="my-6 text-[2rem]"{...props}/>,
          h3: ({...props}) => <h3 className="my-4 text-[1.5rem]"{...props}/>,
          h4: ({...props}) => <h4 className="my-3 text-[1.25rem]"{...props}/>,
          h5: ({...props}) => <h5 className="my-2 text-[1.125rem]"{...props}/>,
          h6: ({...props}) => <h6 className="my-2 text-[1rem]"{...props}/>,
          ul: ({...props}) => <ul className="mb-2 list-disc pl-6 text-[#475467]"{...props}/>,
          ol: ({ ...props }) => <ol className="mb-2 list-decimal pl-6 text-[#475467]" {...props} />
        }}
      />
    </section>
  )
}