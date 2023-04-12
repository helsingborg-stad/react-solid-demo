interface GroupProps {
  children: React.ReactNode;
  title: string;
}

export default function Group({ children, title }: GroupProps): JSX.Element {
  return (
    <fieldset
      style={{
        border: "1px solid #4c566a",
        borderRadius: 5,
      }}
    >
      <legend
        style={{
          color: "#4c566a",
        }}
      >
        {title}
      </legend>
      {children}
    </fieldset>
  );
}
