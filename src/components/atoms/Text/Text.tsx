export interface TextProps {
  text: string;
}

export default function Text({ text }: TextProps): JSX.Element {
  return <span>{text}</span>;
}
