import { useState } from "react";

export function Form({ onAddlang }) {
  const [text, setText] = useState(``);

  function submitForm(e) {
    e.preventDefault();
    onAddlang(text);
  }

  return (
    <div>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  );
}
