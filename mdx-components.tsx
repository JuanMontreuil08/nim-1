import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
      size = 'full',
    }: {
      src: string
      alt: string
      caption: string
      size?: 'tiny' | 'xs' | 'small' | 'medium' | 'blog' | 'full'
    }) => {
      const sizeClasses = {
        tiny: 'max-w-sm mx-auto',
        xs: 'max-w-xs mx-auto',
        small: 'max-w-md mx-auto',
        medium: 'max-w-2xl mx-auto',
        blog: 'w-full max-w-screen-sm mx-auto',
        full: 'w-full'
      }

      return (
        <figure>
          <img 
            src={src} 
            alt={alt} 
            className={`rounded-xl ${sizeClasses[size]}`} 
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
