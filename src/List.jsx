const LANGUAGES = [`JavaScript`, `C++`, `Ruby`, `Java`, `PHP`, `Go`];

export function List() {
  return (
    <div>
      {/* string, number */}
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
}
