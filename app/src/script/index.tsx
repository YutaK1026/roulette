import { useEffect, useState } from "react";
import { KEYS, setItem, getItem, removeItem } from "./LocalStorage";

export const LocalStorageDemoPage: React.VFC = () => {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    updateLabel();
  }, []);

  const updateLabel = () => {
    setLabel(getItem(KEYS.SAMPLE_TEXT));
  };

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const removeClick = () => {
    // LocalStorageの値を削除する
    removeItem(KEYS.SAMPLE_TEXT);
    updateLabel();
  };

  const setClick = () => {
    // テキストボックスの値をLocalStorageに保存する
    setItem(KEYS.SAMPLE_TEXT, text);
    updateLabel();
  };

  const getClick = () => {
    // LocalStorageの値をテキストボックスに入れる
    setText(getItem(KEYS.SAMPLE_TEXT));
    updateLabel();
  };

  return (
    <div>
      <p>
        保存する値：
        <input type="text" value={text} onChange={handleChange} />
      </p>
      <p>保存された値:{label}</p>
      <button onClick={setClick}>保存する</button>
      <button onClick={getClick}>呼び出す</button>
      <button onClick={removeClick}>削除する</button>
    </div>
  );
};