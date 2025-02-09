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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 relative">
      {/* 헤더 */}
      <header className="w-full text-center py-4 bg-blue-500 text-white text-2xl font-bold shadow">
        쉽고 간편한 49제 날짜 계산기
      </header>

      {/* 메인 카드 */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">49제 날짜 계산</h2>
        <p className="text-sm text-gray-500 mb-4">49제를 계산하려면 날짜를 입력하세요.</p>

        <div className="flex items-center gap-2 mb-4">
          <label className="text-sm font-medium text-gray-600">날짜:</label>
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="flex-1 p-2 border rounded-md focus:outline-blue-400"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition shadow-sm"
        >
          계산하기
        </button>

        {resultDate && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-lg text-gray-700 font-semibold">49제 날짜:</p>
            <p className="text-xl text-blue-700 font-bold">{resultDate}</p>
          </div>
        )}
      </div>

      {/* 푸터 */}
      <footer className="mt-8 text-center text-sm text-gray-500">
        오늘은 {format(new Date(), "yyyy년 MM월 dd일 (E)")}입니다.
      </footer>
    </div>
  );
}
