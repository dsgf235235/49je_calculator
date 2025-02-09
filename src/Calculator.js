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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-orange-400 p-6">
      {/* 헤더 */}
      <header className="w-full p-6 text-center bg-yellow-700 text-white text-3xl font-bold shadow-md rounded-md">
        49제 날짜 계산기
      </header>
      
      {/* 카드 UI */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 mt-10 w-96 text-center border-4 border-yellow-500">
        <h2 className="text-xl font-bold text-gray-900 mb-6">49제 날짜 계산</h2>

        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 text-lg"
        />

        <button
          onClick={handleCalculate}
          className="w-full p-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition shadow-lg"
        >
          계산하기
        </button>

        {resultDate && (
          <p className="mt-6 text-xl font-semibold text-gray-900 bg-yellow-200 p-3 rounded-lg shadow-md">
            49제 날짜: <span className="text-yellow-800 font-bold">{resultDate}</span>
          </p>
        )}
      </div>

      {/* 푸터 */}
      <footer className="w-full p-4 text-center bg-yellow-700 text-white text-sm mt-10 rounded-md shadow-md">
        © 2024 49제 계산기 | 불교 전통 기일 계산 서비스
      </footer>
    </div>
  );
}

