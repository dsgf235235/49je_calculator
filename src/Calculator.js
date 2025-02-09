import React, { useState } from "react";
import { addDays, format } from "date-fns";

export default function Calculator() {
  const [inputDate, setInputDate] = useState("");
  const [resultDate, setResultDate] = useState("");

  const handleCalculate = () => {
    if (inputDate) {
      setResultDate(format(addDays(new Date(inputDate), 48), "yyyy-MM-dd"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300">
      {/* 헤더 */}
      <header className="w-full p-4 text-center bg-yellow-600 text-white text-2xl font-bold shadow-md">
        49제 날짜 계산기
      </header>

      {/* 카드 UI */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mt-6 w-80 text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-4">49제 날짜 계산</h2>

        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <button
          onClick={handleCalculate}
          className="w-full p-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
        >
          계산하기
        </button>

        {resultDate && (
          <p className="mt-4 text-lg font-semibold text-gray-700">
            49제 날짜: <span className="text-yellow-600">{resultDate}</span>
          </p>
        )}
      </div>

      {/* 푸터 */}
      <footer className="w-full p-4 text-center bg-yellow-600 text-white text-sm mt-6 shadow-md">
        © 2024 49제 계산기 | 불교 전통 기일 계산 서비스
      </footer>
    </div>
  );
}
