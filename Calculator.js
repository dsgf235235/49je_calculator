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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* 헤더 */}
      <header className="w-full text-center py-6 bg-gray-200 text-xl font-bold text-gray-700 border-b">
        쉽고 간편한 49제 날짜 계산기
      </header>

      {/* 본문 설명 */}
      <section className="w-full max-w-3xl bg-gray-100 rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">연월일을 입력하여 49제를 계산하세요</h2>
        <p className="text-sm text-gray-600 mb-4">49제 날짜는 입력하신 날짜를 기준으로 계산됩니다. 오늘은 {format(new Date(), "yyyy년 MM월 dd일 (E)")}입니다.</p>

        <div className="flex items-center justify-between bg-white p-4 rounded-md border mb-4">
          <label htmlFor="date" className="text-gray-600 font-medium">날짜:</label>
          <input
            id="date"
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleCalculate}
            className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            계산하기
          </button>
        </div>

        {resultDate && (
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
            <p className="text-gray-700 font-medium">계산 결과:</p>
            <p className="text-lg font-bold text-blue-700">49제 날짜: {resultDate}</p>
          </div>
        )}
      </section>

      {/* 추가 설명 */}
      <section className="w-full max-w-3xl bg-gray-100 rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-lg font-bold text-gray-700 mb-2">49제란 무엇인가요?</h3>
        <p className="text-sm text-gray-600">
          49제는 불교 전통 의식으로, 사람이 사망한 후 49일 동안 영혼의 안식을 기원하는 의식입니다. 기일을 기준으로 49일째 되는 날에 마지막 제사를 지냅니다.
        </p>
      </section>

      {/* 푸터 */}
      <footer className="w-full text-center py-4 text-sm text-gray-500 border-t mt-8">
        © 2025 49제 계산기 | 정확하고 간편한 날짜 계산
      </footer>
    </div>
  );
}
