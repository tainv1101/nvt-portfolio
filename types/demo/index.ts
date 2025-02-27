export type DemoFeatureListItems<IconType = React.ComponentType,DocLinks = {doc1:string,doc2:string,doc3:string}> = {
  name: string;
  description: string;
  icon: IconType;
  docs: string | DocLinks;
  url: string;
}