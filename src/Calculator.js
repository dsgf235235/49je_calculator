import React, { useState } from "react";
import { addDays, format } from "date-fns";

const calculate49thDay = (date) => {
  return format(addDays(new Date(date), 48), "yyyy-MM-dd");
};

export default function Calculator() {
  const [inputDate, setInputDate] = useState("");
  const [resultDate, setResultDate] = useState("");

  const handleCalculate = () => {
    if (inputDate) {
      setResultDate(calculate49thDay(inputDate));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>49제 날짜 계산기</h2>
      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <button onClick={handleCalculate}>계산하기</button>
      {resultDate && <p>49제 날짜: {resultDate}</p>}
    </div>
  );
}
