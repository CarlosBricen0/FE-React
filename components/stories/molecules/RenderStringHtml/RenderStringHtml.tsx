export interface HtmlRenderProps {
  htmlString: string
}

export const RenderStringHtml = ({ htmlString }: HtmlRenderProps) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
}
